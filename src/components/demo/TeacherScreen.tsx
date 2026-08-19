import { ROSTER, VOTES_1, VOTES_2 } from "./lesson";
import type { TimerState } from "@/routes/demo";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-[420px] flex-col gap-3 overflow-y-auto bg-td-bg p-4 font-admin text-[13px] text-td-ink">
      <div className="flex items-center justify-between border-b border-td-border pb-2 text-[11px] text-td-ink-soft">
        <span>Spending · Session 3/3 · Session 7 of 15</span>
        <span>Room 12 · Ms. Alvarez</span>
      </div>
      <Glance />
      {children}
    </div>
  );
}

function Glance() {
  return (
    <div className="border border-td-border bg-td-surface px-3 py-2 text-[12px]">
      <p>
        <span className="font-semibold">Objective:</span> Identify peer pressure as a spending
        trigger and explain why budgeting ahead of time helps resist it.
      </p>
      <p className="mt-1 text-td-ink-soft">
        <span className="font-semibold text-td-ink">Standards:</span> National 4-1 to 4-6 ·
        Illinois SS.EC.FL.1.4, SS.EC.1.K, SS.EC.FL.2.4
      </p>
      <p className="mt-1 text-td-ink-soft">
        <span className="font-semibold text-td-ink">Materials:</span> None — fully digital, no
        printed materials required
      </p>
    </div>
  );
}

function Panel({
  title,
  minutes,
  children,
}: {
  title: string;
  minutes?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-td-border bg-td-surface">
      <div className="flex items-center justify-between border-b border-td-border bg-td-head px-3 py-1.5 text-[11px] font-semibold tracking-wide text-td-ink-soft uppercase">
        <span>{title}</span>
        {minutes && <span className="normal-case">~{minutes}</span>}
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
}

function Differentiation({ ell, extension }: { ell: string; extension: string }) {
  return (
    <Panel title="Differentiation">
      <p>
        <span className="font-semibold">ELL:</span> {ell}
      </p>
      <p className="mt-1.5">
        <span className="font-semibold">Extension:</span> {extension}
      </p>
    </Panel>
  );
}

function Watch({ children }: { children: React.ReactNode }) {
  return (
    <Panel title="Common misconception">
      <p className="text-td-ink-soft">{children}</p>
    </Panel>
  );
}

function formatTime(totalSeconds: number) {
  const mm = Math.floor(totalSeconds / 60);
  const ss = totalSeconds % 60;
  return `${mm}:${String(ss).padStart(2, "0")}`;
}

function Timer({ timer, label }: { timer: TimerState; label: string }) {
  const done = timer.remaining <= 0;
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-display text-lg font-bold tabular-nums text-td-ink">
        {formatTime(timer.remaining)}
      </span>
      <button
        type="button"
        onClick={timer.onToggle}
        disabled={done}
        className="border border-td-border bg-td-head px-3 py-1 text-[12px] font-medium text-td-ink hover:bg-td-bg disabled:opacity-40"
      >
        {done ? "Time's up" : timer.running ? "Pause" : "Start"}
      </button>
      <button
        type="button"
        onClick={timer.onReset}
        className="border border-td-border bg-td-surface px-3 py-1 text-[12px] text-td-ink-soft hover:bg-td-bg"
      >
        Reset
      </button>
      <span className="text-[11px] text-td-ink-soft">{label}</span>
      <span className="ml-auto text-[10px] text-td-ink-soft italic">Also on the projector</span>
    </div>
  );
}

function RosterTable({ votes }: { votes: Record<string, string> }) {
  return (
    <table className="w-full border-collapse text-left text-[12px]">
      <thead>
        <tr className="bg-td-head text-[11px] text-td-ink-soft uppercase">
          <th className="border border-td-border px-2 py-1 font-semibold">Student</th>
          <th className="border border-td-border px-2 py-1 font-semibold">Career</th>
          <th className="border border-td-border px-2 py-1 font-semibold">Vote</th>
        </tr>
      </thead>
      <tbody>
        {ROSTER.map((k) => (
          <tr key={k.name}>
            <td className="border border-td-border px-2 py-1">{k.name}</td>
            <td className="border border-td-border px-2 py-1 text-td-ink-soft">{k.career}</td>
            <td className="border border-td-border px-2 py-1">
              {votes[k.name] === "Not yet" ? (
                <span className="text-td-ink-soft italic">Not yet</span>
              ) : (
                votes[k.name]
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function LockButton({ timer }: { timer: TimerState }) {
  const locked = timer.remaining <= 0;
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      <button
        type="button"
        disabled={!locked}
        className="border border-td-border bg-td-head px-3 py-1 text-[12px] font-medium text-td-ink hover:bg-td-bg disabled:opacity-40"
      >
        {locked ? "Votes locked" : "Lock in votes now"}
      </button>
      <button
        type="button"
        onClick={timer.onToggle}
        disabled={locked}
        className="border border-td-border bg-td-surface px-3 py-1 text-[12px] text-td-ink-soft hover:bg-td-bg disabled:opacity-40"
      >
        {timer.running ? "Pause" : "Start auto-lock"}
      </button>
      <button
        type="button"
        onClick={timer.onExtend}
        disabled={locked}
        className="border border-td-border bg-td-surface px-3 py-1 text-[12px] text-td-ink-soft hover:bg-td-bg disabled:opacity-40"
      >
        +30s
      </button>
      <span className="font-display text-[13px] font-bold tabular-nums text-td-ink">
        {formatTime(timer.remaining)}
      </span>
      <span className="ml-auto text-[10px] text-td-ink-soft italic">Also on the projector</span>
    </div>
  );
}

export function TeacherScreen({ beat, timer }: { beat: number; timer: TimerState | null }) {
  switch (beat) {
    case 1:
      return (
        <Shell>
          <Panel title="Roster setup" minutes="1 min, one-time only">
            <p>Status: complete (done before Session 1, never repeated)</p>
            <p className="mt-1 text-td-ink-soft">
              8 students · career quiz completed · tiles assigned
            </p>
            <p className="mt-1 text-td-ink-soft">Class code MINT-42 · expires end of day</p>
          </Panel>
          <Panel title="Join activity">
            <p>6 of 8 joined</p>
            <p className="mt-1 text-td-ink-soft">
              No login screen to walk kids through — if a tile doesn&rsquo;t light up, check
              they&rsquo;re on the class wifi, not their name.
            </p>
          </Panel>
          <Differentiation
            ell="Display the class code visually (already large on screen) and physically point to it — no reading required to join."
            extension="Ask early joiners to predict, from their own tile's career, what kind of money decision they think today's story might involve."
          />
        </Shell>
      );
    case 2:
      return (
        <Shell>
          <Panel title="Recall (private)" minutes="1 min">
            <p>8/8 viewing recall</p>
            <p className="mt-1 text-td-ink-soft">
              Content is per-student and not surfaced here or on the shared screen — this is by
              design, not a missing feature.
            </p>
          </Panel>
          <Panel title="Why this beat is silent">
            <p className="text-td-ink-soft">
              Every kid is reading a one-line callback to their own last decision. Sharing it
              would put one student&rsquo;s money history in front of the room. No action needed
              from you here — just give it a few seconds before continuing.
            </p>
          </Panel>
        </Shell>
      );
    case 3:
      return (
        <Shell>
          <Panel title="Pacing">
            <p>Beat 3 of 15 · on track</p>
            <p className="mt-1 text-td-ink-soft">Elapsed 4:10 · target 45:00</p>
          </Panel>
          <Panel title="Spotlight" minutes="4-5 min, read together">
            <p>Ruby S. (Banker) · rotation 7 of 15</p>
            <p className="mt-1 text-td-ink-soft">
              Read each panel aloud once, then let a volunteer read the next. Click through at
              the class&rsquo;s pace — there&rsquo;s no timer on this beat.
            </p>
          </Panel>
          <Watch>
            Some kids may read this as &ldquo;Ruby is bad with money.&rdquo; Redirect if it comes
            up: everyone feels peer pressure — the skill is noticing it in the moment, which is
            exactly what today&rsquo;s lesson practices.
          </Watch>
        </Shell>
      );
    case 4:
      return (
        <Shell>
          <Panel title="What to explain" minutes="3 min">
            <p>A budget is a plan made before shopping, not decided in the moment.</p>
            <p className="mt-1 text-td-ink-soft">
              Peer pressure can come from ads, friends, even coworkers — anyone who makes a want
              feel urgent right now.
            </p>
          </Panel>
          <Panel title="Question bank — pick 1 or 2">
            <p>
              &ldquo;Has an ad or a friend ever made you want something you didn&rsquo;t plan on
              buying?&rdquo;
            </p>
            <p className="mt-1.5">
              &ldquo;What&rsquo;s the difference between wanting something and having budgeted
              for it?&rdquo;
            </p>
            <p className="mt-1.5">
              &ldquo;Can peer pressure ever push you toward a good decision, not just a bad
              one?&rdquo;
            </p>
          </Panel>
          <Differentiation
            ell="Point to the highlighted vocabulary words as you say them; both stay clickable for students to revisit the definition anytime."
            extension="Ask: can you think of a time an adult in your life felt peer pressure about money, not just a kid your age?"
          />
        </Shell>
      );
    case 5:
      return (
        <Shell>
          <Panel title="Check results" minutes="2 min">
            <p>6 of 8 answered correctly</p>
            <p className="mt-1 text-td-ink-soft">75% · above the reteach threshold (60%)</p>
          </Panel>
          <Panel title="If below 60%">
            <p className="text-td-ink-soft">
              Quickly re-explain using today&rsquo;s ad example before moving on — this session
              is above threshold, so no reteach pass is needed.
            </p>
          </Panel>
          <Watch>
            A common wrong answer is picking &ldquo;you made a shopping list first&rdquo; — some
            kids associate any purchase decision with pressure. Worth a 10-second clarification if
            you see it: planning ahead is the opposite of peer pressure, not an example of it.
          </Watch>
        </Shell>
      );
    case 6:
      return (
        <Shell>
          <Panel title="Timer">
            {timer && <Timer timer={timer} label="pairs assigned automatically" />}
          </Panel>
          <Panel title="While they talk">
            <p className="text-td-ink-soft">
              Circulate and listen for whether kids default to ad examples or friend examples —
              worth naming both during the debrief so no one thinks it&rsquo;s only about ads.
            </p>
          </Panel>
          <Panel title="Suggested debrief">
            <p>After time&rsquo;s up, ask 2&ndash;3 pairs to share out.</p>
            <p className="mt-1 text-td-ink-soft">Listen for: was it an ad, a friend, or both?</p>
          </Panel>
        </Shell>
      );
    case 7:
      return (
        <Shell>
          <Panel title="Decide 1 — responses" minutes="2 min">
            <RosterTable votes={VOTES_1} />
            {timer && <LockButton timer={timer} />}
          </Panel>
        </Shell>
      );
    case 8:
      return (
        <Shell>
          <Panel title="Question bank" minutes="3 min">
            <p>
              To &ldquo;Buy it&rdquo; voters: &ldquo;What made this feel worth it right now?&rdquo;
            </p>
            <p className="mt-1.5">
              To &ldquo;Pass&rdquo; voters: &ldquo;What helped you resist?&rdquo;
            </p>
            <p className="mt-1.5 text-td-ink-soft">
              Follow-up either way: &ldquo;Would your answer change if it cost $50 instead of
              $12?&rdquo;
            </p>
          </Panel>
          <Watch>
            Kids sometimes frame &ldquo;Pass&rdquo; voters as simply having more willpower.
            Reframe if needed: it&rsquo;s less about willpower and more about having decided in
            advance — which is what a budget does for you.
          </Watch>
        </Shell>
      );
    case 9:
      return (
        <Shell>
          <Panel title="Branch" minutes="4 min">
            <p>Branch selected: branch_buy</p>
            <p className="mt-1 text-td-ink-soft">Majority 3–2 · locked 18:20</p>
          </Panel>
          <Panel title="What to point out">
            <p className="text-td-ink-soft">
              This is the payoff moment for the whole lesson: both branches were already written
              before class started. Worth naming out loud once, briefly, that the story
              didn&rsquo;t just react to the vote — it was ready either way.
            </p>
          </Panel>
        </Shell>
      );
    case 10:
      return (
        <Shell>
          <Panel title="Activity 1 monitoring">
            {timer && <Timer timer={timer} label="suggested work time" />}
            <p className="mt-2">Guided practice, 3 steps · Check button grades each one live</p>
            <p className="mt-1 text-td-ink-soft">
              Answer key: Proteins $120 · Fruits &amp; veg $80 · Grains $40.
            </p>
          </Panel>
          <Panel title="Common error">
            <p className="text-td-ink-soft">
              On step 2, kids sometimes pick $60 (just adding, not doubling) instead of $80.
              Worth pointing back to &ldquo;twice as much&rdquo; if that option gets picked.
            </p>
          </Panel>
          <Differentiation
            ell="Read each dollar amount aloud as you write it; the visual pie chart carries most of the meaning independent of the text."
            extension="Ask fast finishers: what would the grocery budget need to be for each category to equal exactly $100?"
          />
        </Shell>
      );
    case 11:
      return (
        <Shell>
          <Panel title="Activity 2 monitoring">
            {timer && <Timer timer={timer} label="suggested work time" />}
            <p className="mt-2">4 bite-sized questions, one at a time · instant feedback</p>
            <p className="mt-1 text-td-ink-soft">
              Answer key, in order: overspend · portion · budget · afford.
            </p>
          </Panel>
          <Panel title="Common error">
            <p className="text-td-ink-soft">
              &ldquo;Prioritize&rdquo; often gets picked on question 1 since it sounds more
              advanced — worth pointing back to the exact wording of the sentence, not just
              vocabulary difficulty.
            </p>
          </Panel>
        </Shell>
      );
    case 12:
      return (
        <Shell>
          <Panel title="Decide 2 — responses" minutes="2 min">
            <RosterTable votes={VOTES_2} />
            {timer && <LockButton timer={timer} />}
          </Panel>
        </Shell>
      );
    case 13:
      return (
        <Shell>
          <Panel title="Reflections" minutes="2 min">
            <p>8/8 reflections submitted</p>
            <p className="mt-1 text-td-ink-soft">
              Spotlight response shared to class screen: Ruby S.
            </p>
          </Panel>
          <Panel title="What to look for">
            <p className="text-td-ink-soft">
              Reflections are private — you won&rsquo;t see individual text here, only submission
              status. If you&rsquo;re circulating the room, listen for whether kids justify their
              answer with a reason, not just a pick.
            </p>
          </Panel>
        </Shell>
      );
    case 14:
      return (
        <Shell>
          <Panel title="Wrap-up script" minutes="3 min">
            <p>
              &ldquo;What&rsquo;s one thing YOU&rsquo;LL do differently next time you see an ad
              for something you want?&rdquo;
            </p>
            <p className="mt-1 text-td-ink-soft">
              Take 2–3 answers, then close. No need to write anything down.
            </p>
          </Panel>
          <Panel title="Exit ticket (optional)">
            <p className="text-td-ink-soft">
              If you have 2 extra minutes: have each kid tell a neighbor one thing they&rsquo;d
              buy on a real budget versus on impulse. No submission needed — just a verbal check.
            </p>
          </Panel>
        </Shell>
      );
    default:
      return (
        <Shell>
          <Panel title="Session status">
            <p>Session 7 of 15 · complete</p>
            <p className="mt-1 text-td-ink-soft">Unit: Spending (3/3) · 8/8 attended</p>
          </Panel>
          <Panel title="Coming up next">
            <p>Session 8 begins Unit: Saving (1/3)</p>
            <p className="mt-1 text-td-ink-soft">
              Generation started — one session ahead only, no further sessions queued.
            </p>
          </Panel>
        </Shell>
      );
  }
}
