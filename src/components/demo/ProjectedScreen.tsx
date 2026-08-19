import { useState } from "react";
import { ROSTER } from "./lesson";

const RUBY = ROSTER.find((k) => k.name === "Ruby S.")!;
const RUBY_FIRST = RUBY.name.split(" ")[0];
const MAYA = ROSTER.find((k) => k.name === "Maya T.")!;

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-[420px] flex-col justify-center gap-6 bg-fy-cream p-8 text-fy-ink">
      {children}
    </div>
  );
}

function BlankBeat({ heading, body }: { heading: string; body: string }) {
  return (
    <Shell>
      <div className="fy-card flex flex-1 items-center justify-center border-2 border-dashed border-fy-line p-10 text-center">
        <div>
          <p className="font-display text-2xl font-extrabold text-fy-ink-soft">{heading}</p>
          <p className="mt-2 max-w-sm font-body text-fy-ink-soft">{body}</p>
        </div>
      </div>
    </Shell>
  );
}

type StoryLine = { speaker?: string; text: string };

const VOCAB: Record<string, string> = {
  "peer pressure": "When friends, coworkers, or ads make you want to buy something you didn't plan on.",
  budget: "A plan for how you'll spend or save money, made before you shop — not after.",
};

function VocabText({ text, onWordClick }: { text: string; onWordClick: (word: string) => void }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const word = part.slice(2, -2);
          return (
            <button
              key={i}
              type="button"
              onClick={() => onWordClick(word)}
              className="underline decoration-fy-pink decoration-[3px] underline-offset-4 font-extrabold text-fy-ink"
            >
              {word}
            </button>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function VocabDefinition({ word, onClose }: { word: string; onClose: () => void }) {
  const def = VOCAB[word.toLowerCase()];
  if (!def) return null;
  return (
    <div className="rounded-2xl border-2 border-fy-pink bg-white px-4 py-3">
      <div className="flex items-start justify-between gap-2">
        <p className="font-display text-sm font-extrabold text-fy-pink-ink">{word}</p>
        <button
          type="button"
          onClick={onClose}
          className="font-display text-xs font-extrabold text-fy-ink-soft"
          aria-label="Close definition"
        >
          ✕
        </button>
      </div>
      <p className="mt-1 font-body text-sm text-fy-ink">{def}</p>
    </div>
  );
}

function VocabBlock({ text }: { text: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-3">
      <p className="font-display text-2xl leading-snug font-extrabold text-fy-ink">
        <VocabText text={text} onWordClick={(w) => setActive(w === active ? null : w)} />
      </p>
      {active && <VocabDefinition word={active} onClose={() => setActive(null)} />}
    </div>
  );
}

function SpeakerAvatar({ speaker }: { speaker?: string }) {
  if (!speaker || speaker === "Ruby") {
    return (
      <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-fy-line bg-white">
        <img src={RUBY.iconImg} alt="" className="h-full w-full object-contain p-1" />
      </span>
    );
  }
  if (speaker === "Maya") {
    return (
      <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-fy-line bg-white">
        <img src={MAYA.iconImg} alt="" className="h-full w-full object-contain p-1" />
      </span>
    );
  }
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-fy-line bg-fy-pink font-display text-sm font-extrabold text-fy-pink-ink">
      {speaker[0]}
    </span>
  );
}

function IconStage({ size = 140 }: { size?: number }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size + 40, height: size + 40 }}>
      <div className="absolute rounded-full bg-fy-pink/25" style={{ width: size + 40, height: size + 40 }} />
      <span className="absolute -top-1 right-2 text-xl">✨</span>
      <span className="absolute bottom-2 -left-2 text-base">✨</span>
      <img
        src={RUBY.iconImg}
        alt={`${RUBY_FIRST}, this session's spotlight`}
        className="relative object-contain drop-shadow-lg"
        style={{ width: size, height: size }}
      />
    </div>
  );
}

function PaginatedStory({ title, lines }: { title: string; lines: StoryLine[] }) {
  const [panel, setPanel] = useState(-1);
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const onTitle = panel === -1;
  const current = onTitle ? null : lines[panel];
  const isLast = panel === lines.length - 1;

  const goTo = (next: number) => {
    setActiveWord(null);
    setPanel(Math.max(-1, Math.min(lines.length - 1, next)));
  };

  return (
    <div className="flex h-full min-h-[420px] flex-col bg-fy-cream p-6">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-6 w-6 place-items-center text-fy-ink-soft" aria-hidden="true">
          ✕
        </span>
        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-fy-line">
          <div
            className="h-full rounded-full bg-fy-green transition-all"
            style={{ width: onTitle ? "6%" : `${((panel + 1) / lines.length) * 100}%` }}
          />
        </div>
        {!onTitle && (
          <span className="font-display text-xs font-extrabold text-fy-ink-soft">
            {panel + 1}/{lines.length}
          </span>
        )}
      </div>

      {onTitle ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <IconStage size={150} />
          <p className="font-display text-3xl font-extrabold text-fy-ink">{title}</p>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <IconStage size={100} />
        </div>
      )}

      {!onTitle && current && (
        <div className="mt-4 flex items-start gap-3">
          <SpeakerAvatar speaker={current.speaker} />
          <div className="flex-1 rounded-2xl border-2 border-fy-line bg-white px-4 py-3">
            {current.speaker && (
              <p className="font-display text-xs font-extrabold text-fy-ink-soft">{current.speaker}</p>
            )}
            <p className="font-display text-lg font-extrabold text-fy-ink">
              <VocabText text={current.text} onWordClick={(w) => setActiveWord(w === activeWord ? null : w)} />
            </p>
          </div>
        </div>
      )}

      {activeWord && <VocabDefinition word={activeWord} onClose={() => setActiveWord(null)} />}

      {!onTitle && (
        <div className="mt-4 flex justify-center gap-1.5">
          {lines.map((_, i) => (
            <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === panel ? "bg-fy-green" : "bg-fy-line"}`} />
          ))}
        </div>
      )}

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => goTo(panel - 1)}
          disabled={onTitle}
          className="fy-card flex-1 border-2 border-fy-line bg-white py-3 text-center font-display text-lg font-extrabold text-fy-ink-soft disabled:opacity-30"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={() => goTo(panel + 1)}
          disabled={!onTitle && isLast}
          className="fy-card flex-[2] border-2 border-fy-green bg-fy-green py-3 text-center font-display text-lg font-extrabold text-fy-green-ink disabled:opacity-40"
        >
          {onTitle ? "Start →" : isLast ? "End of story" : "Next →"}
        </button>
      </div>
    </div>
  );
}

const STORY_TITLE = `${RUBY_FIRST}'s New Phone Case!`;
const STORY_LINES: StoryLine[] = [
  { text: "Ruby works at the bank downtown. She just picked up her paycheck for the week." },
  { text: "On her lunch break, she was scrolling her phone when a bright pink case popped up in an ad." },
  { text: "SHINY. SPARKLY. EVERYONE HAS ONE! the ad said." },
  { text: "Her friend Maya, a doctor, already had the exact same case." },
  { speaker: "Ruby", text: "It's only twelve dollars. I could just get it." },
  { speaker: "Maya", text: "Didn't you just get a new case last month?" },
  { speaker: "Ruby", text: "Yeah, but this one's way cooler. Everyone has it." },
  { speaker: "Maya", text: "You know what that's called? **Peer pressure**." },
  { text: "Ruby wasn't sure what to do." },
];

const BRANCH_BUY_TITLE = `${RUBY_FIRST} Got the Case!`;
const BRANCH_BUY_LINES: StoryLine[] = [
  { text: "Ruby decided to get it. Twelve dollars from her paycheck, gone in a few taps." },
  { text: "The case really was pretty." },
  { text: "A few days later, the bank was collecting money for a coworker's family. Everyone chipped in ten dollars." },
  { text: "Ruby went to grab her ten dollars. She didn't have it — she'd spent it on the case." },
  { speaker: "Ruby", text: "I don't have it. I thought I had enough." },
  { speaker: "Maya", text: "That's the thing about buying something you didn't plan for..." },
  { speaker: "Maya", text: "The money still has to come from somewhere." },
];

const WRAP_TITLE = `What ${RUBY_FIRST} Learned`;
const WRAP_LINES: StoryLine[] = [
  { text: "The next payday, Ruby saw another ad — a new watch this time. Everyone at the bank was talking about it." },
  { speaker: "Ruby", text: "I already know what I'm doing with this paycheck." },
  { text: "She checked her **budget** first. The watch could wait." },
  { text: "This time, when the coworker collection came around, her ten dollars was right there." },
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
        <BlankBeat
          heading="Nothing on the board right now"
          body="This beat is private on each kid's device. Sharing it would put one student's money story in front of the whole room."
        />
      );
    case 3:
      return <PaginatedStory key={3} title={STORY_TITLE} lines={STORY_LINES} />;
    case 4:
      return (
        <Shell>
          <p className="font-display text-xs font-extrabold tracking-widest text-fy-green uppercase">
            Teach 1
          </p>
          <VocabBlock text="When you make a **budget**, you decide ahead of time how you'll spend your money. But ads and friends can use **peer pressure** to make you want to change your plan on the spot." />
          <p className="font-body text-fy-ink-soft">
            Today we&rsquo;ll watch what happens when someone feels that pressure — and what they
            can do about it.
          </p>
        </Shell>
      );
    case 5:
      return (
        <BlankBeat
          heading="A quick check is happening on each device"
          body="One question, answered privately. Nothing to show the whole room until it's done."
        />
      );
    case 6:
      return (
        <Shell>
          <p className="font-display text-xs font-extrabold tracking-widest text-fy-green uppercase">
            Turn &amp; talk
          </p>
          <p className="font-display text-3xl font-extrabold">
            Has an ad or a friend ever made YOU want to buy something?
          </p>
          <div className="fy-card mx-auto w-fit border-2 border-fy-green bg-fy-green px-6 py-4 text-center text-fy-green-ink">
            <p className="font-display text-2xl font-extrabold">⏱ 60 seconds with a partner</p>
          </div>
        </Shell>
      );
    case 7:
      return (
        <Shell>
          <p className="font-display text-4xl font-extrabold">
            Buy the flashy new phone case, or pass?
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className="fy-card border-2 border-fy-green bg-fy-green p-6 text-fy-green-ink">
              <p className="font-display text-2xl font-extrabold">Buy the flashy new phone case</p>
              <p className="mt-4 font-display text-6xl font-bold">3</p>
            </div>
            <div className="fy-card border-2 border-fy-pink bg-fy-pink p-6 text-fy-pink-ink">
              <p className="font-display text-2xl font-extrabold">Pass and stick with the old one</p>
              <p className="mt-4 font-display text-6xl font-bold">2</p>
            </div>
          </div>
          <p className="font-display text-2xl font-extrabold text-fy-ink-soft">5 of 8 have voted</p>
        </Shell>
      );
    case 8:
      return (
        <Shell>
          <p className="font-display text-xs font-extrabold tracking-widest text-fy-green uppercase">
            Discuss
          </p>
          <p className="font-display text-3xl font-extrabold">Why did you vote that way?</p>
          <p className="font-body text-fy-ink-soft">
            Talk it through as a class before we see what happened to Ruby.
          </p>
        </Shell>
      );
    case 9:
      return <PaginatedStory key={9} title={BRANCH_BUY_TITLE} lines={BRANCH_BUY_LINES} />;
    case 10:
      return (
        <Shell>
          <p className="font-display text-xs font-extrabold tracking-widest text-fy-green uppercase">
            Activity 1 of 2 · fill_the_structure
          </p>
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
    case 11:
      return (
        <Shell>
          <p className="font-display text-xs font-extrabold tracking-widest text-fy-green uppercase">
            Activity 2 of 2 · tap_to_place
          </p>
          <p className="font-display text-3xl font-extrabold">Budget Vocabulary</p>
          <div className="flex flex-wrap gap-2">
            {["afford", "balanced", "budget", "donation", "expense", "overspend", "portion", "prioritize"].map((w) => (
              <span
                key={w}
                className="fy-card border-2 border-fy-line bg-white px-3 py-1.5 font-display text-sm font-extrabold text-fy-ink"
              >
                {w}
              </span>
            ))}
          </div>
          <p className="font-display text-xl font-extrabold text-fy-ink">
            &ldquo;I don&rsquo;t want to _______ making bracelets.&rdquo;
          </p>
          <p className="font-body text-fy-ink-soft">
            Class fills in the blank together, word bank above.
          </p>
        </Shell>
      );
    case 12:
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
          <p className="font-display text-2xl font-extrabold text-fy-ink-soft">6 of 8 have voted</p>
        </Shell>
      );
    case 13:
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
    case 14:
      return <PaginatedStory key={14} title={WRAP_TITLE} lines={WRAP_LINES} />;
    default:
      return (
        <Shell>
          <p className="font-display text-4xl font-extrabold">That&rsquo;s a wrap! 🎉</p>
          <div className="fy-card border-2 border-fy-green bg-fy-green p-6 text-fy-green-ink">
            <p className="font-display text-2xl font-extrabold">
              ⭐ Ruby S. was today&rsquo;s spotlight
            </p>
            <p className="mt-2 font-display text-2xl font-extrabold">
              She bought on impulse once — and budgeted first the next time
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
