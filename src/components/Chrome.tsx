import { useEffect, useRef, useState } from "react";
import { MARQUEE, NAV } from "../lib/data";
import { Sparkle, useClock, useReducedMotion, useScrollProgress } from "../lib/motion";

/* ================= PRELOADER / BOOT ================= */

const BOOT_LINES = [
  "> simco.site-os v4.4 — boot sequence",
  "> loading site modules ............... ok",
  "> connecting 31 monitored sites ...... ok",
  "> weather window: clear",
  "> grid export: 142.6 MW",
  "> safety counter: 1,204 days LTI-free",
  "> ready.",
];

export function Preloader({ onStart, onGone }: { onStart: () => void; onGone: () => void }) {
  const reduced = useReducedMotion();
  const [p, setP] = useState(0);
  const [exit, setExit] = useState(false);
  const clock = useClock("Europe/London");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const dur = reduced ? 700 : 2600;
    const t0 = performance.now();
    let raf = 0;
    const loop = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setP(Math.round(eased * 100));
      if (k < 1) raf = requestAnimationFrame(loop);
      else {
        setTimeout(() => {
          setExit(true);
          onStart();
        }, reduced ? 150 : 500);
        setTimeout(onGone, reduced ? 500 : 1750);
      }
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [onStart, onGone, reduced]);

  const shown = Math.floor((p / 100) * BOOT_LINES.length);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-reactor text-paper transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        exit ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-hidden="true"
    >
      <div className="grid-reactor absolute inset-0 opacity-60" />
      <div className="relative flex h-full flex-col justify-between p-6 md:p-10">
        <div className="flex items-start justify-between">
          <div className="mono-label text-sage">SIMCO / SITE OS v4.4</div>
          <div className="mono-label hidden text-mist sm:block">LONDON — {clock} GMT</div>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-10 md:flex-row md:items-end md:justify-between">
          <div className="font-mono text-[11px] leading-7 text-mist md:text-xs">
            {BOOT_LINES.slice(0, shown).map((l, i) => (
              <div key={i} className={i === shown - 1 ? "text-sage" : ""}>
                {l}
              </div>
            ))}
            <span className="blink inline-block h-3 w-2 translate-y-0.5 bg-sage" />
          </div>
          <div className="disp text-[26vw] leading-none text-paper md:text-[15vw]">
            {p}
            <span className="text-sage">%</span>
          </div>
        </div>

        <div className="h-px w-full bg-paper/15">
          <div className="h-px bg-sage transition-[width] duration-150 ease-out" style={{ width: `${p}%` }} />
        </div>
        <div className="mono-label mt-3 flex justify-between text-mist">
          <span>SOLAR · BESS · CIVIL · ELECTRICAL · TELECOM</span>
          <span className="hidden sm:block">EST. 2012 — PETERBOROUGH, UK</span>
        </div>
      </div>
    </div>
  );
}

/* ================= CUSTOM CURSOR ================= */

export function Cursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    let rx = -100, ry = -100, tx = -100, ty = -100;
    let raf = 0;
    const move = (e: MouseEvent) => {
      tx = e.clientX; ty = e.clientY;
      if (dotRef.current) dotRef.current.style.transform = `translate(${tx - 3}px, ${ty - 3}px)`;
    };
    const loop = () => {
      rx += (tx - rx) * 0.16; ry += (ty - ry) * 0.16;
      if (ringRef.current) {
        const w = ringRef.current.offsetWidth;
        ringRef.current.style.transform = `translate(${rx - w / 2}px, ${ry - w / 2}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setActive(!!t.closest("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${active ? "active" : ""}`} />
    </>
  );
}

/* ================= HEADER ================= */

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#index" className="group flex items-center gap-2.5" aria-label="Simco Renewables home">
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <rect width="32" height="32" className={dark ? "fill-paper" : "fill-ink"} />
        <g
          fill="none"
          stroke="var(--color-sage)"
          strokeWidth="2.3"
          strokeLinecap="round"
          className="transition-all duration-500 group-hover:stroke-amber"
        >
          <path d="M7 21.5h18" />
          <path d="M11.5 21.5a4.5 4.5 0 0 1 9 0" />
          <path d="M16 8.5v3M9.6 11.6l2.1 2.1M22.4 11.6l-2.1 2.1" />
        </g>
      </svg>
      <span className={`disp text-lg tracking-tight ${dark ? "text-paper" : "text-ink"}`}>
        SIMCO<span className="text-sage">®</span>
      </span>
    </a>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useScrollProgress();
  const clock = useClock("Europe/London");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const desktopNav = NAV.slice(0, 6);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled ? "glass shadow-[0_1px_0_rgba(20,24,16,0.06)]" : "bg-transparent"
        }`}
      >
        <div className="flex h-[72px] items-center justify-between px-5 md:px-10">
          <Logo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {desktopNav.map((n) => (
              <a key={n.href} href={n.href} className="mono-label u-sweep text-ink/70 transition-colors hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <div className="mono-label glass hidden items-center gap-2 rounded-full px-4 py-2 text-ink/80 xl:flex">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-sage" />
              ALL SITES GENERATING · {clock}
            </div>
            <a
              href="#contact"
              className="mono-label hidden items-center gap-2 bg-ink px-5 py-2.5 text-paper transition-colors duration-300 hover:bg-moss sm:flex"
            >
              Start a project
              <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" aria-hidden="true">
                <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-ink/15 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="h-px w-5 bg-ink" />
              <span className="h-px w-5 bg-ink" />
            </button>
          </div>
        </div>
        <div className="h-px w-full bg-ink/8">
          <div className="h-px bg-sage" style={{ width: `${progress * 100}%` }} />
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-[90] flex flex-col bg-reactor text-paper transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="grid-reactor absolute inset-0 opacity-50" />
        <div className="relative flex h-[72px] items-center justify-between px-5">
          <Logo dark />
          <button
            onClick={() => setOpen(false)}
            className="mono-label flex items-center gap-2 text-mist"
            aria-label="Close menu"
          >
            CLOSE
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
              <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
        <nav className="relative flex flex-1 flex-col justify-center gap-1 px-6" aria-label="Mobile">
          {NAV.map((n, i) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline gap-4 border-b border-paper/10 py-4 transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
            >
              <span className="mono-label text-sage">{n.n}</span>
              <span className="disp text-4xl text-paper transition-transform duration-300 group-hover:translate-x-2 group-hover:text-sage">
                {n.label}
              </span>
            </a>
          ))}
        </nav>
        <div className="relative flex items-center justify-between px-6 pb-8">
          <a href="mailto:hello@simcorenewables.co.uk" className="mono-label u-sweep text-mist">
            hello@simcorenewables.co.uk
          </a>
          <span className="mono-label text-mist">PETERBOROUGH — {clock}</span>
        </div>
      </div>
    </>
  );
}

/* ================= MARQUEE ================= */

export function Marquee({ dark = false, reverse = false }: { dark?: boolean; reverse?: boolean }) {
  const row = [...MARQUEE, ...MARQUEE, ...MARQUEE];
  return (
    <div
      className={`overflow-hidden border-y py-4 ${
        dark ? "border-paper/12 bg-reactor text-paper" : "border-ink/12 bg-ink text-paper"
      }`}
      aria-hidden="true"
    >
      <div className={`marquee-track flex w-max items-center gap-10 ${reverse ? "rev" : ""}`}>
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="disp text-xl uppercase md:text-2xl">{item}</span>
            <Sparkle className="h-4 w-4 shrink-0 text-sage" />
          </span>
        ))}
      </div>
    </div>
  );
}
