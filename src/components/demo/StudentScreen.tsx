import { ROSTER } from "./lesson";

function IconCheck({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
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

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-[420px] flex-col gap-4 bg-fy-cream p-6 text-fy-ink">
      {children}
    </div>
  );
}

function Passive({ text }: { text: string }) {
  return (
    <Shell>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
        <p className="font-display text-xl font-extrabold">{text}</p>
      </div>
    </Shell>
  );
}

export function StudentScreen({ beat }: { beat: number }) {
  switch (beat) {
    case 1:
      return (
        <Shell>
          <p className="font-display text-lg font-extrabold">Tap your tile</p>
          <div className="grid grid-cols-2 gap-3">
            {ROSTER.map((k) => (
              <button
                key={k.name}
                type="button"
                className="fy-card flex flex-col items-center border-2 border-fy-green bg-white px-3 py-5 text-center font-display text-base font-extrabold text-fy-ink"
              >
                <span className="mb-2 block h-20 w-20">
                  {k.iconImg ? (
                    <img src={k.iconImg} alt="" className="h-full w-full object-contain" />
                  ) : (
                    <span className="text-4xl">{k.icon}</span>
                  )}
                </span>
                {k.name}
              </button>
            ))}
          </div>
        </Shell>
      );
    case 2:
      return (
        <Shell>
          <p className="font-display text-sm font-extrabold text-fy-ink-soft">Just for you, Ruby</p>
          <div className="fy-card flex flex-1 items-center bg-fy-pink p-6 text-fy-pink-ink">
            <p className="font-display text-2xl leading-snug font-extrabold">
              Last time, you spent a little early on a new pencil case you didn&rsquo;t really
              need.
            </p>
          </div>
        </Shell>
      );
    case 3:
      return <Passive text="Follow along on the shared screen." />;
    case 4:
      return <Passive text="Follow along on the shared screen." />;
    case 5:
      return (
        <Shell>
          <p className="font-display text-sm font-extrabold text-fy-ink-soft">Quick check</p>
          <p className="font-display text-xl font-extrabold">Which of these is peer pressure?</p>
          <div className="flex flex-col gap-2">
            <div className="fy-card flex items-center gap-2 border-2 border-fy-green bg-white p-3 font-display font-extrabold text-fy-ink">
              <IconCheck className="h-5 w-5 text-fy-green" />A friend says everyone has it, so you
              want it too
            </div>
            <div className="fy-card border-2 border-fy-line bg-white p-3 font-display font-extrabold text-fy-ink-soft">
              You made a shopping list first
            </div>
            <div className="fy-card border-2 border-fy-line bg-white p-3 font-display font-extrabold text-fy-ink-soft">
              You saved money every week
            </div>
          </div>
          <p className="mt-auto text-center font-display text-sm font-extrabold text-fy-ink-soft">
            Locked in.
          </p>
        </Shell>
      );
    case 6:
      return <Passive text="Talk to your partner — 60 seconds!" />;
    case 7:
      return (
        <Shell>
          <p className="font-display text-lg font-extrabold">Buy it, or pass?</p>
          <div className="fy-card flex items-center gap-3 border-2 border-fy-green bg-white p-5 text-fy-ink">
            <IconCheck className="h-6 w-6 text-fy-green" />
            <p className="font-display text-xl font-extrabold">You picked: buy it</p>
          </div>
          <div className="fy-card border-2 border-fy-line bg-white p-5 text-fy-ink-soft">
            <p className="font-display text-xl font-extrabold">Pass and stick with the old one</p>
          </div>
          <p className="mt-auto text-center font-display text-base font-extrabold text-fy-ink-soft">
            Locked in — waiting for the rest of the class.
          </p>
        </Shell>
      );
    case 8:
      return <Passive text="Share out when your teacher calls on you." />;
    case 9:
      return <Passive text="Follow along on the shared screen." />;
    case 10:
      return (
        <Passive text="This one's class-interactive — we're working through it together on the shared screen." />
      );
    case 11:
      return (
        <Passive text="This one's class-interactive — we're working through it together on the shared screen." />
      );
    case 12:
      return (
        <Shell>
          <p className="font-display text-lg font-extrabold">Cash today, or an IOU?</p>
          <div className="fy-card flex items-center gap-3 border-2 border-fy-green bg-white p-5 text-fy-ink">
            <IconCheck className="h-6 w-6 text-fy-green" />
            <p className="font-display text-xl font-extrabold">You picked: pay cash today</p>
          </div>
          <div className="fy-card border-2 border-fy-line bg-white p-5 text-fy-ink-soft">
            <p className="font-display text-xl font-extrabold">Take an IOU, pay next week</p>
          </div>
          <p className="mt-auto text-center font-display text-base font-extrabold text-fy-ink-soft">
            Locked in — waiting for the rest of the class.
          </p>
        </Shell>
      );
    case 13:
      return (
        <Shell>
          <p className="font-display text-xl leading-snug font-extrabold">
            Which would you pick, and why — cash today or an IOU next week?
          </p>
          <div className="fy-card flex-1 border-2 border-fy-line bg-white p-4">
            <p className="font-body text-base text-fy-ink">
              i wud pay cash today bc then i dont have to remember to pay it back later
              <span className="ml-0.5 inline-block h-5 w-0.5 translate-y-1 bg-fy-ink" />
            </p>
          </div>
          <p className="flex items-center justify-center gap-1.5 font-display text-sm font-extrabold text-fy-ink-soft">
            <IconLock /> Private — only your teacher sees this.
          </p>
        </Shell>
      );
    case 14:
      return <Passive text="Follow along on the shared screen." />;
    default:
      return (
        <Shell>
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <p className="font-display text-xl font-extrabold">See you next time!</p>
            <p className="font-body text-sm text-fy-ink-soft">
              Nothing to log out of — just close the lid.
            </p>
          </div>
        </Shell>
      );
  }
}
