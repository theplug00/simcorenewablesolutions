import { useEffect, useState } from "react";
import { HERO_LOG } from "../lib/data";
import { useClock, useInView, useScramble } from "../lib/motion";

function useCountdown(from: number) {
  const [s, setS] = useState(from);
  useEffect(() => {
    const id = setInterval(() => setS((v) => (v <= 0 ? from : v - 1)), 1000);
    return () => clearInterval(id);
  }, [from]);
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

const WAVE =
  "M0 70 Q 75 8 150 70 T 300 70 T 450 70 T 600 70 T 750 70 T 900 70 T 1050 70 T 1200 70";

export function Hero() {
  const [hRef, hIn] = useInView<HTMLHeadingElement>(0.2);
  const kicker = useScramble("> CIVIL · ELECTRICAL · TELECOM · SOLAR", hIn, 22);
  const clock = useClock("Europe/London");
  const countdown = useCountdown(247);

  const lines: React.ReactNode[] = [
    <span key="l1">WE POUR,</span>,
    <span key="l2">
      BOLT & <span className="text-moss">WIRE</span> —
    </span>,
    <span key="l3" className="serif-it font-normal lowercase text-moss">
      the sun pays rent.
    </span>,
  ];

  return (
    <section id="index" className="grid-paper relative overflow-hidden">
      {/* ambient glows */}
      <div className="drift pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-amber/25 blur-[130px]" />
      <div className="drift pointer-events-none absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-sage/20 blur-[120px]" style={{ animationDelay: "-8s" }} />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col px-5 pt-[120px] md:px-10">
        {/* meta row */}
        <div className="mono-label flex items-center justify-between text-ink/55">
          <span>Renewable energy engineering — est. 2012</span>
          <span className="hidden sm:block">52.5695°N / 0.2898°E — PETERBOROUGH HQ</span>
        </div>

        {/* scramble kicker */}
        <div className="mt-[44px] font-mono text-xs tracking-[0.18em] text-moss md:text-sm" aria-label="Civil, electrical, telecom, solar">
          {kicker}
        </div>

        {/* headline */}
        <h1 ref={hRef} className={`disp mt-6 text-[13.2vw] uppercase leading-[0.9] text-ink md:text-[10vw] lg:text-[7.6vw] ${hIn ? "is-in" : ""}`}>
          {lines.map((l, i) => (
            <span key={i} className="block">
              <span className="ml">
                <span style={{ "--d": `${180 + i * 140}ms` } as React.CSSProperties}>{l}</span>
              </span>
            </span>
          ))}
        </h1>

        {/* split: copy + console */}
        <div className="mt-[44px] grid flex-1 items-end gap-10 pb-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-ink/70 md:text-lg">
              Simco delivers turnkey solar PV, battery storage and civil works —
              from first pile to grid energisation — so your people spend their
              days on <em className="serif-it text-xl text-moss">delivery</em>,
              not downtime.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group mono-label flex items-center gap-3 bg-ink px-6 py-4 text-paper transition-colors duration-300 hover:bg-moss"
              >
                See the projects
                <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" aria-hidden="true">
                  <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </a>
              <a href="#approach" className="mono-label u-sweep text-ink/70 hover:text-ink">
                or read the approach first
              </a>
            </div>
          </div>

          {/* now generating console */}
          <div className="lg:col-span-7" data-reveal="" style={{ "--d": "300ms" } as React.CSSProperties}>
            <HeroConsole clock={clock} countdown={countdown} />
          </div>
        </div>

        {/* waveform */}
        <div className="relative -mx-5 border-t border-ink/10 md:-mx-10">
          <div className="mono-label absolute left-5 top-3 flex items-center gap-2 text-ink/50 md:left-10">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sage" />
            LIVE TELEMETRY — FLEET OUTPUT
          </div>
          <div className="mono-label absolute right-5 top-3 text-ink/50 md:right-10">OUTPUT: STABLE</div>
          <svg viewBox="0 0 1200 140" className="block h-[88px] w-full md:h-[120px]" preserveAspectRatio="none" aria-hidden="true">
            <path d={WAVE} fill="none" stroke="var(--color-ink)" strokeOpacity="0.12" strokeWidth="1.4" />
            <path
              d={WAVE}
              fill="none"
              stroke="var(--color-moss)"
              strokeWidth="2"
              pathLength={1}
              className="wave-line"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

function HeroConsole({ clock, countdown }: { clock: string; countdown: string }) {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setVisible((v) => (v >= HERO_LOG.length ? v : v + 1)), 700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass relative" data-cursor>
      <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
        <div className="mono-label flex items-center gap-2 text-ink">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sage" />
          NOW GENERATING — 31 SITES
        </div>
        <div className="mono-label text-ink/50">{clock} GMT</div>
      </div>
      <div className="min-h-[172px] px-5 py-4 font-mono text-[11.5px] leading-7 md:text-xs">
        {HERO_LOG.slice(0, visible).map((l, i) => (
          <div key={i} className="flex items-center gap-3 text-ink/75">
            <span className="text-ink/40">{l.t}</span>
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${l.kind === "amber" ? "bg-amber" : "bg-sage"}`} />
            <span>{l.msg}</span>
          </div>
        ))}
        <span className="blink mt-1 inline-block h-3.5 w-2 bg-moss" />
      </div>
      <div className="flex items-center justify-between border-t border-ink/10 px-5 py-3">
        <span className="mono-label text-ink/50">NEXT DISPATCH WINDOW</span>
        <span className="font-mono text-sm tabular-nums text-moss">00:{countdown}</span>
      </div>
    </div>
  );
}
