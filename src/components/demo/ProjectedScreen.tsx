import { ROSTER } from "./lesson";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-[420px] flex-col justify-center gap-6 bg-fy-cream p-8 text-fy-ink">
      {children}
    </div>
  );
}

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
      return (
        <Shell>
          <div className="flex items-center gap-3">
            <span className="fy-card border-2 border-fy-pink bg-fy-pink px-4 py-2 font-display text-lg font-extrabold text-fy-pink-ink">
              ⭐ Spotlight: Ruby S. · 🏦 Banker
            </span>
          </div>
          <p className="font-display text-4xl leading-snug font-extrabold">
            Ruby is scrolling through her phone when a glittery new phone case pops up in an ad
            — way past what she needs, but all her friends already have one.
          </p>
          <p className="fy-card border-2 border-fy-green bg-fy-green px-6 py-5 font-display text-2xl font-extrabold text-fy-green-ink">
            Ads and friends can push us to buy things we didn&rsquo;t plan on, even when our old
            case works fine.
          </p>
        </Shell>
      );
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
      return (
        <Shell>
          <span className="fy-card w-fit bg-fy-pink px-4 py-2 font-display text-lg font-extrabold text-fy-pink-ink">
            The class chose: Buy it
          </span>
          <p className="font-display text-4xl leading-snug font-extrabold">
            Ruby buys the case. It looks great, but now she&rsquo;s short on cash for the notebook
            she actually needed this week.
          </p>
          <p className="fy-card border-2 border-fy-green bg-fy-green px-6 py-5 font-display text-2xl font-extrabold text-fy-green-ink">
            Impulse buys can crowd out planned ones.
          </p>
        </Shell>
      );
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
