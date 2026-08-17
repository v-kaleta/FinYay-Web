import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BEATS } from "@/components/demo/lesson";
import { ProjectedScreen } from "@/components/demo/ProjectedScreen";
import { StudentScreen } from "@/components/demo/StudentScreen";
import { TeacherScreen } from "@/components/demo/TeacherScreen";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "FinYay — One Lesson, Three Screens" },
      {
        name: "description",
        content:
          "Step through a grades 4–6 FinYay money lesson beat by beat and see the projected class screen, a student's device, and the teacher dashboard at the same moment.",
      },
      { property: "og:title", content: "FinYay — One Lesson, Three Screens" },
      {
        property: "og:description",
        content:
          "A classroom walkthrough of FinYay: shared projection, private student device, and the teacher's work tool, side by side.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function ScreenFrame({
  label,
  sub,
  children,
}: {
  label: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col">
      <div className="mb-2">
        <h2 className="font-display text-lg font-extrabold text-fy-ink">{label}</h2>
        <p className="font-body text-xs font-semibold text-fy-ink-soft">{sub}</p>
      </div>
      <div className="fy-card flex-1 overflow-hidden border-2 border-fy-line bg-fy-cream">
        {children}
      </div>
    </section>
  );
}

function Index() {
  const [beat, setBeat] = useState(1);
  const current = BEATS[beat - 1] ?? BEATS[0];
  const progress = (beat / BEATS.length) * 100;

  return (
    <main className="min-h-screen bg-fy-cream pb-12">
      <div className="sticky top-0 z-10 border-b-2 border-fy-line bg-fy-cream">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 md:px-10">
          <span className="font-display text-2xl font-extrabold tracking-tight text-fy-green">
            FinYay
          </span>
          <div className="h-4 flex-1 overflow-hidden rounded-full bg-fy-line">
            <div
              className="h-full rounded-full bg-fy-green transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-display text-sm font-extrabold text-fy-ink-soft">
            {beat}/{BEATS.length}
          </span>
        </div>
      </div>

      <header className="mx-auto max-w-6xl px-5 pt-8 md:px-10">
        <p className="font-display text-xs font-extrabold tracking-[0.18em] text-fy-green uppercase">
          FinYay demo
        </p>
        <h1 className="mt-1 font-display text-4xl font-extrabold text-fy-ink md:text-5xl">
          One lesson, three screens, live at the same time
        </h1>
        <p className="mt-3 max-w-2xl font-body font-semibold text-fy-ink-soft">
          Spending · Session 3 of 3 · Session 7 of 15. Topic: ads and peer pressure can push you
          to buy things you didn&rsquo;t plan on. Step through the class beat by beat.
        </p>
      </header>

      <nav className="mx-auto mt-6 max-w-6xl px-5 md:px-10" aria-label="Lesson beats">
        <div className="flex flex-wrap gap-2">
          {BEATS.map((b) => (
            <button
              key={b.n}
              type="button"
              onClick={() => setBeat(b.n)}
              aria-current={b.n === beat}
              className={`fy-card border-2 px-3 py-2 font-display text-sm font-extrabold uppercase transition-transform active:translate-y-1 active:shadow-none ${
                b.n === beat
                  ? "border-fy-green bg-fy-green text-fy-green-ink"
                  : "border-fy-line bg-fy-cream text-fy-ink-soft hover:bg-fy-surface"
              }`}
            >
              {b.n}. {b.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="mx-auto mt-6 flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 md:px-10">
        <div>
          <p className="font-display text-2xl font-extrabold text-fy-ink">
            Beat {current.n} — {current.label}
          </p>
          <p className="font-body text-sm font-semibold text-fy-ink-soft">{current.note}</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setBeat((b) => Math.max(1, b - 1))}
            disabled={beat === 1}
            className="fy-card border-2 border-fy-line bg-fy-cream px-6 py-2.5 font-display text-sm font-extrabold uppercase text-fy-ink-soft transition-transform active:translate-y-1 active:shadow-none disabled:opacity-40"
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => setBeat((b) => Math.min(BEATS.length, b + 1))}
            disabled={beat === BEATS.length}
            className="fy-card border-2 border-fy-green bg-fy-green px-6 py-2.5 font-display text-sm font-extrabold uppercase text-fy-green-ink transition-transform active:translate-y-1 active:shadow-none disabled:opacity-40"
          >
            Continue
          </button>
        </div>
      </div>

      <div className="mx-auto mt-6 grid max-w-6xl gap-6 px-5 md:px-10 lg:grid-cols-[1.35fr_0.8fr_1.1fr]">
        <ScreenFrame label="Projected screen" sub="Whole class · read from 20 feet · shared only">
          <ProjectedScreen beat={beat} />
        </ScreenFrame>
        <ScreenFrame label="Student device — Ruby S." sub="One kid · 12 inches · one thing at a time">
          <StudentScreen beat={beat} />
        </ScreenFrame>
        <ScreenFrame label="Teacher dashboard" sub="One adult, working · dense detail · real controls">
          <TeacherScreen beat={beat} />
        </ScreenFrame>
      </div>

      <footer className="mx-auto mt-10 max-w-6xl px-5 font-body text-xs font-semibold text-fy-ink-soft md:px-10">
        Scripted walkthrough. No accounts, no logins, no typed names or passwords for kids — ever.
      </footer>
    </main>
  );
}

