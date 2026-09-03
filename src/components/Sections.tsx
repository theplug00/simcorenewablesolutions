import { useState } from "react";
import { BARS, COUNTERS, METHOD, MONITORS, SERVICES } from "../lib/data";
import { MaskWords, Reveal, Sparkle, useCountUp, useInView } from "../lib/motion";

export function SectionLabel({ n, title, tone = "ink" }: { n: string; title: string; tone?: "ink" | "sage" }) {
  return (
    <div className="flex items-center gap-4">
      <span className={`mono-label ${tone === "sage" ? "text-sage" : "text-moss"}`}>
        {n} / {title}
      </span>
      <span className={`h-px flex-1 ${tone === "sage" ? "bg-paper/15" : "rule-energy"}`} />
      <Sparkle className={`h-3.5 w-3.5 ${tone === "sage" ? "text-sage" : "text-moss"}`} />
    </div>
  );
}

/* ================= 01 — THE GROUNDWORK APPROACH ================= */

const PRINCIPLES = [
  {
    n: "01",
    title: "POUR IT RIGHT, ONCE.",
    body: "A 25-year asset is only as good as what's under it. We over-engineer groundworks and foundations because a solar farm cannot afford a single settlement crack.",
  },
  {
    n: "02",
    title: "WIRE IT TO LAST.",
    body: "Every connection torqued, labelled and photographed. When the grid operator calls at 2 a.m., our drawings answer first — so your team sleeps through it.",
  },
];

export function Thesis() {
  return (
    <section id="approach" className="relative border-t border-ink/10 bg-porcelain">
      <div className="mx-auto max-w-[1440px] px-5 py-[88px] md:px-10 md:py-[132px]">
        <SectionLabel n="01" title="The Groundwork Approach" />

        <div className="mt-[44px] grid gap-12 lg:grid-cols-12">
          <h2 className="disp text-[9.5vw] uppercase leading-[0.95] text-ink md:text-[5.6vw] lg:col-span-7 lg:text-[4.6vw]">
            <MaskWords
              text="The energy transition is a construction problem."
              renderWord={(w, i) =>
                i === 5 ? <span className="serif-it lowercase text-moss">{w}</span> : <span>{w}</span>
              }
            />
          </h2>
          <div className="flex flex-col justify-end gap-6 lg:col-span-4 lg:col-start-9">
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-ink/70 md:text-lg">
                Everyone sells the panel. Almost nobody talks about the pile it
                stands on, the trench the cable runs through, or the substation
                that makes it all worth anything. Since 2012 we have been doing
                the whole job — civil, electrical and telecom — under one
                accountable roof.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-base leading-relaxed text-ink/70 md:text-lg">
                The result is not a prettier spreadsheet. It is a site that
                energises on programme, a yield that holds for 25 years, and a
                client who never has to chase three contractors. We call it{" "}
                <em className="serif-it text-xl text-moss">the ground dividend</em>.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="grid grid-cols-2 gap-px border border-ink/10 bg-ink/10">
                {[
                  ["212 MWp", "installed capacity"],
                  ["31", "grid connections"],
                  ["1.2M", "LTI-free work-hours"],
                  ["0", "settlement claims"],
                ].map(([v, l]) => (
                  <div key={l} className="bg-porcelain p-4">
                    <div className="disp text-2xl text-ink md:text-3xl">{v}</div>
                    <div className="mono-label mt-1 text-ink/50">{l}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* principles */}
        <div className="mt-[88px]">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 90}>
              <div className="group grid cursor-default grid-cols-[64px_1fr] items-baseline gap-4 border-t border-ink/12 py-7 transition-colors duration-300 last:border-b hover:bg-paper md:grid-cols-[110px_1fr_1fr] md:gap-8 md:py-9">
                <div className="mono-label pt-2 text-moss">{p.n}</div>
                <h3 className="disp text-2xl uppercase text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                  {p.title}
                  <Sparkle className="ml-3 inline h-4 w-4 text-sage opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:h-5 md:w-5" />
                </h3>
                <p className="col-start-2 text-sm leading-relaxed text-ink/60 md:col-start-3 md:text-base">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <blockquote className="border-l-2 border-sage py-4 pl-6 md:pl-10">
              <p className="serif-it max-w-3xl text-2xl leading-snug text-ink/85 md:text-3xl">
                "A solar farm is 40% steel and concrete, 40% cabling and
                switchgear — and 20% patience with the grid operator. We bring
                all three."
              </p>
              <footer className="mono-label mt-4 text-ink/50">
                M. ADEYEMI — MANAGING DIRECTOR, SIMCO
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ================= 03 — SERVICES ================= */

export function Capabilities() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="services" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-[88px] md:px-10 md:py-[132px]">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* sticky rail */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[120px]">
              <SectionLabel n="03" title="Services — Full Scope" />
              <h2 className="disp mt-[44px] text-5xl uppercase leading-[0.95] text-ink md:text-7xl">
                From first dig
                <br />
                <span className="serif-it lowercase text-moss">to first megawatt.</span>
              </h2>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-ink/65">
                Ten disciplines, one delivery team. We take renewable projects
                from ground investigation to grid energisation — and keep them
                producing for the 25 years after.
              </p>
              <div className="mono-label mt-10 flex flex-wrap gap-x-6 gap-y-2 text-ink/50">
                <span>10 disciplines</span>
                <span className="text-sage">✳</span>
                <span>212 MWp built</span>
                <span className="text-sage">✳</span>
                <span>31 sites monitored</span>
              </div>
              <a
                href="mailto:hello@simcorenewables.co.uk?subject=Capability%20statement%20request"
                className="mono-label group mt-10 inline-flex items-center gap-3 border border-ink/20 px-6 py-4 text-ink transition-colors duration-300 hover:border-moss hover:bg-moss hover:text-paper"
              >
                Request capability statement
                <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </a>
            </div>
          </div>

          {/* accordion */}
          <div className="lg:col-span-7">
            {SERVICES.map((c, i) => {
              const open = openIdx === i;
              return (
                <Reveal key={c.n} delay={i * 45}>
                  <div className={`border-t border-ink/12 transition-colors duration-300 ${open ? "bg-porcelain" : "hover:bg-porcelain/60"} ${i === SERVICES.length - 1 ? "border-b" : ""}`}>
                    <button
                      onClick={() => setOpenIdx(open ? -1 : i)}
                      className="flex w-full items-center gap-5 px-2 py-6 text-left md:gap-8 md:px-6 md:py-7"
                      aria-expanded={open}
                    >
                      <span className="mono-label text-moss">{c.n}</span>
                      <span className={`disp flex-1 text-lg uppercase transition-colors duration-300 md:text-2xl ${open ? "text-moss" : "text-ink"}`}>
                        {c.name}
                      </span>
                      <svg
                        viewBox="0 0 20 20"
                        className={`h-5 w-5 shrink-0 text-ink transition-transform duration-500 ${open ? "rotate-45 text-moss" : ""}`}
                        fill="none"
                        aria-hidden="true"
                      >
                        <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                    </button>
                    <div className={`acc-body ${open ? "open" : ""}`}>
                      <div className="acc-inner">
                        <div className="px-2 pb-7 md:px-6 md:pl-[7.5rem]">
                          <p className="max-w-xl text-sm leading-relaxed text-ink/65 md:text-base">{c.blurb}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {c.q.map((t) => (
                              <span key={t} className="mono-label border border-ink/15 px-3 py-1.5 text-ink/60">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= 04 — OUTPUT ================= */

const R = 138;
const C = 2 * Math.PI * R;

export function CalmIndex() {
  const [gRef, gIn] = useInView<HTMLDivElement>(0.3);
  const [bRef, bIn] = useInView<HTMLDivElement>(0.3);
  const availability = useCountUp(99.4, gIn, 2400, 1);

  return (
    <section id="output" className="grid-reactor relative overflow-hidden border-t border-ink/10 bg-reactor text-paper">
      <div className="drift pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-moss/25 blur-[130px]" />
      <div className="drift pointer-events-none absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-amber/10 blur-[120px]" style={{ animationDelay: "-7s" }} />
      <div className="relative mx-auto max-w-[1440px] px-5 py-[88px] md:px-10 md:py-[132px]">
        <SectionLabel n="04" title="Output — Measured" tone="sage" />

        <div className="mt-[44px] grid items-center gap-16 lg:grid-cols-12">
          {/* ring gauge */}
          <div ref={gRef} className="lg:col-span-5">
            <div className="relative mx-auto w-fit" data-cursor>
              <svg viewBox="0 0 320 320" className="h-[280px] w-[280px] md:h-[340px] md:w-[340px]">
                <circle cx="160" cy="160" r={R} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="7" />
                <circle cx="160" cy="160" r={R - 16} fill="none" stroke="rgba(46,237,150,0.28)" strokeWidth="1" strokeDasharray="3 6" className="spin-slow" style={{ transformOrigin: "160px 160px" }} />
                <circle
                  cx="160"
                  cy="160"
                  r={R}
                  fill="none"
                  stroke="var(--color-sage)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={C}
                  strokeDashoffset={gIn ? C * (1 - 0.994) : C}
                  transform="rotate(-90 160 160)"
                  className="ring-arc"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="disp text-5xl text-paper md:text-6xl">
                  {availability}
                  <span className="text-sage">%</span>
                </div>
                <div className="mono-label mt-2 text-mist">fleet availability</div>
                <div className="mono-label text-mist/60">trailing 12 months</div>
              </div>
            </div>
            <p className="serif-it mx-auto mt-10 max-w-xs text-center text-2xl leading-snug text-paper/85">
              "The panels make the headlines. The foundations, the cables and
              the maintenance make the money."
            </p>
            <div className="mono-label mt-2 text-center text-mist/60">— R. OSEI, HEAD OF O&M</div>

            <div className="mx-auto mt-8 flex max-w-xs flex-col gap-2">
              {MONITORS.map((m) => (
                <div key={m} className="glass-dark flex items-center gap-3 px-4 py-2.5">
                  <span className="pulse-dot h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                  <span className="mono-label text-paper/80">{m}</span>
                </div>
              ))}
            </div>
          </div>

          {/* counters */}
          <div className="lg:col-span-7">
            <div className="grid gap-px border border-paper/12 bg-paper/12 sm:grid-cols-2">
              {COUNTERS.map((m, i) => (
                <MetricCell key={m.label} target={m.v} decimals={m.d} suffix={m.suffix} label={m.label} inView={gIn} delay={i * 120} />
              ))}
            </div>

            {/* bar chart */}
            <div ref={bRef} className={`mt-14 ${bIn ? "is-in" : ""}`}>
              <div className="mono-label mb-5 flex items-center justify-between text-mist">
                <span>GENERATION BY YEAR (GWh)</span>
                <span className="flex items-center gap-2">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sage" /> METERED & AUDITED
                </span>
              </div>
              <div className="flex h-[190px] items-end gap-2 md:gap-4">
                {BARS.map((q, i) => (
                  <div key={q.l} className="group flex flex-1 flex-col items-center gap-3">
                    <span className="font-mono text-[10px] text-mist opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {q.v}
                    </span>
                    <div
                      className="bar-grow w-full bg-moss transition-colors duration-300 group-hover:bg-sage"
                      style={{ height: `${(q.v / 184) * 100}%`, "--d": `${i * 90}ms` } as React.CSSProperties}
                    />
                    <span className="mono-label text-[9px]! text-mist/70">{q.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCell({
  target,
  decimals,
  suffix,
  label,
  inView,
  delay,
}: {
  target: number;
  decimals: number;
  suffix: string;
  label: string;
  inView: boolean;
  delay: number;
}) {
  const v = useCountUp(target, inView, 2200 + delay, decimals);
  return (
    <div className="group bg-reactor p-7 transition-colors duration-300 hover:bg-reactor2 md:p-9">
      <div className="disp text-4xl text-paper transition-colors duration-300 group-hover:text-sage md:text-5xl">
        {v}
        <span className="text-sage">{suffix}</span>
      </div>
      <div className="mono-label mt-3 text-paper/80">{label}</div>
    </div>
  );
}

/* ================= 05 — METHOD ================= */

export function Method() {
  return (
    <section id="method" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-[88px] md:px-10 md:py-[132px]">
        <SectionLabel n="05" title="Method — How a Site Comes Alive" />
        <h2 className="disp mt-[44px] max-w-3xl text-5xl uppercase leading-[0.95] text-ink md:text-7xl">
          One site, <span className="serif-it lowercase text-moss">four movements.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/60">
          Every Simco project runs the same disciplined route — surveyed, poured,
          wired, energised. No phase starts until the last one is signed off.
        </p>

        <div className="relative mt-[66px] grid gap-12 md:grid-cols-4 md:gap-8">
          <div className="absolute left-0 right-0 top-[9px] hidden h-px border-t border-dashed border-ink/25 md:block" />
          {METHOD.map((s, i) => (
            <Reveal key={s.n} delay={i * 130}>
              <div className="group relative">
                <div className="relative z-10 mb-7 flex items-center">
                  <span className="h-[19px] w-[19px] rounded-full border border-ink/30 bg-paper transition-colors duration-300 group-hover:border-moss group-hover:bg-sage" />
                  <span className="mono-label ml-4 border border-ink/15 px-3 py-1 text-ink/60">PHASE {s.n}</span>
                </div>
                <div className="disp txt-outline txt-outline-hover text-7xl md:text-8xl">
                  {s.n}
                </div>
                <h3 className="disp mt-4 text-3xl uppercase text-ink">{s.name}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">{s.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.q.map((t) => (
                    <span key={t} className="mono-label border border-ink/12 px-2.5 py-1 text-[9px] text-ink/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
