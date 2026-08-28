import { useState, type FormEvent } from "react";
import { MaskWords, Reveal, Sparkle, useClock } from "../lib/motion";
import { SectionLabel } from "./Sections";

export function Contact() {
  const seoul = useClock("Asia/Seoul");
  const ams = useClock("Europe/Amsterdam");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <section id="contact" className="grid-reactor relative overflow-hidden border-t border-ink/10 bg-reactor text-paper">
      <div className="drift pointer-events-none absolute -right-40 -top-20 h-[32rem] w-[32rem] rounded-full bg-moss/30 blur-[140px]" />
      <div className="drift pointer-events-none absolute -left-32 bottom-10 h-[24rem] w-[24rem] rounded-full bg-amber/10 blur-[120px]" style={{ animationDelay: "-10s" }} />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-[88px] md:px-10 md:pt-[132px]">
        <SectionLabel n="08" title="Contact" tone="sage" />

        <h2 className="disp mt-[44px] text-[13vw] uppercase leading-[0.9] text-paper md:text-[10vw] lg:text-[8.4vw]">
          <MaskWords
            text="Ready to exhale?"
            renderWord={(w, i) =>
              i === 2 ? <span className="serif-it lowercase text-sage">{w}</span> : <span>{w}</span>
            }
          />
        </h2>

        <div className="mt-[66px] grid gap-14 lg:grid-cols-12">
          {/* left: direct lines */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="mono-label text-mist">Write to the ward</div>
              <a
                href="mailto:hello@comghy.systems"
                className="disp mt-4 block text-3xl text-paper transition-colors duration-300 hover:text-sage md:text-5xl"
                data-cursor
              >
                hello@comghy.systems
              </a>
              <a href="tel:+82269534400" className="mono-label u-sweep mt-6 inline-block text-paper/70 hover:text-paper">
                +82 2 6953 4400 — humans answer, 9–6 KST
              </a>
            </Reveal>
            <Reveal delay={140}>
              <a
                href="mailto:hello@comghy.systems?subject=A%20quiet%20call"
                className="group mono-label mt-10 inline-flex items-center gap-4 bg-sage px-8 py-5 text-ink transition-colors duration-300 hover:bg-lume"
              >
                Book a quiet call
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" aria-hidden="true">
                  <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </a>
              <p className="mt-5 max-w-sm font-mono text-[11.5px] leading-6 text-mist">
                First call is 30 minutes, zero slides. We listen, we ask where
                the hours go, and we tell you honestly if automation is not the
                answer.
              </p>
            </Reveal>
          </div>

          {/* right: letter + offices */}
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={100}>
              <div className="glass-dark p-7 md:p-8">
                <div className="mono-label flex items-center gap-2 text-sage">
                  <Sparkle className="h-3.5 w-3.5" /> The Quiet Letter
                </div>
                <p className="mt-3 text-sm leading-relaxed text-paper/75">
                  One field note a month on automation, operations and the
                  economics of calm. No funnels, no urgency fonts.
                </p>
                {subscribed ? (
                  <div className="mono-label mt-6 flex items-center gap-3 text-sage">
                    <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sage" />
                    SUBSCRIBED — STAY CALM.
                  </div>
                ) : (
                  <form onSubmit={submit} className="mt-6 flex items-center gap-3 border-b border-paper/25 pb-3 transition-colors focus-within:border-sage">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-transparent font-mono text-sm text-paper placeholder:text-mist/60 focus:outline-none"
                      aria-label="Email address"
                    />
                    <button type="submit" className="mono-label shrink-0 text-sage transition-colors hover:text-lume">
                      JOIN →
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-10 grid grid-cols-2 gap-px border border-paper/12 bg-paper/12">
                <div className="bg-reactor p-6">
                  <div className="mono-label text-sage">HQ — Seoul</div>
                  <p className="mt-3 font-mono text-[11px] leading-6 text-mist">
                    44 Eulji-ro, Jung-gu
                    <br />
                    Seoul 04523, KR
                  </p>
                  <div className="mt-4 font-mono text-sm tabular-nums text-paper">{seoul} KST</div>
                </div>
                <div className="bg-reactor p-6">
                  <div className="mono-label text-amber">Ward — Amsterdam</div>
                  <p className="mt-3 font-mono text-[11px] leading-6 text-mist">
                    Herengracht 402
                    <br />
                    1017 BX, NL
                  </p>
                  <div className="mt-4 font-mono text-sm tabular-nums text-paper">{ams} CET</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* footer */}
        <footer className="mt-[88px]">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-paper/12 py-6">
            <span className="mono-label text-mist">© 2026 Comghy Systems Co.</span>
            <div className="mono-label hidden items-center gap-6 md:flex">
              {["LinkedIn", "GitHub", "Instagram"].map((s) => (
                <a key={s} href="#contact" className="u-sweep text-paper/60 transition-colors hover:text-paper">
                  {s}
                </a>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group mono-label flex items-center gap-3 border border-paper/20 px-5 py-3 text-paper/80 transition-colors duration-300 hover:border-sage hover:text-sage"
            >
              Back to surface
              <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-1" fill="none" aria-hidden="true">
                <path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
          <div className="flex items-end justify-between py-6">
            <div className="disp txt-outline-light select-none whitespace-nowrap text-[19vw] leading-[0.8] opacity-70 transition-opacity duration-700 hover:opacity-100">
              COMGHY
            </div>
          </div>
          <div className="mono-label flex flex-wrap items-center justify-between gap-3 border-t border-paper/12 py-5 text-mist/70">
            <span>Making man have a stress-free life — since 2016</span>
            <span className="flex items-center gap-2">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sage" />
              Built while the machines hummed
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
