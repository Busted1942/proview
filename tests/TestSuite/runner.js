import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import yaml from 'js-yaml';
import OpenAI from 'openai';

dotenv.config();
const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) { console.error("Missing OPENAI_API_KEY in .env"); process.exit(1); }
const model = process.env.MODEL || "gpt-4o-mini";
const temp = parseFloat(process.env.TEMP || "0.2");
const installerPath = process.env.INSTALLER_PATH || "./installer.yaml";
const client = new OpenAI({ apiKey });

function loadSuites(dir){
  const files = fs.readdirSync(dir).filter(f=>f.endsWith('.yaml')||f.endsWith('.yml'));
  return files.map(f=>({file:path.join(dir,f), data:yaml.load(fs.readFileSync(path.join(dir,f),'utf8'))}));
}

// --- Add near the top (after dotenv.config())
const includeTags = (process.env.INCLUDE_TAGS || "").split(",").filter(Boolean).map(s=>s.trim().toLowerCase());
const includeIds   = (process.env.INCLUDE_IDS   || "").split(",").filter(Boolean).map(s=>s.trim());
const grepTitle    = (process.env.GREP_TITLE    || "").toLowerCase();

// --- Replace the for-loop that iterates suite tests with this:
const allTests = (suite.Tests || suite.tests || []);
const filtered = allTests.filter(t => {
  if (includeIds.length && !includeIds.includes(t.id)) return false;
  if (includeTags.length) {
    const tags = (t.tags || []).map(x => String(x).toLowerCase());
    if (!includeTags.some(tag => tags.includes(tag))) return false;
  }
  if (grepTitle && !String(t.title||"").toLowerCase().includes(grepTitle)) return false;
  return true;
});

console.log(`Running ${filtered.length}/${allTests.length} selected tests...`);
for (const t of filtered) {
  // ... existing step execution ...
}

function toLowerContains(hay, needle){ return (hay||"").toLowerCase().includes((needle||"").toLowerCase()); }

function normalizeFooterAsserts(expect, acc){
  const out = {...acc};
  if (expect?.footer?.must_include){
    out.contains = [...(out.contains||[]), ...expect.footer.must_include];
  }
  if (expect?.footer?.must_not_include){
    out.not_contains = [...(out.not_contains||[]), ...expect.footer.must_not_include];
  }
  // soft heuristics
  if (expect?.escalation?.required === true){
    out.contains = [...(out.contains||[]), "Next step", "escalation"];
  }
  if (expect?.struggle_detection_triggered === true){
    out.contains = [...(out.contains||[]), "options", "clarify", "best-effort"];
  }
  return out;
}

function buildInstallMessages(installerYaml){
  return [
    { role:"system", content:"You are a test host. Honor the following YAML as an installation spec called 'ProView Installer'. Emulate install steps, gates, and runtime behavior per the spec. Reply with concise, plain text for requested actions."},
    { role:"user", content:"Install the following ProView Installer spec then wait for further test prompts."},
    { role:"user", content: installerYaml }
  ];
}

function buildStepPrompt(step, prestate, mockweb){
  const mode = (step.mode||"Standard");
  const pre = prestate ? `Prestate:
- Industry: ${prestate.industry||"(unset)"}
- Role: ${prestate.role||"(unset)"}
- Trusted domains: ${(prestate.trusted_domains||[]).join(', ')||"(none)"}
` : "";
  const mw = mockweb ? `MockWeb:
- allow_vendor_fallback: ${mockweb.allow_vendor_fallback===true}
- responses:
${(mockweb.responses||[]).map(r=>`  - url: ${r.url}
    tier: ${r.tier}
    reachable: ${r.reachable===true}`).join('\n')}
` : "";
  return `Mode: ${mode}
${pre}${mw}
UserPrompt: ${step.userprompt}

Please obey the installer/runtime rules. If MockWeb is present, act as if those are your only web.run results.
Return the answer you would show the user.`;
}

function assertText(out, expect){
  let failures = [];
  const ex = normalizeFooterAsserts(expect || {}, expect || {});
  for (const s of (ex.contains||[])){
    if (!toLowerContains(out, s)) failures.push(`missing contains: ${s}`);
  }
  for (const s of (ex.not_contains||[])){
    if (toLowerContains(out, s)) failures.push(`unexpected text present: ${s}`);
  }
  for (const pat of (ex.regex||[])){
    const re = new RegExp(pat, 'i');
    if (!re.test(out)) failures.push(`regex miss: /${pat}/i`);
  }
  return failures;
}

async function chat(messages){
  const r = await client.chat.completions.create({ model, temperature: temp, messages });
  return r.choices?.[0]?.message?.content || "";
}

async function runSuite(file, suite){
  console.log(`\n=== Suite: ${suite?.Meta?.Name || path.basename(file)} (${suite?.Meta?.Version||''}) ===`);
  // Obtain installer
  let installer = suite?.installer?.inline;
  if (!installer){
    if (!fs.existsSync(installerPath)){
      console.error(`INSTALLER_PATH not found: ${installerPath}`);
      process.exit(1);
    }
    installer = fs.readFileSync(installerPath, 'utf8');
  }
  // Install
  const base = buildInstallMessages(installer);
  const installReply = await chat(base);
  console.log("Install:", installReply.slice(0,200).replace(/\n/g,' '), "...");

  let passed=0, failed=0;
  for (const t of (suite.Tests||suite.tests||[])){
    const messages = [...base, { role:"user", content: buildStepPrompt(t, t.prestate, t.mockweb) }];
    const out = await chat(messages);
    const errs = assertText(out, t.expect);
    if (errs.length){
      failed++;
      console.log(`❌ ${t.id || t.title}`);
      console.log("Prompt:", t.userprompt);
      console.log("Output:", out);
      console.log("Asserts:", errs.join("; "));
    } else {
      passed++;
      console.log(`✅ ${t.id || t.title}`);
    }
  }
  console.log(`Summary: ${passed} passed, ${failed} failed.`);
  return {passed, failed};
}

async function main(){
  const suites = loadSuites("./tests");
  if (!suites.length){ console.error("No suites in ./tests"); process.exit(1); }
  let P=0,F=0;
  for (const s of suites){
    const r = await runSuite(s.file, s.data);
    P+=r.passed; F+=r.failed;
  }
  console.log(`\nALL DONE → ${P} passed, ${F} failed.`);
  process.exit(F?1:0);
}

main().catch(e=>{ console.error(e); process.exit(1); });
