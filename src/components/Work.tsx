import { CASES, CLIENTS, JOURNAL, VOICES } from "../lib/data";
import { ArrowUpRight, Reveal } from "../lib/motion";
import { SectionLabel } from "./Sections";

/* ================= 02 — SELECTED SYSTEMS ================= */

export function Systems() {
  return (
    <section id="systems" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-[88px] md:px-10 md:py-[132px]">
        <SectionLabel n="02" title="Selected Systems" />
        <div className="mt-[44px] flex flex-wrap items-end justify-between gap-8">
          <h2 className="disp text-5xl uppercase leading-[0.95] text-ink md:text-7xl">
            Quiet machinery,
            <br />
            <span className="serif-it lowercase text-moss">loud results.</span>
          </h2>
          <div className="flex items-center gap-6 pb-2">
            <p className="mono-label max-w-[220px] leading-5 text-ink/50">
              Four of forty-seven. Names real, hours audited, pagers silent.
            </p>
            <span className="disp text-3xl text-moss">(04)</span>
          </div>
        </div>

        <div className="mt-[66px] space-y-[88px] md:space-y-[132px]">
          {CASES.map((c, i) => {
            const flip = i % 2 === 1;
            return (
              <article key={c.sys} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                {/* image */}
                <Reveal variant={flip ? "right" : "left"} className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <a href="#contact" className="kb group relative block overflow-hidden border border-ink/12" data-cursor>
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img src={c.img} alt={c.alt} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <div className="glass-dark mono-label absolute left-4 top-4 flex items-center gap-2 rounded-full px-4 py-2 text-paper">
                      <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sage" />
                      {c.sys} · {c.status}
                    </div>
                    <div className="mono-label absolute bottom-4 right-4 border border-paper/25 bg-reactor/50 px-3 py-1.5 text-paper/85 backdrop-blur-sm">
                      FIG.{i + 1} — {c.sector}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-reactor/0 transition-colors duration-500 group-hover:bg-reactor/25">
                      <span className="mono-label flex translate-y-3 items-center gap-2 bg-paper px-5 py-3 text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        OPEN CASE <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </a>
                </Reveal>

                {/* text */}
                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <Reveal delay={120}>
                    <div className="mono-label flex items-center gap-4 text-ink/50">
                      <span>{c.client}</span>
                      <span className="h-px w-8 bg-ink/25" />
                      <span>{c.year}</span>
                    </div>
                    <h3 className="disp mt-5 text-4xl uppercase text-ink md:text-6xl">
                      {c.name}
                    </h3>
                    <p className="serif-it mt-3 text-2xl text-moss md:text-3xl">{c.tagline}</p>
                  </Reveal>
                  <Reveal delay={220}>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-ink/65">{c.desc}</p>
                  </Reveal>
                  <Reveal delay={300}>
                    <div className="mt-8 grid grid-cols-3 gap-px border border-ink/12 bg-ink/12">
                      {c.metrics.map((m) => (
                        <div key={m.l} className="bg-paper p-4">
                          <div className="disp text-xl text-ink md:text-2xl">{m.v}</div>
                          <div className="mono-label mt-1.5 text-[9.5px]! leading-4 text-ink/50">{m.l}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {c.tags.map((t) => (
                        <span key={t} className="mono-label border border-ink/15 px-3 py-1.5 text-ink/60 transition-colors duration-300 hover:border-moss hover:text-moss">
                          {t}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= 06 — VOICES (scattered postcards) ================= */

const POSITIONS = [
  "lg:absolute lg:left-0 lg:top-14 lg:w-[40%]",
  "lg:absolute lg:left-[31%] lg:top-[42%] lg:w-[38%]",
  "lg:absolute lg:right-0 lg:top-0 lg:w-[36%]",
];
const TILTS = ["lg:-rotate-[5deg]", "lg:rotate-[3deg]", "lg:-rotate-[2deg]"];

export function Voices() {
  return (
    <section id="voices" className="border-t border-ink/10 bg-porcelain">
      <div className="mx-auto max-w-[1440px] px-5 py-[88px] md:px-10 md:py-[132px]">
        <SectionLabel n="06" title="Voices" />
        <div className="mt-[44px] flex flex-wrap items-end justify-between gap-6">
          <h2 className="disp text-5xl uppercase leading-[0.95] text-ink md:text-7xl">
            Operators, quoted
            <br />
            <span className="serif-it lowercase text-moss">at rest.</span>
          </h2>
          <p className="mono-label max-w-[240px] pb-2 leading-5 text-ink/50">
            Collected during quarterly calm reviews. Used with relief.
          </p>
        </div>

        <div className="relative mt-[66px] flex flex-col gap-8 lg:h-[600px] lg:gap-0">
          {VOICES.map((v, i) => (
            <Reveal key={v.name} delay={i * 140} variant="scale" className={POSITIONS[i]}>
              <figure
                className={`glass group relative h-full p-8 shadow-[0_18px_50px_-24px_rgba(20,24,16,0.35)] transition-all duration-500 hover:z-20 hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_28px_70px_-20px_rgba(20,24,16,0.45)] md:p-10 ${TILTS[i]}`}
                data-cursor
              >
                {/* stamp */}
                <div className="pointer-events-none absolute -right-5 -top-5 h-20 w-20 opacity-80">
                  <svg viewBox="0 0 80 80" className="spin-slow h-full w-full text-moss">
                    <defs>
                      <path id={`circ${i}`} d="M40 40 m -26 0 a 26 26 0 1 1 52 0 a 26 26 0 1 1 -52 0" />
                    </defs>
                    <circle cx="40" cy="40" r="31" fill="var(--color-porcelain)" stroke="currentColor" strokeWidth="1" />
                    <text fontSize="8.2" letterSpacing="1.6" fill="currentColor" fontFamily="IBM Plex Mono, monospace">
                      <textPath href={`#circ${i}`}>COMGHY · VERIFIED CALM · EST 2016 ·</textPath>
                    </text>
                    <circle cx="40" cy="40" r="3" fill="currentColor" />
                  </svg>
                </div>
                <div className="mono-label text-moss">{v.sys} · QUARTERLY REVIEW</div>
                <blockquote className="serif-it mt-5 text-2xl leading-snug text-ink md:text-[1.7rem]">
                  "{v.quote}"
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-5">
                  <span className="disp flex h-10 w-10 items-center justify-center bg-ink text-sm text-sage">
                    {v.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{v.name}</span>
                    <span className="mono-label text-[9.5px]! text-ink/50">{v.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* client wall */}
        <Reveal delay={100}>
          <div className="mt-[44px] lg:mt-[88px]">
            <div className="mono-label mb-6 flex items-center gap-4 text-ink/50">
              Trusted by operators at
              <span className="h-px flex-1 bg-ink/12" />
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4">
              {CLIENTS.map((c, i) => (
                <div
                  key={c}
                  className="group flex cursor-default items-baseline gap-3 border-t border-ink/12 py-4"
                  data-cursor
                >
                  <span className="font-mono text-[10px] text-ink/35">0{i + 1}</span>
                  <span className="disp text-lg uppercase text-ink/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-ink md:text-xl">
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ================= 07 — FIELD NOTES ================= */

export function Journal() {
  return (
    <section id="journal" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1440px] px-5 py-[88px] md:px-10 md:py-[132px]">
        <SectionLabel n="07" title="Field Notes" />
        <div className="mt-[44px] flex flex-wrap items-end justify-between gap-6">
          <h2 className="disp text-5xl uppercase leading-[0.95] text-ink md:text-7xl">
            Notes from
            <br />
            <span className="serif-it lowercase text-moss">the quiet.</span>
          </h2>
          <a href="#contact" className="mono-label u-sweep mb-2 text-ink/60 hover:text-ink">
            All field notes ↗
          </a>
        </div>

        <div className="mt-[44px]">
          {JOURNAL.map((j, i) => (
            <Reveal key={j.title} delay={i * 90}>
              <a
                href="#contact"
                className={`group grid cursor-pointer grid-cols-[86px_1fr_auto] items-center gap-4 border-t border-ink/12 py-7 transition-colors duration-300 last:border-b hover:bg-porcelain md:grid-cols-[140px_1fr_auto] md:gap-10 md:py-9 ${i === JOURNAL.length - 1 ? "border-b" : ""}`}
                data-cursor
              >
                <span className="mono-label text-ink/45">{j.date}</span>
                <span>
                  <span className="disp block text-2xl text-ink transition-transform duration-500 group-hover:translate-x-3 md:text-5xl">
                    {j.title}
                  </span>
                  <span className="mt-2 hidden max-w-lg text-sm text-ink/55 md:block">{j.teaser}</span>
                </span>
                <span className="flex items-center gap-5">
                  <span className="mono-label hidden text-ink/45 sm:block">{j.read}</span>
                  <span className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink transition-all duration-300 group-hover:border-moss group-hover:bg-moss group-hover:text-paper">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
