export const NAV = [
  { n: "01", label: "Thesis", href: "#thesis" },
  { n: "02", label: "Systems", href: "#systems" },
  { n: "03", label: "Capabilities", href: "#capabilities" },
  { n: "04", label: "Calm Index", href: "#calm" },
  { n: "05", label: "Method", href: "#method" },
  { n: "06", label: "Voices", href: "#voices" },
  { n: "07", label: "Journal", href: "#journal" },
  { n: "08", label: "Contact", href: "#contact" },
];

export const MARQUEE = [
  "Unattended overnights",
  "99.98% uptime",
  "Zero copy-paste",
  "Humans off the loop — in the room",
  "Quiet is the KPI",
  "Est. 2016 — Seoul / Amsterdam",
];

export const PRINCIPLES = [
  {
    n: "P.01",
    title: "Boring is a budget line.",
    body: "Every task a human repeats, a machine should own. We price the tedium first — it is usually the most expensive line item you already have.",
  },
  {
    n: "P.02",
    title: "Humans judge. Machines move.",
    body: "Automation here is not headcount replacement; it is friction replacement. Your people keep the judgment, the context, and the credit.",
  },
  {
    n: "P.03",
    title: "Quiet is the KPI.",
    body: "A healthy system does not beep, ping, or trend. We measure our success in the notifications that never fired.",
  },
  {
    n: "P.04",
    title: "Calm compounds.",
    body: "An hour returned is sleep, a walk, a hard problem done properly. Multiply that by 47 live systems and you get a different kind of company.",
  },
];

export type CaseStudy = {
  sys: string;
  name: string;
  client: string;
  sector: string;
  year: string;
  tagline: string;
  desc: string;
  img: string;
  alt: string;
  metrics: { v: string; l: string }[];
  tags: string[];
  status: string;
};

export const CASES: CaseStudy[] = [
  {
    sys: "SYS.01",
    name: "LEDGERLINE",
    client: "Halvorsen Logistics",
    sector: "Freight & Finance Ops",
    year: "2025",
    tagline: "Invoice-to-ledger autopilot.",
    desc: "Halvorsen closed every month buried under 14,000 invoices keyed in by hand. We built an autopilot that reads, matches and posts them — humans now see only the 8% that actually need judgment.",
    img: "https://image.qwenlm.ai/generated-images/f0e3dfd8-8a3a-45d2-8422-df216198019b/_result.png",
    alt: "Paper invoices transforming into streams of light",
    metrics: [
      { v: "92%", l: "straight-through posting" },
      { v: "11,400", l: "hours returned / year" },
      { v: "9d → 36h", l: "monthly close" },
    ],
    tags: ["RPA", "OCR / IDP", "ERP Integration", "SAP"],
    status: "LIVE · CYCLE 4,112",
  },
  {
    sys: "SYS.02",
    name: "NIGHTSHIFT",
    client: "Mino Retail Group",
    sector: "E-commerce Ops",
    year: "2024",
    tagline: "The store restocks while you sleep.",
    desc: "40,000 SKUs repriced, reordered and reconciled unattended every night. Buyers arrive to decisions instead of spreadsheets — and stockouts fell by almost two-thirds.",
    img: "https://image.qwenlm.ai/generated-images/29128786-b9a4-45bd-9ceb-4507837149b9/_result.png",
    alt: "Quiet automated warehouse with robotic arms at night",
    metrics: [
      { v: "40K", l: "SKUs handled nightly" },
      { v: "−63%", l: "stockouts year on year" },
      { v: "06:00", l: "decision report, ready" },
    ],
    tags: ["Forecasting", "API Orchestration", "Replenishment"],
    status: "LIVE · NIGHT 471",
  },
  {
    sys: "SYS.03",
    name: "TRIAGE/9",
    client: "Clinique Atlas",
    sector: "Healthcare Intake",
    year: "2024",
    tagline: "Forms that read themselves.",
    desc: "Patient intake at Atlas meant 22 minutes of typing per visit. Our intake engine reads forms, verifies coverage and routes urgency — nurses meet people, not paperwork.",
    img: "https://image.qwenlm.ai/generated-images/ecffee31-54fb-4cda-a076-41b96c83366e/_result.png",
    alt: "Paper forms folding themselves into origami cranes",
    metrics: [
      { v: "22m → 3m", l: "intake time per patient" },
      { v: "100%", l: "after-hours auto-routing" },
      { v: "−71%", l: "administrative load" },
    ],
    tags: ["NLP", "Workflow", "Compliance", "HL7"],
    status: "LIVE · WARD 9",
  },
  {
    sys: "SYS.04",
    name: "GLASSHOUSE",
    client: "Forge & Co Foundries",
    sector: "Manufacturing Telemetry",
    year: "2023",
    tagline: "Every machine, one quiet room.",
    desc: "1,200 sensors across three plants used to scream into three separate inboxes. Glasshouse folds them into one calm surface — anomalies surface 41 minutes earlier, and nobody gets pinged for noise.",
    img: "https://image.qwenlm.ai/generated-images/1cd9f8d0-2b59-4b49-bb95-64e754816366/_result.png",
    alt: "Calm control room with softly glowing dashboards",
    metrics: [
      { v: "1,200", l: "sensors → one surface" },
      { v: "+41min", l: "earlier anomaly catch" },
      { v: "−88%", l: "false alerts" },
    ],
    tags: ["Telemetry", "Observability", "Alert Design", "MQTT"],
    status: "LIVE · PLANT 3",
  },
];

export const CAPABILITIES = [
  {
    n: "C.01",
    title: "Workflow Automation",
    body: "End-to-end pipelines that move work between your tools without hands: approvals, handoffs, escalations, retries — choreographed, logged, and boring on purpose.",
    tags: ["Orchestration", "Approvals", "Escalation paths"],
  },
  {
    n: "C.02",
    title: "Integration Fabric",
    body: "ERP, CRM, WMS, the spreadsheet on Dana's desktop — woven into one coherent nervous system with 214 maintained connectors and typed contracts between every pair.",
    tags: ["214 connectors", "Typed contracts", "Event mesh"],
  },
  {
    n: "C.03",
    title: "Intelligent Documents",
    body: "Invoices, intake forms, bills of lading, claims. We teach systems to read them at 99.2% accuracy and to ask a human only when a number genuinely looks strange.",
    tags: ["OCR / IDP", "Extraction", "Human-in-the-loop"],
  },
  {
    n: "C.04",
    title: "Autonomous Agents",
    body: "Carefully scoped AI colleagues that draft, route, reconcile and follow up — with audit trails, spending limits, and a big red off switch we are not shy about using.",
    tags: ["LLM ops", "Guardrails", "Audit trails"],
  },
  {
    n: "C.05",
    title: "Observability & Care",
    body: "Monitoring that whispers instead of screams. Self-healing retries, graceful degradation, and a 24/7 ward team so on-call becomes a formality, not a lifestyle.",
    tags: ["24/7 ward", "Self-healing", "Alert design"],
  },
  {
    n: "C.06",
    title: "Legacy Rescue",
    body: "The mainframe from 1998 that runs payroll? We don't judge. Screen-scraping bridges and patient APIs keep it earning its keep until you're ready to retire it.",
    tags: ["Screen bridges", "COBOL-friendly", "Zero-downtime"],
  },
];

export const CALM_METRICS = [
  { v: 312410, suffix: "", label: "Human hours returned", note: "since 2016, audited annually" },
  { v: 47, suffix: "", label: "Systems live & humming", note: "across 9 industries" },
  { v: 214, suffix: "M", label: "Tasks run unattended", note: "trailing twelve months" },
  { v: 192, suffix: "s", label: "Median incident response", note: "3m 12s — mostly automated" },
];

export const QUARTERS = [
  { q: "Q1·24", h: 6.2 },
  { q: "Q2·24", h: 8.9 },
  { q: "Q3·24", h: 11.4 },
  { q: "Q4·24", h: 13.8 },
  { q: "Q1·25", h: 15.2 },
  { q: "Q2·25", h: 18.6 },
  { q: "Q3·25", h: 21.3 },
  { q: "Q4·25", h: 24.1 },
];

export const METHOD = [
  {
    n: "01",
    title: "Listen",
    time: "Week 0",
    body: "We shadow your operators for a week and time every keystroke. The map of where the hours actually go is always a surprise. Usually an expensive one.",
  },
  {
    n: "02",
    title: "Map",
    time: "Weeks 1–2",
    body: "Process mining turns observations into a live diagram of your operation — every loop, exception and workaround drawn in the open, priced in hours.",
  },
  {
    n: "03",
    title: "Build",
    time: "Weeks 3–6",
    body: "We automate the loudest loops first, in production-shaped slices. Your team watches each system go quiet, one Friday at a time.",
  },
  {
    n: "04",
    title: "Quiet",
    time: "Forever",
    body: "The ward takes over: monitoring, self-healing, monthly tuning. You get a one-page letter saying everything is fine. Every month. Boringly.",
  },
];

export const VOICES = [
  {
    quote: "We closed the books with three people on energy drinks. Now it closes overnight and nobody texts me.",
    name: "Ingrid Halvorsen",
    role: "CFO, Halvorsen Logistics",
    sys: "SYS.01",
  },
  {
    quote: "Comghy didn't sell us robots. They gave us our evenings back.",
    name: "Daan Vermeer",
    role: "COO, Mino Retail Group",
    sys: "SYS.02",
  },
  {
    quote: "The scariest part is how boring it all got. Boring is exactly what we paid for.",
    name: "Dr. Leïla Amrani",
    role: "Ops Director, Clinique Atlas",
    sys: "SYS.03",
  },
];

export const JOURNAL = [
  {
    date: "FEB 2026",
    title: "The $4.1M spreadsheet",
    teaser: "What manual reconciliation really costs once you price in the fear.",
    read: "06 MIN",
  },
  {
    date: "DEC 2025",
    title: "Your ERP is lonely",
    teaser: "Integration debt is the interest you pay on every hurry.",
    read: "04 MIN",
  },
  {
    date: "OCT 2025",
    title: "Interfaces that whisper",
    teaser: "Design principles for operations screens nobody should have to stare at.",
    read: "07 MIN",
  },
];

export const CLIENTS = [
  "Halvorsen Logistics",
  "Mino Retail Group",
  "Clinique Atlas",
  "Forge & Co Foundries",
  "Bankhaus Lindt",
  "Okto Brewing",
  "Vela Marine",
  "Nordwind Air",
];

export const HERO_LOG = [
  { t: "03:41:07", msg: "nightshift.replenish — 12,842 tasks queued", kind: "sage" },
  { t: "03:41:09", msg: "ledgerline.posting — batch 4,112 settled", kind: "sage" },
  { t: "03:41:12", msg: "glasshouse.telemetry — 1,200 sensors nominal", kind: "sage" },
  { t: "03:41:15", msg: "triage.route — after-hours intake auto-routed", kind: "amber" },
  { t: "03:41:16", msg: "ward.oncall — 0 pages this week", kind: "sage" },
];
