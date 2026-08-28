import { useCallback, useState } from "react";
import { Cursor, Header, Marquee, Preloader } from "./components/Chrome";
import { Hero } from "./components/Hero";
import { CalmIndex, Capabilities, Method, Thesis } from "./components/Sections";
import { Journal, Systems, Voices } from "./components/Work";
import { Contact } from "./components/Footer";

export default function App() {
  const [ready, setReady] = useState(false);
  const [gone, setGone] = useState(false);
  const onStart = useCallback(() => setReady(true), []);
  const onGone = useCallback(() => setGone(true), []);

  return (
    <div className="noise min-h-screen bg-paper text-ink antialiased">
      {!gone && <Preloader onStart={onStart} onGone={onGone} />}
      <Cursor />
      <Header />

      {ready && (
        <main>
          <Hero />
          <Marquee />
          <Thesis />
          <Systems />
          <Capabilities />
          <CalmIndex />
          <Marquee dark reverse />
          <Method />
          <Voices />
          <Journal />
          <Contact />
        </main>
      )}
    </div>
  );
}
