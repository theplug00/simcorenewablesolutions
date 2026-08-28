import {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

/* ---------------- hooks ---------------- */

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.18,
  once = true
) {
  const [node, setNode] = useState<T | null>(null);
  const [inView, setInView] = useState(false);
  const ref = useCallback((el: T | null) => setNode(el), []);
  useEffect(() => {
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [node, threshold, once]);
  return [ref, inView] as const;
}

export function useClock(timeZone: string): string {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);
  return time;
}

export function useCountUp(target: number, active: boolean, duration = 2000, decimals = 0): string {
  const reduced = useReducedMotion();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setVal(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const loop = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduced]);
  return useMemo(
    () =>
      val.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
    [val, decimals]
  );
}

const GLYPHS = "▮▯01<>/\\#%&@$≠∆";

export function useScramble(text: string, active: boolean, speed = 28): string {
  const reduced = useReducedMotion();
  const [out, setOut] = useState(text);
  const frame = useRef(0);
  useEffect(() => {
    if (!active) return;
    if (reduced) {
      setOut(text);
      return;
    }
    frame.current = 0;
    const total = text.length;
    const id = setInterval(() => {
      frame.current += 1;
      const solved = Math.floor(frame.current / 2.2);
      let s = "";
      for (let i = 0; i < total; i++) {
        const ch = text[i];
        if (ch === " " || ch === "\n") s += ch;
        else if (i < solved) s += ch;
        else s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOut(s);
      if (solved >= total) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [active, text, speed, reduced]);
  return out;
}

/* ---------------- components ---------------- */

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  children?: ReactNode;
  variant?: "up" | "left" | "right" | "scale";
  delay?: number;
  className?: string;
  id?: string;
};

export function Reveal({
  as = "div",
  children,
  variant = "up",
  delay = 0,
  className = "",
  id,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  return createElement(
    as,
    {
      ref,
      id,
      "data-reveal": variant === "up" ? "" : variant,
      className: `${className} ${inView ? "is-in" : ""}`,
      style: { "--d": `${delay}ms` } as React.CSSProperties,
    },
    children
  );
}

/** Splits text into words wrapped in masked lines for a staggered rise. */
export function MaskWords({
  text,
  className = "",
  baseDelay = 0,
  step = 55,
  renderWord,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  step?: number;
  renderWord?: (word: string, i: number) => ReactNode;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.3);
  const words = text.split(" ");
  return (
    <span ref={ref} className={`${className} ${inView ? "is-in" : ""}`}>
      {words.map((w, i) => (
        <span key={i} className="ml" style={{ "--d": `${baseDelay + i * step}ms` } as React.CSSProperties}>
          <span>{renderWord ? renderWord(w, i) : w}&nbsp;</span>
        </span>
      ))}
    </span>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 1.5c.9 5.6 4.9 9.6 10.5 10.5-5.6.9-9.6 4.9-10.5 10.5C11.1 16.9 7.1 12.9 1.5 12 7.1 11.1 11.1 7.1 12 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
    </svg>
  );
}

export function useScrollProgress(): number {
  const [p, setP] = useState(0);
  const cb = useCallback(() => {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    setP(max > 0 ? h.scrollTop / max : 0);
  }, []);
  useEffect(() => {
    cb();
    window.addEventListener("scroll", cb, { passive: true });
    return () => window.removeEventListener("scroll", cb);
  }, [cb]);
  return p;
}
