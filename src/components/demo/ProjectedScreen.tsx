import { useState } from "react";
import { ROSTER } from "./lesson";
import type { TimerState } from "@/routes/demo";

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

// ---- Hand-coded icons, no emoji, inherit color via currentColor ----
function IconCheck({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function IconCross({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function IconClose({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function IconLock({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

// ---- IXL-style mastery gauge: a real 0-100 score ring, shared by both activities ----
function MasteryGauge({ value, size = 84 }: { value: number; size?: number }) {
  const stroke = 8;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(100, Math.max(0, value)) / 100) * circumference;
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="-rotate-90" style={{ width: size, height: size }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--fy-line)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--fy-green)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.4s ease" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-lg font-extrabold text-fy-ink">{Math.round(value)}</span>
        <span className="font-mono text-[8px] font-bold tracking-wide text-fy-ink-soft uppercase">score</span>
      </div>
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

function ProjectorClock({ timer }: { timer: TimerState }) {
  const mm = Math.floor(timer.remaining / 60);
  const ss = timer.remaining % 60;
  const done = timer.remaining <= 0;
  return (
    <div
      className={`fy-card mx-auto w-fit border-2 px-8 py-4 text-center ${
        done ? "border-fy-line bg-white" : "border-fy-green bg-fy-green"
      }`}
    >
      <p
        className={`font-display text-6xl font-extrabold tabular-nums ${
          done ? "text-fy-ink-soft" : "text-fy-green-ink"
        }`}
      >
        {mm}:{String(ss).padStart(2, "0")}
      </p>
      {!timer.running && !done && (
        <p className="mt-1 font-display text-sm font-extrabold text-fy-ink-soft">
          Waiting for your teacher to start
        </p>
      )}
    </div>
  );
}

// Shared option-button style for both activities: mostly white, feedback via border + icon, not big fills.
function OptionButton({
  label,
  state,
  onClick,
}: {
  label: string;
  state: "idle" | "selected" | "correct" | "wrong";
  onClick: () => void;
}) {
  const styles = {
    idle: "border-fy-line bg-white text-fy-ink",
    selected: "border-fy-ink bg-white text-fy-ink",
    correct: "border-fy-green bg-white text-fy-ink",
    wrong: "border-fy-pink bg-white text-fy-ink",
  }[state];
  return (
    <button
      type="button"
      onClick={onClick}
      className={`fy-card flex items-center justify-center gap-2 border-2 py-4 text-center font-display text-lg font-extrabold ${styles}`}
    >
      {state === "correct" && <IconCheck className="h-5 w-5 text-fy-green" />}
      {state === "wrong" && <IconCross className="h-5 w-5 text-fy-pink" />}
      {label}
    </button>
  );
}

// ---- Activity 1: guided step-by-step practice with a live mastery score ----
type Step = { prompt: string; options: string[]; correct: string; hint: string };

const STEPS: Step[] = [
  {
    prompt: "Total grocery budget: $240. Proteins cost half the budget. How much is that?",
    options: ["$100", "$120", "$140"],
    correct: "$120",
    hint: "Half of $240 means dividing by 2.",
  },
  {
    prompt:
      "That leaves $120 for the rest. Fruits & veggies cost twice as much as grains. If grains cost $40, how much are fruits & veggies?",
    options: ["$40", "$60", "$80"],
    correct: "$80",
    hint: "Twice as much means multiply by 2.",
  },
  {
    prompt: "Check your work: $120 + $80 + $40 = ?",
    options: ["$220", "$240", "$260"],
    correct: "$240",
    hint: "Add all three category amounts together.",
  },
];

function GuidedPractice() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const current = STEPS[step];
  const isCorrect = checked && selected === current?.correct;
  const score = (correctCount / STEPS.length) * 100;

  const proteins = "$120";
  const fruitsVeg = step >= 1 ? "$80" : "?";
  const grains = step >= 1 ? "$40" : "?";

  const check = () => {
    setChecked(true);
    if (selected === current.correct) setCorrectCount((c) => c + 1);
  };

  const next = () => {
    setStep((s) => s + 1);
    setSelected(null);
    setChecked(false);
    setShowHint(false);
  };

  if (step >= STEPS.length) {
    return (
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex items-center gap-4">
          <MasteryGauge value={score} />
          <p className="font-display text-2xl font-extrabold">Budget complete.</p>
        </div>
        <table className="font-display text-lg font-extrabold">
          <tbody>
            <tr className="border-b border-fy-line">
              <td className="py-1.5 pr-6 text-fy-ink-soft">Proteins</td>
              <td className="py-1.5">$120</td>
            </tr>
            <tr className="border-b border-fy-line">
              <td className="py-1.5 pr-6 text-fy-ink-soft">Fruits &amp; veg</td>
              <td className="py-1.5">$80</td>
            </tr>
            <tr>
              <td className="py-1.5 pr-6 text-fy-ink-soft">Grains</td>
              <td className="py-1.5">$40</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-5">
        <MasteryGauge value={score} />
        <table className="font-display text-sm font-extrabold">
          <tbody>
            <tr>
              <td className="pr-4 text-fy-ink-soft">Proteins</td>
              <td>{proteins}</td>
            </tr>
            <tr>
              <td className="pr-4 text-fy-ink-soft">Fruits &amp; veg</td>
              <td className={fruitsVeg === "?" ? "text-fy-ink-soft" : ""}>{fruitsVeg}</td>
            </tr>
            <tr>
              <td className="pr-4 text-fy-ink-soft">Grains</td>
              <td className={grains === "?" ? "text-fy-ink-soft" : ""}>{grains}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="font-display text-xl leading-snug font-extrabold text-fy-ink">{current.prompt}</p>

      <div className="grid grid-cols-3 gap-3">
        {current.options.map((opt) => {
          const state: "idle" | "selected" | "correct" | "wrong" = checked
            ? opt === current.correct
              ? "correct"
              : selected === opt
                ? "wrong"
                : "idle"
            : selected === opt
              ? "selected"
              : "idle";
          return (
            <OptionButton key={opt} label={opt} state={state} onClick={() => !checked && setSelected(opt)} />
          );
        })}
      </div>

      {showHint && !checked && <p className="font-body text-sm text-fy-ink-soft">Hint: {current.hint}</p>}

      <div className="flex items-center gap-3">
        {!checked ? (
          <>
            <button
              type="button"
              onClick={check}
              disabled={!selected}
              className="fy-card border-2 border-fy-green bg-fy-green px-6 py-2.5 font-display text-base font-extrabold text-fy-green-ink disabled:opacity-40"
            >
              Check
            </button>
            <button
              type="button"
              onClick={() => setShowHint(true)}
              className="font-display text-sm font-extrabold text-fy-ink-soft underline"
            >
              Show a hint
            </button>
          </>
        ) : isCorrect ? (
          <button
            type="button"
            onClick={next}
            className="fy-card border-2 border-fy-green bg-fy-green px-6 py-2.5 font-display text-base font-extrabold text-fy-green-ink"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              setChecked(false);
              setSelected(null);
            }}
            className="fy-card border-2 border-fy-pink bg-white px-6 py-2.5 font-display text-base font-extrabold text-fy-pink-ink"
          >
            Try again
          </button>
        )}
        <span className="ml-auto font-display text-xs font-extrabold text-fy-ink-soft">
          Question {step + 1} of {STEPS.length}
        </span>
      </div>
    </div>
  );
}

// ---- Activity 2: bite-sized vocabulary practice, same visual language as above ----
type VocabItem = { sentence: string; options: string[]; correct: string };

const VOCAB_ITEMS: VocabItem[] = [
  {
    sentence: "I don't want to ___ making bracelets.",
    options: ["overspend", "donate", "afford", "balanced"],
    correct: "overspend",
  },
  {
    sentence: "I'd like a small ___ of cake.",
    options: ["portion", "expense", "budget", "donation"],
    correct: "portion",
  },
  {
    sentence: "A ___ is a plan for earning and spending money.",
    options: ["budget", "expense", "overspend", "afford"],
    correct: "budget",
  },
  {
    sentence: "I finally saved enough to ___ a new book.",
    options: ["afford", "balanced", "prioritize", "donation"],
    correct: "afford",
  },
];

function VocabPractice() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const score = (correctCount / VOCAB_ITEMS.length) * 100;

  if (step >= VOCAB_ITEMS.length) {
    return (
      <div className="flex flex-1 items-center gap-4">
        <MasteryGauge value={score} />
        <p className="font-display text-2xl font-extrabold">Vocabulary practice complete.</p>
      </div>
    );
  }

  const current = VOCAB_ITEMS[step];
  const picked = selected !== null;
  const isCorrect = selected === current.correct;

  const pick = (opt: string) => {
    if (picked) return;
    setSelected(opt);
    if (opt === current.correct) setCorrectCount((c) => c + 1);
  };

  const next = () => {
    setStep((s) => s + 1);
    setSelected(null);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-5">
        <MasteryGauge value={score} />
        <span className="font-display text-sm font-extrabold text-fy-ink-soft">
          Question {step + 1} of {VOCAB_ITEMS.length}
        </span>
      </div>

      <p className="font-display text-2xl leading-snug font-extrabold text-fy-ink">{current.sentence}</p>

      <div className="grid grid-cols-2 gap-3">
        {current.options.map((opt) => {
          const state: "idle" | "correct" | "wrong" = !picked
            ? "idle"
            : opt === current.correct
              ? "correct"
              : selected === opt
                ? "wrong"
                : "idle";
          return <OptionButton key={opt} label={opt} state={state} onClick={() => pick(opt)} />;
        })}
      </div>

      {picked && (
        <div className="flex items-center gap-3">
          <p className="flex items-center gap-1.5 font-display text-lg font-extrabold">
            {isCorrect ? (
              <>
                <IconCheck className="h-5 w-5 text-fy-green" /> Correct
              </>
            ) : (
              <>
                <IconCross className="h-5 w-5 text-fy-pink" /> It&rsquo;s &ldquo;{current.correct}.&rdquo;
              </>
            )}
          </p>
          <button
            type="button"
            onClick={next}
            className="fy-card ml-auto border-2 border-fy-green bg-fy-green px-6 py-2 font-display text-sm font-extrabold text-fy-green-ink"
          >
            Continue
          </button>
        </div>
      )}
    </div>
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
          className="text-fy-ink-soft"
          aria-label="Close definition"
        >
          <IconClose />
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
        <span className="text-fy-ink-soft" aria-hidden="true">
          <IconClose />
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
          Back
        </button>
        <button
          type="button"
          onClick={() => goTo(panel + 1)}
          disabled={!onTitle && isLast}
          className="fy-card flex-[2] border-2 border-fy-green bg-fy-green py-3 text-center font-display text-lg font-extrabold text-fy-green-ink disabled:opacity-40"
        >
          {onTitle ? "Start" : isLast ? "End of story" : "Next"}
        </button>
      </div>
    </div>
  );
}

const STORY_TITLE = `${RUBY_FIRST}'s New Phone Case`;
const STORY_LINES: StoryLine[] = [
  { text: "Ruby works at the bank downtown. She just picked up her paycheck for the week." },
  { text: "On her lunch break, she was scrolling her phone when a bright pink case popped up in an ad." },
  { text: "SHINY. SPARKLY. EVERYONE HAS ONE, the ad said." },
  { text: "Her friend Maya, a doctor, already had the exact same case." },
  { speaker: "Ruby", text: "It's only twelve dollars. I could just get it." },
  { speaker: "Maya", text: "Didn't you just get a new case last month?" },
  { speaker: "Ruby", text: "Yeah, but this one's way cooler. Everyone has it." },
  { speaker: "Maya", text: "You know what that's called? **Peer pressure**." },
  { text: "Ruby wasn't sure what to do." },
];

const BRANCH_BUY_TITLE = `${RUBY_FIRST} Got the Case`;
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

export function ProjectedScreen({ beat, timer }: { beat: number; timer: TimerState | null }) {
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
          {timer ? (
            <ProjectorClock timer={timer} />
          ) : (
            <div className="fy-card mx-auto w-fit border-2 border-fy-green bg-fy-green px-6 py-4 text-center text-fy-green-ink">
              <p className="font-display text-2xl font-extrabold">Talk with a partner</p>
            </div>
          )}
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
          {timer && <ProjectorClock timer={timer} />}
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
            Activity 1 of 2 · guided practice
          </p>
          <GuidedPractice />
          {timer && <ProjectorClock timer={timer} />}
        </Shell>
      );
    case 11:
      return (
        <Shell>
          <p className="font-display text-xs font-extrabold tracking-widest text-fy-green uppercase">
            Activity 2 of 2 · vocabulary practice
          </p>
          <VocabPractice />
          {timer && <ProjectorClock timer={timer} />}
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
          {timer && <ProjectorClock timer={timer} />}
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
            <p className="mt-4 font-display text-xl font-extrabold">— Ruby S. · Banker</p>
          </div>
        </Shell>
      );
    case 14:
      return <PaginatedStory key={14} title={WRAP_TITLE} lines={WRAP_LINES} />;
    default:
      return (
        <Shell>
          <p className="font-display text-4xl font-extrabold">Session complete</p>
          <div className="fy-card border-2 border-fy-green bg-fy-green p-6 text-fy-green-ink">
            <p className="font-display text-2xl font-extrabold">Ruby S. was today&rsquo;s spotlight</p>
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
