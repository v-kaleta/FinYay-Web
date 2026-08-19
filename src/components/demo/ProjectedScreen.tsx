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
          <div className="space-y-3 font-body text-xl leading-relaxed text-fy-ink">
            <p className="italic">
              Ruby was curled up on the couch, scrolling through her phone, when a bright pink
              case popped up on her screen. SHINY. SPARKLY. EVERYONE HAS ONE!, the ad said.
            </p>
            <p className="italic">She sat up. Three of her friends already had that exact case.</p>
            <p className="italic">
              Her dad glanced over from the kitchen table. &ldquo;What&rsquo;s got you so serious
              over there?&rdquo;
            </p>
            <p>
              &ldquo;This case,&rdquo; Ruby said, turning her phone around. &ldquo;Can I get it?
              It&rsquo;s only twelve dollars.&rdquo;
            </p>
            <p>&ldquo;Didn&rsquo;t you just get a new case last month?&rdquo;</p>
            <p>&ldquo;Yeah, but this one&rsquo;s way cooler. Everyone has it.&rdquo;</p>
            <p>
              &ldquo;You know what that&rsquo;s called?&rdquo; her dad said.{" "}
              <strong className="text-fy-green">Peer pressure.</strong> &ldquo;When an ad — or
              even just your friends — makes you want something you didn&rsquo;t plan on buying,
              even though what you already have works just fine.&rdquo;
            </p>
            <p className="italic">Ruby wasn&rsquo;t sure what to do.</p>
          </div>
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
          <div className="space-y-3 font-body text-xl leading-relaxed text-fy-ink">
            <p className="italic">
              Ruby decided to get it. Her dad helped her check out — twelve dollars, gone in a few
              taps. The case really was pretty.
            </p>
            <p className="italic">
              Three days later, her class was collecting money for a field trip. Ruby went to grab
              the eight dollars she&rsquo;d been saving up. It wasn&rsquo;t there. She&rsquo;d
              spent it on the case instead.
            </p>
            <p>&ldquo;I don&rsquo;t have it,&rdquo; she told her mom. &ldquo;I thought I had enough.&rdquo;</p>
            <p>
              Her mom didn&rsquo;t say I told you so. She just said, &ldquo;That&rsquo;s the thing
              about buying something you didn&rsquo;t plan for —{" "}
              <strong className="text-fy-green">the money still has to come from
              somewhere.</strong>&rdquo;
            </p>
          </div>
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
