import { useState } from "react";
import { CALM_METRICS, CAPABILITIES, METHOD, PRINCIPLES, QUARTERS } from "../lib/data";
import { MaskWords, Reveal, Sparkle, useCountUp, useInView } from "../lib/motion";

export function SectionLabel({ n, title, tone = "ink" }: { n: string; title: string; tone?: "ink" | "sage" }) {
  return (
    <div className="flex items-center gap-4">
      <span className={`mono-label ${tone === "sage" ? "text-sage" : "text-moss"}`}>
        {n} / {title}
      </span>
      <span className={`h-px flex-1 ${tone === "sage" ? "bg-paper/15" : "bg-ink/12"}`} />
      <Sparkle className={`h-3.5 w-3.5 ${tone === "sage" ? "text-sage" : "text-moss"}`} />
    </div>
  );
}

/* ================= 01 — THE QUIET THESIS ================= */

export function Thesis() {
  return (
    <section id="thesis" className="relative border-t border-ink/10 bg-porcelain">
      <div className="mx-auto max-w-[1440px] px-5 py-[88px] md:px-10 md:py-[132px]">
        <SectionLabel n="01" title="The Quiet Thesis" />

        <div className="mt-[44px] grid gap-12 lg:grid-cols-12">
          <h2 className="disp text-[9.5vw] uppercase leading-[0.95] text-ink md:text-[5.6vw] lg:col-span-7 lg:text-[4.6vw]">
            <MaskWords
              text="Stress is a systems problem."
              renderWord={(w, i) =>
                i === 3 ? <span className="serif-it lowercase text-moss">{w}</span> : <span>{w}</span>
              }
            />
          </h2>
          <div className="flex flex-col justify-end gap-6 lg:col-span-4 lg:col-start-9">
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-ink/70 md:text-lg">
                Every 2 a.m. alert, every spreadsheet synced by hand, every form
                retyped from a PDF — that is a machine's job wearing a human's
                face. Since 2016 we have been quietly reassigning that work, one
                loop at a time.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-base leading-relaxed text-ink/70 md:text-lg">
                The result is not a futuristic control room. It is an operations
                team that logs off at six, a CFO who trusts the close, and a
                pager that stays silent. We call it{" "}
                <em className="serif-it text-xl text-moss">the calm dividend</em>.
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="grid grid-cols-2 gap-px border border-ink/10 bg-ink/10">
                {[
                  ["312K+", "hours returned"],
                  ["47", "systems live"],
                  ["9", "industries"],
                  ["0", "weekend pages, 2025"],
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
        </div>
      </div>
    </section>
  );
}

/* ================= 03 — CAPABILITIES ================= */

export function Capabilities() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="capabilities" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-[88px] md:px-10 md:py-[132px]">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* sticky rail */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[120px]">
              <SectionLabel n="03" title="Capabilities" />
              <h2 className="disp mt-[44px] text-5xl uppercase leading-[0.95] text-ink md:text-7xl">
                What we take
                <br />
                <span className="serif-it lowercase text-moss">off your plate.</span>
              </h2>
              <p className="mt-8 max-w-sm text-base leading-relaxed text-ink/65">
                Six disciplines, one contract, zero blame-shifting between
                vendors. We take a process from "Dana does it by hand" to
                "it happens, audited, at 3 a.m." — and we stay on the ward.
              </p>
              <div className="mono-label mt-10 flex flex-wrap gap-x-6 gap-y-2 text-ink/50">
                <span>6 disciplines</span>
                <span className="text-sage">✳</span>
                <span>214 connectors</span>
                <span className="text-sage">✳</span>
                <span>24/7 ward</span>
              </div>
            </div>
          </div>

          {/* accordion */}
          <div className="lg:col-span-7">
            {CAPABILITIES.map((c, i) => {
              const open = openIdx === i;
              return (
                <Reveal key={c.n} delay={i * 60}>
                  <div className={`border-t border-ink/12 transition-colors duration-300 ${open ? "bg-porcelain" : "hover:bg-porcelain/60"} ${i === CAPABILITIES.length - 1 ? "border-b" : ""}`}>
                    <button
                      onClick={() => setOpenIdx(open ? -1 : i)}
                      className="flex w-full items-center gap-5 px-2 py-6 text-left md:gap-8 md:px-6 md:py-7"
                      aria-expanded={open}
                    >
                      <span className="mono-label text-moss">{c.n}</span>
                      <span className={`disp flex-1 text-xl uppercase transition-colors duration-300 md:text-3xl ${open ? "text-moss" : "text-ink"}`}>
                        {c.title}
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
                          <p className="max-w-xl text-sm leading-relaxed text-ink/65 md:text-base">{c.body}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {c.tags.map((t) => (
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

/* ================= 04 — THE CALM INDEX ================= */

const R = 138;
const C = 2 * Math.PI * R;

export function CalmIndex() {
  const [gRef, gIn] = useInView<HTMLDivElement>(0.3);
  const [bRef, bIn] = useInView<HTMLDivElement>(0.3);
  const uptime = useCountUp(99.98, gIn, 2400, 2);

  return (
    <section id="calm" className="grid-reactor relative overflow-hidden border-t border-ink/10 bg-reactor text-paper">
      <div className="drift pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-moss/25 blur-[130px]" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-[88px] md:px-10 md:py-[132px]">
        <SectionLabel n="04" title="The Calm Index" tone="sage" />

        <div className="mt-[44px] grid items-center gap-16 lg:grid-cols-12">
          {/* ring gauge */}
          <div ref={gRef} className="lg:col-span-5">
            <div className="relative mx-auto w-fit" data-cursor>
              <svg viewBox="0 0 320 320" className="h-[280px] w-[280px] md:h-[340px] md:w-[340px]">
                <circle cx="160" cy="160" r={R} fill="none" stroke="rgba(233,234,225,0.12)" strokeWidth="7" />
                <circle cx="160" cy="160" r={R - 16} fill="none" stroke="rgba(143,191,106,0.15)" strokeWidth="1" strokeDasharray="3 6" className="spin-slow" style={{ transformOrigin: "160px 160px" }} />
                <circle
                  cx="160"
                  cy="160"
                  r={R}
                  fill="none"
                  stroke="var(--color-sage)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={C}
                  strokeDashoffset={gIn ? C * (1 - 0.9998) : C}
                  transform="rotate(-90 160 160)"
                  className="ring-arc"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="disp text-5xl text-paper md:text-6xl">
                  {uptime}
                  <span className="text-sage">%</span>
                </div>
                <div className="mono-label mt-2 text-mist">unattended uptime</div>
                <div className="mono-label text-mist/60">trailing 12 months</div>
              </div>
            </div>
            <p className="serif-it mx-auto mt-10 max-w-xs text-center text-2xl leading-snug text-paper/85">
              "The best system is the one nobody notices."
            </p>
          </div>

          {/* counters */}
          <div className="lg:col-span-7">
            <div className="grid gap-px border border-paper/12 bg-paper/12 sm:grid-cols-2">
              {CALM_METRICS.map((m, i) => (
                <MetricCell key={m.label} target={m.v} suffix={m.suffix} label={m.label} note={m.note} inView={gIn} delay={i * 120} />
              ))}
            </div>

            {/* bar chart */}
            <div ref={bRef} className={`mt-14 ${bIn ? "is-in" : ""}`}>
              <div className="mono-label mb-5 flex items-center justify-between text-mist">
                <span>HOURS RETURNED / QUARTER (K)</span>
                <span className="flex items-center gap-2">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sage" /> MEASURED, AUDITED
                </span>
              </div>
              <div className="flex h-[190px] items-end gap-2 md:gap-4">
                {QUARTERS.map((q, i) => (
                  <div key={q.q} className="group flex flex-1 flex-col items-center gap-3">
                    <span className="font-mono text-[10px] text-mist opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {q.h}k
                    </span>
                    <div
                      className="bar-grow w-full bg-moss transition-colors duration-300 group-hover:bg-sage"
                      style={{ height: `${(q.h / 24.1) * 100}%`, "--d": `${i * 90}ms` } as React.CSSProperties}
                    />
                    <span className="mono-label text-[9px]! text-mist/70">{q.q}</span>
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
  suffix,
  label,
  note,
  inView,
  delay,
}: {
  target: number;
  suffix: string;
  label: string;
  note: string;
  inView: boolean;
  delay: number;
}) {
  const v = useCountUp(target, inView, 2200 + delay);
  return (
    <div className="group bg-reactor p-7 transition-colors duration-300 hover:bg-reactor2 md:p-9">
      <div className="disp text-4xl text-paper transition-colors duration-300 group-hover:text-sage md:text-5xl">
        {v}
        <span className="text-sage">{suffix}</span>
      </div>
      <div className="mono-label mt-3 text-paper/80">{label}</div>
      <div className="mt-1 font-mono text-[11px] text-mist/70">{note}</div>
    </div>
  );
}

/* ================= 05 — METHOD ================= */

export function Method() {
  return (
    <section id="method" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-[88px] md:px-10 md:py-[132px]">
        <SectionLabel n="05" title="Method — How a System Goes Quiet" />
        <h2 className="disp mt-[44px] max-w-3xl text-5xl uppercase leading-[0.95] text-ink md:text-7xl">
          From noise <span className="serif-it lowercase text-moss">to hum</span> in six weeks.
        </h2>

        <div className="relative mt-[66px] grid gap-12 md:grid-cols-4 md:gap-8">
          <div className="absolute left-0 right-0 top-[9px] hidden h-px border-t border-dashed border-ink/25 md:block" />
          {METHOD.map((s, i) => (
            <Reveal key={s.n} delay={i * 130}>
              <div className="group relative">
                <div className="relative z-10 mb-7 flex items-center">
                  <span className="h-[19px] w-[19px] rounded-full border border-ink/30 bg-paper transition-colors duration-300 group-hover:border-moss group-hover:bg-sage" />
                  <span className="mono-label ml-4 border border-ink/15 px-3 py-1 text-ink/60">{s.time}</span>
                </div>
                <div className="disp txt-outline txt-outline-hover text-7xl md:text-8xl">
                  {s.n}
                </div>
                <h3 className="disp mt-4 text-3xl uppercase text-ink">{s.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
