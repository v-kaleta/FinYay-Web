import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Headphones,
  BarChart3,
  Library,
  CalendarDays,
  Medal,
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
      { title: "Lumo — An AI reading & math teacher built around your child" },
      {
        name: "description",
        content:
          "Lumo listens, adapts, and teaches reading and math one-on-one. Personalized daily activities for ages 4-9 on iOS and Android.",
      },
      { property: "og:title", content: "Lumo — An AI reading & math teacher for your child" },
      {
        property: "og:description",
        content:
          "A patient one-on-one teacher that adapts in real time. Reading and math activities kids ask for.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const included = [
  {
    icon: BookOpen,
    title: "Make-your-own stories",
    body: "Original books your child dreams up, about whatever they love this week.",
  },
  {
    icon: Headphones,
    title: "Live reading & math lessons",
    body: "A full curriculum taught one-on-one, out loud, at your child's pace.",
  },
  {
    icon: BarChart3,
    title: "Reports for grown-ups",
    body: "See strengths, sticking points, and every milestone as it happens.",
  },
  {
    icon: Library,
    title: "A library built on the science of reading",
    body: "Thousands of decodable and stretch books at exactly the right level.",
  },
  {
    icon: CalendarDays,
    title: "A daily plan that fits",
    body: "Ten focused minutes, rebuilt every morning around what they need next.",
  },
  {
    icon: Medal,
    title: "Rewards worth chasing",
    body: "Streaks, badges, and characters that keep kids coming back on their own.",
  },
];

const steps = [
  {
    n: "1",
    title: "It listens",
    body: "Your child reads aloud. Lumo hears every sound, not just the words.",
  },
  {
    n: "2",
    title: "It decides",
    body: "A wobble on a blend? It reteaches. Breezing through? It levels up.",
  },
  {
    n: "3",
    title: "It grows with them",
    body: "Every session reshapes tomorrow's plan, skill by skill.",
  },
];

const testimonials = [
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
];

const skills = [
  "Phonics",
  "Blending",
  "Sight words",
  "Fluency",
  "Comprehension",
  "Counting",
  "Number sense",
  "Addition",
  "Word problems",
  "Place value",
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
            No two kids are alike.
            <br />
            No two lessons should be.
          </h1>
          <p className="mt-6 max-w-md text-base text-ink-soft md:text-lg">
            An AI reading &amp; math teacher built around your child. On iOS and Android.
          </p>
          <a
            href="#waitlist"
            className="btn-pill btn-primary hover:btn-primary-hover mt-8 px-9 py-5 text-lg md:text-xl"
          >
            Get early access to Lumo
          </a>
          <p className="mt-4 font-display text-sm font-bold text-primary">Free, daily activities</p>
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
              The world's most patient reading teacher
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              For the first time, technology can genuinely teach. Lumo hears your child, understands
              where they are, and adapts in the moment.
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

      {/* Real-time decisions band */}
      <section className="bg-ink px-5 py-24 text-center md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl text-primary-foreground md:text-6xl">
            Lumo makes teaching decisions in the moment
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/70">
            No two kids learn the same way, so no two kids get the same Lumo. It slows down when
            they're stuck and pushes when they're ready.
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

      {/* Testimonials */}
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
          {[...testimonials, ...testimonials].map((t, i) => (
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
            Unlock the full potential of every child
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/80">
            Join the waitlist for Lumo 2.0 and get free daily activities while you wait.
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
