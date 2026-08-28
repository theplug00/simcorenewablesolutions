export const NAV = [
  { n: "01", label: "Approach", href: "#approach" },
  { n: "02", label: "Projects", href: "#projects" },
  { n: "03", label: "Services", href: "#services" },
  { n: "04", label: "Output", href: "#output" },
  { n: "05", label: "Method", href: "#method" },
  { n: "06", label: "Voices", href: "#voices" },
  { n: "07", label: "Journal", href: "#journal" },
  { n: "08", label: "Contact", href: "#contact" },
];

export const MARQUEE = [
  "SOLAR PV INSTALLATION",
  "BATTERY STORAGE",
  "SOLAR FARM CONSTRUCTION",
  "GROUNDWORKS",
  "CIVIL ENGINEERING",
  "ELECTRICAL WORKS",
  "TELECOM & SCADA",
  "H&S CONSULTANCY",
  "PROJECT MANAGEMENT",
  "ENERGY EFFICIENCY",
];

export const HERO_LOG = [
  { t: "09:41", msg: "harrow field — 41.2 MW exporting", kind: "ok" },
  { t: "09:41", msg: "northgate bess — charging from PV", kind: "ok" },
  { t: "09:42", msg: "fenland hub — scada heartbeat ok", kind: "ok" },
  { t: "09:42", msg: "millbrook — pile integrity test passed", kind: "ok" },
  { t: "09:43", msg: "inverter A7 — derated (ambient temp)", kind: "amber" },
  { t: "09:43", msg: "dispatch window opened — 18 MWh", kind: "ok" },
];

export interface CaseStudy {
  id: string;
  sector: string;
  title: string;
  scope: string;
  deliverables: string[];
  stats: { v: string; l: string }[];
  tags: string[];
  role: string;
  status: string;
  statusKind: "ok" | "amber";
  img: string;
  year: string;
}

export const CASES: CaseStudy[] = [
  {
    id: "01",
    sector: "UTILITY-SCALE SOLAR",
    title: "Harrow Field Solar Farm",
    scope:
      "48 MWp ground-mount farm on 94 hectares of grade-3 farmland — delivered from first driven pile to grid energisation in eleven months.",
    deliverables: [
      "72,400 bifacial modules",
      "142 string inverters",
      "4.1 km private access road",
    ],
    stats: [
      { v: "48 MWp", l: "INSTALLED CAPACITY" },
      { v: "11,200", l: "HOMES SUPPLIED" },
      { v: "19,400 t", l: "CO₂E AVOIDED / YR" },
    ],
    tags: ["EPC", "GROUND-MOUNT PV", "CIVIL WORKS"],
    role: "EPC CONTRACTOR",
    status: "LIVE — GENERATING",
    statusKind: "ok",
    img: "https://image.qwenlm.ai/generated-images/0af3e019-e504-4af4-88ea-015b82601a4c/_result.png",
    year: "2023–24",
  },
  {
    id: "02",
    sector: "C&I SOLAR + STORAGE",
    title: "Northgate Rooftop + BESS",
    scope:
      "12 MWp of rooftop PV across six logistics sheds, paired with a 20 MWh battery that shaves the 4pm peak and sells evening dispatch.",
    deliverables: [
      "21,900 rooftop modules",
      "8 × 2.5 MWh containers",
      "DNO-approved HV connection",
    ],
    stats: [
      { v: "12 MWp", l: "ROOFTOP PV" },
      { v: "20 MWh", l: "STORAGE" },
      { v: "−38%", l: "ENERGY COSTS" },
    ],
    tags: ["ROOFTOP PV", "BESS", "ELECTRICAL WORKS"],
    role: "DESIGN & BUILD",
    status: "LIVE — DISPATCHING",
    statusKind: "ok",
    img: "https://image.qwenlm.ai/generated-images/d98b45ab-4eac-4f1b-8db2-5ad1d052a04a/_result.png",
    year: "2024",
  },
  {
    id: "03",
    sector: "ELECTRICAL & TELECOM",
    title: "Fenland Grid Hub",
    scope:
      "A shared 33kV substation, fibre SCADA network and protection coordination — linking three separate farms into one clean export point.",
    deliverables: [
      "33kV switchroom & transformers",
      "96 km MV cabling",
      "SCADA over private fibre",
    ],
    stats: [
      { v: "33kV", l: "SUBSTATION" },
      { v: "96 km", l: "HV CABLE" },
      { v: "3", l: "FARMS LINKED" },
    ],
    tags: ["SUBSTATION", "TELECOM", "SCADA"],
    role: "BALANCE OF PLANT",
    status: "LIVE — MONITORED",
    statusKind: "ok",
    img: "https://image.qwenlm.ai/generated-images/562f2e26-f578-4e1a-8921-9f8ad803ab0d/_result.png",
    year: "2024–25",
  },
  {
    id: "04",
    sector: "CIVIL & GROUNDWORKS",
    title: "Millbrook Foundations",
    scope:
      "4,100 driven piles, 12 km of drainage and 3.2 km of access road — on a waterlogged site, in fourteen winter weeks, without a single defect at handover.",
    deliverables: [
      "4,100 driven piles",
      "12 km attenuation drainage",
      "3.2 km aggregate access road",
    ],
    stats: [
      { v: "4,100", l: "PILES DRIVEN" },
      { v: "14 wks", l: "PROGRAMME" },
      { v: "0", l: "DEFECTS AT HANDOVER" },
    ],
    tags: ["GROUNDWORKS", "CONCRETE", "DRAINAGE"],
    role: "CIVIL CONTRACTOR",
    status: "HANDED OVER — '24",
    statusKind: "amber",
    img: "https://image.qwenlm.ai/generated-images/c2c81f0a-73d0-4342-ad03-03e00d0f639b/_result.png",
    year: "2024",
  },
];

export interface Service {
  n: string;
  name: string;
  blurb: string;
  q: string[];
}

export const SERVICES: Service[] = [
  {
    n: "01",
    name: "SOLAR PV INSTALLATION & MAINTENANCE",
    blurb:
      "Ground-mount and rooftop arrays installed to IEC 62446 — and kept generating with scheduled O&M, thermography and 24/7 monitoring.",
    q: ["IEC 62446", "O&M contracts", "Thermography"],
  },
  {
    n: "02",
    name: "SOLAR FARM CONSTRUCTION",
    blurb:
      "Full EPC delivery for utility-scale solar: land appraisal and planning support, procurement, construction and grid energisation.",
    q: ["EPC", "Utility-scale", "Grid handover"],
  },
  {
    n: "03",
    name: "BATTERY ENERGY STORAGE (BESS)",
    blurb:
      "Grid-scale and C&I storage — design, installation and dispatch optimisation for peak shaving, frequency response and revenue stacking.",
    q: ["Grid-scale", "Peak shaving", "FCR revenue"],
  },
  {
    n: "04",
    name: "RENEWABLE-ENERGY CONSULTANCY",
    blurb:
      "Yield modelling, technology selection, planning strategy and independent engineering review for developers and investors.",
    q: ["Yield modelling", "Due diligence", "Planning"],
  },
  {
    n: "05",
    name: "ELECTRICAL & MECHANICAL WORKS",
    blurb:
      "HV/LV cabling, inverters, switchgear, transformers and mechanical mounting systems — installed, torqued, tested and certified.",
    q: ["HV/LV", "Switchgear", "Testing"],
  },
  {
    n: "06",
    name: "CIVIL ENGINEERING FOR RENEWABLES",
    blurb:
      "Design and delivery of the civil package: access roads, drainage, structures and the statutory consents that keep the programme honest.",
    q: ["Drainage", "Access roads", "Consents"],
  },
  {
    n: "07",
    name: "GROUNDWORKS & CONCRETE FOUNDATIONS",
    blurb:
      "Piling, ballast systems, trenching and concrete foundations — the unglamorous work that keeps a 25-year asset perfectly level.",
    q: ["Piling", "Concrete", "Trenching"],
  },
  {
    n: "08",
    name: "RENEWABLE PROJECT MANAGEMENT",
    blurb:
      "Single-point delivery management: programme, procurement, cost control and stakeholder reporting from day one to defects liability.",
    q: ["Programme", "Cost control", "Reporting"],
  },
  {
    n: "09",
    name: "HEALTH & SAFETY CONSULTANCY",
    blurb:
      "CDM 2015 principal designer support, RAMS, site inductions and behavioural safety programmes built for heavy civil sites.",
    q: ["CDM 2015", "RAMS", "Audits"],
  },
  {
    n: "10",
    name: "ENERGY-EFFICIENCY SOLUTIONS",
    blurb:
      "Metering, LED retrofits, power-factor correction and demand management — cutting bills before the generation even comes online.",
    q: ["Metering", "PF correction", "Demand mgmt"],
  },
];

export const METRICS = [
  { v: 212, d: 0, suffix: " MWp", label: "INSTALLED CAPACITY" },
  { v: 31, d: 0, suffix: "", label: "GRID CONNECTIONS" },
  { v: 1.2, d: 1, suffix: "M", label: "LTI-FREE WORK-HOURS" },
  { v: 14, d: 0, suffix: "", label: "YEARS IN THE FIELD" },
];

export const COUNTERS = [
  { v: 212, d: 0, suffix: " MWp", label: "INSTALLED CAPACITY" },
  { v: 184, d: 0, suffix: " GWh", label: "GENERATED IN '25" },
  { v: 96, d: 0, suffix: "K t", label: "CO₂E AVOIDED / YR" },
  { v: 1.2, d: 1, suffix: "M", label: "LTI-FREE WORK-HOURS" },
];

export const BARS = [
  { l: "'19", v: 6 },
  { l: "'20", v: 14 },
  { l: "'21", v: 26 },
  { l: "'22", v: 41 },
  { l: "'23", v: 63 },
  { l: "'24", v: 96 },
  { l: "'25", v: 184 },
];

export const MONITORS = [
  "PERFORMANCE RATIO — 84.2%",
  "MEAN TIME TO REPAIR — 3.1 H",
  "BESS CYCLES TO DATE — 4,820",
];

export const METHOD = [
  {
    n: "01",
    name: "SURVEY & DESIGN",
    blurb:
      "Ground investigation, topographic surveys, yield modelling and DNO applications — the paperwork that prevents the pain.",
    q: ["GI & topo surveys", "Yield modelling", "DNO applications"],
  },
  {
    n: "02",
    name: "GROUNDWORKS & CIVIL",
    blurb:
      "Piling, concrete foundations, drainage and access roads — poured right, once, so the next 25 years stay level.",
    q: ["Piling", "Foundations", "Drainage"],
  },
  {
    n: "03",
    name: "INSTALL & WIRE",
    blurb:
      "Mounting structures, modules, inverters, HV cabling — and the telecom backbone that lets every panel report home.",
    q: ["PV installation", "HV cabling", "SCADA & telecom"],
  },
  {
    n: "04",
    name: "ENERGISE & O&M",
    blurb:
      "Commissioning, grid energisation and 24/7 monitoring with maintenance crews who treat your yield like their own.",
    q: ["Commissioning", "Grid energisation", "24/7 O&M"],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Simco drove 4,100 piles through a wet winter and hit every milestone. The site handed over clean enough to eat off.",
    name: "D. Okafor",
    role: "PROGRAMME DIRECTOR — FENLAND ENERGY PARK",
    stamp: "CIVIL",
  },
  {
    quote:
      "One contractor for civil, electrical and telecom meant one phone number when the grid operator called. That alone was worth the contract.",
    name: "S. Whitmore",
    role: "HEAD OF INFRASTRUCTURE — NORTHGATE",
    stamp: "BESS",
  },
  {
    quote:
      "Their H&S team ran inductions like clockwork. Zero LTIs across fourteen months — and we were audited twice.",
    name: "R. Hale",
    role: "SITE OPERATIONS LEAD — HARROW FIELD",
    stamp: "H&S",
  },
];

export const CLIENTS = [
  "FENLAND ENERGY PARK",
  "NORTHGATE LOGISTICS",
  "MERIDIAN GRID",
  "SOLARIS CAPITAL",
  "TERRAFIRM CIVIL",
  "UK GRID SERVICES",
  "HALCYON REITS",
  "VERDANT POWER",
];

export const POSTS = [
  {
    cat: "FIELD LOG",
    title: "Pouring in frost: cold-weather concrete at Millbrook",
    read: "06 MIN",
    date: "JAN 2026",
  },
  {
    cat: "TECHNICAL NOTE",
    title: "BESS dispatch: shaving the 4pm peak at Northgate",
    read: "09 MIN",
    date: "DEC 2025",
  },
  {
    cat: "PROCESS",
    title: "What a 33kV DNO application actually looks like",
    read: "07 MIN",
    date: "NOV 2025",
  },
];

export const CONTACT = {
  email: "hello@simcorenewables.co.uk",
  phone: "+44 (0)20 7946 0810",
  address: "Unit 7, Meridian Business Park, Peterborough PE2 6FL, United Kingdom",
};
