import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Lock,
  Users,
  GitBranch,
  ShieldCheck,
  BarChart3,
  Star,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import heroChild from "@/assets/hero-child.jpg";
import mascot from "@/assets/mascot.png";
import appScreen from "@/assets/app-screen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FinYay — Financial literacy, built for the classroom" },
      {
        name: "description",
        content:
          "A digital financial literacy platform for grades 4–6, interactive and teacher-led. Khan Academy for financial literacy.",
      },
      { property: "og:title", content: "FinYay — Financial literacy, built for the classroom" },
      {
        property: "og:description",
        content:
          "A digital financial literacy platform for grades 4–6, interactive and teacher-led.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// TODO: swap for real FinYay screenshots/photography when available —
// heroChild, mascot, and appScreen below are still the original placeholder assets.

const included = [
  {
    icon: Lock,
    title: "No accounts, ever",
    body: "Kids join with a daily code and tap a pre-assigned tile — no typed name, no password.",
  },
  {
    icon: Users,
    title: "Every kid gets spotlighted",
    body: "Each session's story features a real kid from the class roster — their real job, their real choices.",
  },
  {
    icon: GitBranch,
    title: "Sessions branch on what the class chose",
    body: "The next lesson beat reflects the class's actual vote, pre-written ahead of time.",
  },
  {
    icon: ShieldCheck,
    title: "AI, never live",
    body: "All content is generated ahead of class. It never talks to a kid directly.",
  },
  {
    icon: BarChart3,
    title: "Auto-filled teacher dashboard",
    body: "Every tap fills the dashboard automatically — nothing for the teacher to enter by hand.",
  },
  {
    icon: BookOpen,
    title: "Standards-mapped, all six units",
    body: "Earning, Spending, Saving, Investing, Managing Credit, Managing Risk — grade-4 floor fully verified.",
  },
];

const steps = [
  {
    n: "1",
    title: "It's written ahead of time",
    body: "One AI call generates the whole session — story, both decision branches, reflection — before class starts.",
  },
  {
    n: "2",
    title: "The class decides together",
    body: "Kids tap in real time. The teacher dashboard fills in live. No AI is running during class.",
  },
  {
    n: "3",
    title: "It remembers, every session",
    body: "Each kid's own history feeds next time's recall — and everyone gets spotlighted eventually.",
  },
];

const skills = [
  "Earning",
  "Spending",
  "Saving",
  "Investing",
  "Managing Credit",
  "Managing Risk",
  "Delayed gratification",
  "Executive function",
];

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative">
        <img
          src={heroChild}
          alt="A young girl smiling while reading a story on a tablet at home"
          width={1920}
          height={1280}
          className="h-[92vh] min-h-[620px] w-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 flex flex-col items-center px-5 pt-32 text-center md:pt-40">
          <h1 className="max-w-4xl text-5xl leading-[1.05] md:text-7xl">
            Khan Academy for financial literacy —
            <br />
            interactive, and teacher-led.
          </h1>
          <p className="mt-6 max-w-md text-base text-ink-soft md:text-lg">
            A digital financial literacy platform for grades 4–6. Projected on one shared
            screen, no accounts required.
          </p>
          <a
            href="#waitlist"
            className="btn-pill btn-primary hover:btn-primary-hover mt-8 px-9 py-5 text-lg md:text-xl"
          >
            See the live demo
          </a>
          <p className="mt-4 font-display text-sm font-bold text-primary">
            0 live AI calls near a child
          </p>
        </div>
        <img
          src={mascot}
          alt=""
          aria-hidden="true"
          width={768}
          height={768}
          loading="lazy"
          className="animate-float absolute bottom-6 left-[6%] w-28 drop-shadow-xl md:w-44"
        />
      </section>

      {/* Skill marquee */}
      <section className="border-y border-border bg-cream py-5">
        <div className="flex w-max animate-marquee gap-3">
          {[...skills, ...skills].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="rounded-full border border-border bg-card px-5 py-2 font-display text-sm font-bold text-ink"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-bold tracking-widest text-primary uppercase">
              How it works
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">
              Batch-generated ahead of time, played out live
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              AI is never live or chat-facing with kids. Every session is written before class
              starts — the live classroom only ever plays back what's already there.
            </p>
          </div>

          <div className="mt-14 grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-6 -rotate-2 rounded-[2.5rem] bg-sky" />
              <img
                src={appScreen}
                alt="The Lumo app showing an illustrated story page with read-aloud controls"
                width={912}
                height={1200}
                loading="lazy"
                className="relative mx-auto w-full max-w-sm rounded-[2rem] shadow-soft"
              />
            </div>
            <ol className="space-y-6">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="flex gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-xl">{s.title}</h3>
                    <p className="mt-1 text-ink-soft">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Adaptive remediation */}
      <section id="remediation" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-sm font-bold tracking-widest text-primary uppercase">
              Adaptive remediation
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">The class doesn't just move on</h2>
            <p className="mt-5 text-lg text-ink-soft">
              A knowledge check — a real question with a correct answer, unlike the trade-off taps
              in decide 1 and decide 2 — gets scored as a class. That aggregate score decides what
              happens next, before the next session is even generated.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground">
                1
              </span>
              <h3 className="mt-5 text-xl">Ready</h3>
              <p className="mt-2 font-mono text-xs text-ink-soft">≥ 80% (placeholder)</p>
              <p className="mt-2 text-ink-soft">
                Class advances to new content normally. No special instruction.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground">
                2
              </span>
              <h3 className="mt-5 text-xl">Needs simpler wording</h3>
              <p className="mt-2 font-mono text-xs text-ink-soft">60–79% (placeholder)</p>
              <p className="mt-2 text-ink-soft">
                Still advances on schedule — but that topic's generation prompt is told to simplify
                language and lean on more concrete explanations. Pacing doesn't change.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary font-display text-lg font-extrabold text-primary-foreground">
                3
              </span>
              <h3 className="mt-5 text-xl">Needs to repeat</h3>
              <p className="mt-2 font-mono text-xs text-ink-soft">&lt; 60% (placeholder)</p>
              <p className="mt-2 text-ink-soft">
                A short reteach pass opens the next session, before its new content — not a whole
                extra session, so the 15-session count stays fixed.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-cream p-6 text-center text-sm text-ink-soft">
            Repeating a topic also flags it in the class's world-events log — the same log later
            sessions already read for callbacks. Reinforcement in future, unrelated lessons is a
            side effect of that flag, not a separate mechanism with its own trigger. The three
            thresholds above are explicit placeholders: there's no classroom data yet to tune them
            against.
          </div>
        </div>
      </section>

      {/* Real-time decisions band */}
      <section className="bg-ink px-5 py-24 text-center md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl text-primary-foreground md:text-6xl">
            The class decides together — as a class
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/70">
            Both versions of what happens next are already written. The class's real-time tally
            just picks which one plays — that's what makes it feel responsive without any AI
            running during class.
          </p>
          <a
            href="#included"
            className="btn-pill mt-9 bg-accent px-8 py-4 text-lg text-accent-foreground hover:translate-y-[2px]"
          >
            See what's included
          </a>
        </div>
      </section>

      {/* Included */}
      <section id="included" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl md:text-5xl">What's included</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky">
                  <f.icon className="h-6 w-6 text-primary" strokeWidth={2.4} />
                </span>
                <h3 className="mt-5 text-xl">{f.title}</h3>
                <p className="mt-2 text-ink-soft">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activity interaction patterns */}
      <section id="patterns" className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-center font-display text-sm font-bold tracking-widest text-primary uppercase">
            Activity interaction patterns
          </p>
          <h2 className="mt-4 text-center text-4xl md:text-5xl">
            A whole workbook's worth of activities, four reusable shapes
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg text-ink-soft">
            Document labeling, cloze stories, vocabulary practice, ledgers, math word problems,
            circle graphs, time sheets, knowledge checks — every one of these is a real, distinct
            activity a kid sees. None of them need custom UI built for them: they all collapse into
            just four reusable interaction patterns underneath.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="font-mono text-sm font-semibold text-primary">tap_to_place</p>
              <p className="mt-2 text-sm text-ink-soft">Word bank + blanks + answer key.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Document labeling", "Cloze stories", "Vocabulary practice"].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-cream px-2.5 py-1 text-xs text-ink-soft">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="font-mono text-sm font-semibold text-primary">fill_the_structure</p>
              <p className="mt-2 text-sm text-ink-soft">A layout (table / graph / line) + fields + answer key.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Ledgers", "Math word problems", "Circle graphs", "Time sheets"].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-cream px-2.5 py-1 text-xs text-ink-soft">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="font-mono text-sm font-semibold text-primary">choose_one</p>
              <p className="mt-2 text-sm text-ink-soft">Options + a correct index, or null for a genuine trade-off.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Decide 1 / Decide 2", "Knowledge checks"].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-cream px-2.5 py-1 text-xs text-ink-soft">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <p className="font-mono text-sm font-semibold text-primary">reflect</p>
              <p className="mt-2 text-sm text-ink-soft">A prompt, no structured input.</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Warm-up", "Wrap-up", "Real-life reflection"].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-cream px-2.5 py-1 text-xs text-ink-soft">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-14 text-center text-sm text-ink-soft">
            Two of these, worked through with real content:
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                tap_to_place · Budget Vocabulary
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["afford", "balanced", "budget", "donation", "expense", "overspend", "portion", "prioritize"].map(
                  (w) => (
                    <span
                      key={w}
                      className="rounded-full border border-border bg-cream px-3 py-1 font-mono text-xs text-ink"
                    >
                      {w}
                    </span>
                  ),
                )}
              </div>
              <p className="mt-4 text-sm text-ink">
                "I don't want to <span className="inline-block w-20 border-b-2 border-accent align-middle" /> making
                bracelets."
              </p>
              <p className="mt-2 text-sm text-ink">
                "I've finally saved enough to buy a new book." →{" "}
                <span className="font-mono font-semibold text-primary">afford</span>
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary">
                fill_the_structure · Hala's Food Plan
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div
                  role="img"
                  aria-label="Circle graph split evenly into proteins, fruits and vegetables, and grains"
                  className="h-20 w-20 shrink-0 rounded-full ring-4 ring-cream"
                  style={{
                    background:
                      "conic-gradient(hsl(var(--accent)) 0deg 120deg, hsl(var(--sky)) 120deg 240deg, hsl(var(--primary)) 240deg 360deg)",
                  }}
                />
                <table className="min-w-[150px] flex-1 border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="border-b border-border px-2 py-1 text-left font-mono text-[10px] uppercase text-ink-soft">
                        Food group
                      </th>
                      <th className="border-b border-border px-2 py-1 text-left font-mono text-[10px] uppercase text-ink-soft">
                        Cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-border px-2 py-1">Proteins</td>
                      <td className="border-b border-border px-2 py-1">$108</td>
                    </tr>
                    <tr>
                      <td className="border-b border-border px-2 py-1">Fruits &amp; veg</td>
                      <td className="border-b border-border px-2 py-1">?</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1">Grains</td>
                      <td className="px-2 py-1">?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                Kids fill in the blanks from the word problem — same "layout + fields + answer key"
                shape every time, different numbers and story each session.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials — left exactly as-is, pending real ones */}
      <section id="parents" className="overflow-hidden bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <div className="flex justify-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-6 w-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="mt-5 text-4xl md:text-5xl">
            Learning changes when the teaching responds
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Loved by families and classroom teachers across the country.
          </p>
        </div>
        <div className="mt-12 flex w-max animate-marquee-slow gap-5 px-5">
          {[
            {
              quote:
                "My daughter now asks to read before dinner. That sentence would have been unthinkable in January.",
              name: "Dana R.",
              role: "Mom of two",
            },
            {
              quote:
                "It catches the exact sound she stumbles on and slows right down. That is what a good tutor does.",
              name: "Priya S.",
              role: "1st grade teacher",
            },
            {
              quote:
                "Ten quiet minutes a day, no arguing, and his confidence has completely changed at school.",
              name: "Marcus T.",
              role: "Dad of three",
            },
            {
              quote: "The weekly report finally told me what to actually practice with him at home.",
              name: "Elise W.",
              role: "Mom of one",
            },
            {
              quote: "We tried four apps. This is the first one my son opens without being asked.",
              name: "Jon P.",
              role: "Dad of two",
            },
          ]
            .concat([
              {
                quote:
                  "My daughter now asks to read before dinner. That sentence would have been unthinkable in January.",
                name: "Dana R.",
                role: "Mom of two",
              },
              {
                quote:
                  "It catches the exact sound she stumbles on and slows right down. That is what a good tutor does.",
                name: "Priya S.",
                role: "1st grade teacher",
              },
              {
                quote:
                  "Ten quiet minutes a day, no arguing, and his confidence has completely changed at school.",
                name: "Marcus T.",
                role: "Dad of three",
              },
              {
                quote: "The weekly report finally told me what to actually practice with him at home.",
                name: "Elise W.",
                role: "Mom of one",
              },
              {
                quote: "We tried four apps. This is the first one my son opens without being asked.",
                name: "Jon P.",
                role: "Dad of two",
              },
            ])
            .map((t, i) => (
              <figure
                key={i}
                className="w-[320px] shrink-0 rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <figcaption className="font-display text-xs font-bold tracking-widest text-primary uppercase">
                  Verified customer
                </figcaption>
                <blockquote className="mt-3 text-ink">{t.quote}</blockquote>
                <p className="mt-5 font-display font-bold text-ink">{t.name}</p>
                <p className="text-sm text-ink-soft">{t.role}</p>
              </figure>
            ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="waitlist" className="px-5 py-24 md:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-16 text-center shadow-soft">
          <h2 className="text-4xl text-primary-foreground md:text-5xl">
            Bring FinYay to your classroom
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
            Get updates as FinYay rolls out to more classrooms.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              aria-label="Email address"
              className="w-full rounded-full border-0 bg-card px-6 py-4 text-ink outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="btn-pill bg-accent px-8 py-4 text-accent-foreground hover:translate-y-[2px]"
            >
              Join
            </button>
          </form>
          <img
            src={mascot}
            alt=""
            aria-hidden="true"
            width={768}
            height={768}
            loading="lazy"
            className="animate-float pointer-events-none absolute -right-6 -bottom-8 w-32 opacity-90 md:w-44"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
