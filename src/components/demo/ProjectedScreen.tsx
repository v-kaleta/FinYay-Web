import { useState } from "react";
import { ROSTER } from "./lesson";

const RUBY = ROSTER.find((k) => k.name === "Ruby S.")!;

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-[420px] flex-col justify-center gap-6 bg-fy-cream p-8 text-fy-ink">
      {children}
    </div>
  );
}

type StoryLine = { speaker?: string; text: string };

function SpeakerAvatar({ speaker }: { speaker?: string }) {
  if (!speaker || speaker === "Ruby") {
    return (
      <span className="fy-card grid h-9 w-9 shrink-0 place-items-center overflow-hidden border-2 border-fy-line bg-white">
        <img src={RUBY.iconImg} alt="" className="h-full w-full object-contain p-1" />
      </span>
    );
  }
  return (
    <span className="fy-card grid h-9 w-9 shrink-0 place-items-center border-2 border-fy-line bg-fy-pink font-display text-sm font-extrabold text-fy-pink-ink">
      {speaker[0]}
    </span>
  );
}

function PaginatedStory({ lines }: { lines: StoryLine[] }) {
  const [panel, setPanel] = useState(0);
  const current = lines[panel];
  const isLast = panel === lines.length - 1;

  return (
    <div className="flex h-full min-h-[420px] flex-col bg-fy-cream p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-6 w-6 place-items-center text-fy-ink-soft" aria-hidden="true">
          ✕
        </span>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-fy-line">
          <div
            className="h-full rounded-full bg-fy-green transition-all"
            style={{ width: `${((panel + 1) / lines.length) * 100}%` }}
          />
        </div>
        <span className="font-display text-xs font-extrabold text-fy-ink-soft">
          {panel + 1}/{lines.length}
        </span>
      </div>

      <div className="fy-card flex flex-1 items-center justify-center border-2 border-fy-green bg-fy-green p-8">
        <img
          src={RUBY.iconImg}
          alt="Ruby, this session's spotlight"
          className="h-32 w-32 object-contain drop-shadow-lg"
        />
      </div>

      <div className="mt-5 flex items-start gap-3">
        <SpeakerAvatar speaker={current.speaker} />
        <div className="fy-card flex-1 border-2 border-fy-line bg-white px-4 py-3">
          {current.speaker && (
            <p className="font-display text-xs font-extrabold text-fy-ink-soft">{current.speaker}</p>
          )}
          <p className="font-display text-lg font-extrabold text-fy-ink">{current.text}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {lines.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${i === panel ? "bg-fy-green" : "bg-fy-line"}`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => setPanel((p) => Math.min(lines.length - 1, p + 1))}
        disabled={isLast}
        className="fy-card mt-4 w-full border-2 border-fy-green bg-fy-green py-3 text-center font-display text-lg font-extrabold text-fy-green-ink disabled:opacity-40"
      >
        {isLast ? "End of story" : "→"}
      </button>
    </div>
  );
}

const STORY_LINES: StoryLine[] = [
  { text: "Ruby was scrolling through her phone when a bright pink case popped up on her screen." },
  { text: "SHINY. SPARKLY. EVERYONE HAS ONE! the ad said." },
  { text: "She sat up — three of her friends already had that exact case." },
  { speaker: "Dad", text: "What's got you so serious over there?" },
  { speaker: "Ruby", text: "This case! Can I get it? It's only twelve dollars." },
  { speaker: "Dad", text: "Didn't you just get a new case last month?" },
  { speaker: "Ruby", text: "Yeah, but this one's way cooler. Everyone has it." },
  { speaker: "Dad", text: "You know what that's called? Peer pressure." },
  { text: "Ruby wasn't sure what to do." },
];

const BRANCH_BUY_LINES: StoryLine[] = [
  { text: "Ruby decided to get it. Twelve dollars, gone in a few taps." },
  { text: "The case really was pretty." },
  { text: "Three days later, her class collected money for a field trip." },
  { text: "Ruby went to grab the eight dollars she'd saved. It wasn't there." },
  { speaker: "Ruby", text: "I don't have it. I thought I had enough." },
  { speaker: "Mom", text: "That's the thing about buying something you didn't plan for..." },
  { speaker: "Mom", text: "The money still has to come from somewhere." },
];

export function ProjectedScreen({ beat }: { beat: number }) {
  switch (beat) {
    case 1:
      return (
        <Shell>
          <p className="font-display text-xl font-extrabold text-fy-ink-soft">
            Join FinYay — Spending, Session 3
          </p>
          <div className="fy-card border-2 border-fy-green bg-fy-green px-8 py-10 text-center">
            <p className="font-body text-lg text-fy-green-ink">Today&rsquo;s class code</p>
            <p className="font-display text-5xl font-extrabold tracking-[0.15em] text-fy-green-ink">
              MINT-42
            </p>
          </div>
          <p className="font-display text-2xl font-extrabold">Tap your name to join!</p>
        </Shell>
      );
    case 2:
      return (
        <Shell>
          <div className="fy-card flex flex-1 items-center justify-center border-2 border-dashed border-fy-line p-10 text-center">
            <div>
              <p className="font-display text-2xl font-extrabold text-fy-ink-soft">
                Nothing on the board right now
              </p>
              <p className="mt-2 max-w-sm font-body text-fy-ink-soft">
                This beat is private on each kid&rsquo;s device. Sharing it would put one
                student&rsquo;s money story in front of the whole room.
              </p>
            </div>
          </div>
        </Shell>
      );
    case 3:
      return <PaginatedStory key={3} lines={STORY_LINES} />;
    case 4:
      return (
        <Shell>
          <p className="font-display text-4xl font-extrabold">
            Buy the flashy new phone case, or pass?
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="fy-card border-2 border-fy-green bg-fy-green p-6 text-fy-green-ink">
              <p className="font-display text-2xl font-extrabold">
                Buy the flashy new phone case
              </p>
              <p className="mt-4 font-display text-6xl font-bold">3</p>
            </div>
            <div className="fy-card border-2 border-fy-pink bg-fy-pink p-6 text-fy-pink-ink">
              <p className="font-display text-2xl font-extrabold">Pass and stick with the old one</p>
              <p className="mt-4 font-display text-6xl font-bold">2</p>
            </div>
          </div>
          <p className="font-display text-2xl font-extrabold text-fy-ink-soft">
            5 of 8 have voted
          </p>
        </Shell>
      );
    case 5:
      return <PaginatedStory key={5} lines={BRANCH_BUY_LINES} />;
    case 6:
      return (
        <Shell>
          <p className="font-display text-3xl font-extrabold">
            Let&rsquo;s fill in the grocery budget together
          </p>
          <div className="grid grid-cols-[auto_1fr] items-center gap-8">
            <svg viewBox="0 0 100 100" className="h-44 w-44" role="img" aria-label="Budget pie chart">
              <circle cx="50" cy="50" r="50" fill="var(--fy-pink)" />
              <path d="M50 50 L50 0 A50 50 0 0 1 95 72 Z" fill="var(--fy-green)" />
              <path d="M50 50 L95 72 A50 50 0 0 1 50 100 Z" fill="var(--fy-cream)" />
            </svg>
            <table className="w-full font-display text-2xl font-extrabold">
              <tbody>
                <tr className="border-b-2 border-fy-line">
                  <td className="py-3">🥩 Proteins</td>
                  <td className="py-3 text-right">$108</td>
                </tr>
                <tr className="border-b-2 border-fy-line">
                  <td className="py-3">🥕 Fruits &amp; veg</td>
                  <td className="py-3 text-right text-fy-ink-soft">?</td>
                </tr>
                <tr>
                  <td className="py-3">🍞 Grains</td>
                  <td className="py-3 text-right text-fy-ink-soft">?</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-display text-xl font-extrabold text-fy-ink-soft">
            Total grocery budget: $240
          </p>
        </Shell>
      );
    case 7:
      return (
        <Shell>
          <p className="font-display text-4xl font-extrabold">
            Ruby still needs that notebook. What now?
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="fy-card border-2 border-fy-green bg-fy-green p-6 text-fy-green-ink">
              <p className="font-display text-2xl font-extrabold">Pay cash today</p>
              <p className="mt-4 font-display text-6xl font-bold">4</p>
            </div>
            <div className="fy-card border-2 border-fy-pink bg-fy-pink p-6 text-fy-pink-ink">
              <p className="font-display text-2xl font-extrabold">Take an IOU, pay next week</p>
              <p className="mt-4 font-display text-6xl font-bold">2</p>
            </div>
          </div>
          <p className="font-display text-2xl font-extrabold text-fy-ink-soft">
            6 of 8 have voted
          </p>
        </Shell>
      );
    case 8:
      return (
        <Shell>
          <p className="font-display text-3xl font-extrabold">From today&rsquo;s spotlight</p>
          <div className="fy-card border-2 border-fy-pink bg-fy-pink p-8 text-fy-pink-ink">
            <p className="font-display text-3xl leading-snug font-extrabold">
              &ldquo;i wud pay cash today bc then i dont have to remember to pay it back
              later&rdquo;
            </p>
            <p className="mt-4 font-display text-xl font-extrabold">— Ruby S. · 🏦 Banker</p>
          </div>
        </Shell>
      );
    default:
      return (
        <Shell>
          <p className="font-display text-4xl font-extrabold">That&rsquo;s a wrap! 🎉</p>
          <div className="fy-card border-2 border-fy-green bg-fy-green p-6 text-fy-green-ink">
            <p className="font-display text-2xl font-extrabold">
              ⭐ Ruby S. was today&rsquo;s spotlight
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold">
              The class leaned toward buying — and felt the trade-off
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {ROSTER.map((k) => (
              <span
                key={k.name}
                className="fy-card flex items-center gap-1.5 border-2 border-fy-pink bg-fy-pink px-3 py-2 font-display text-sm font-extrabold text-fy-pink-ink"
              >
                {k.iconImg ? (
                  <img src={k.iconImg} alt="" className="h-5 w-5 object-contain" />
                ) : (
                  <span>{k.icon}</span>
                )}
                {k.name}
              </span>
            ))}
          </div>
          <p className="font-display text-xl font-extrabold text-fy-ink-soft">
            Spending · Session 3 of 3 complete
          </p>
        </Shell>
      );
  }
}
