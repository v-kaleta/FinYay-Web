import { ROSTER, VOTES_1, VOTES_2 } from "./lesson";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full min-h-[420px] flex-col gap-3 bg-td-bg p-4 font-admin text-[13px] text-td-ink">
      <div className="flex items-center justify-between border-b border-td-border pb-2 text-[11px] text-td-ink-soft">
        <span>Spending · Session 3/3 · Session 7 of 15</span>
        <span>Room 12 · Ms. Alvarez</span>
      </div>
      {children}
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-td-border bg-td-surface">
      <div className="border-b border-td-border bg-td-head px-3 py-1.5 text-[11px] font-semibold tracking-wide text-td-ink-soft uppercase">
        {title}
      </div>
      <div className="p-3">{children}</div>
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

function LockButton() {
  return (
    <div className="mt-3 flex items-center gap-2">
      <button
        type="button"
        className="border border-td-border bg-td-head px-3 py-1 text-[12px] font-medium text-td-ink hover:bg-td-bg"
      >
        Lock in votes
      </button>
      <button
        type="button"
        className="border border-td-border bg-td-surface px-3 py-1 text-[12px] text-td-ink-soft hover:bg-td-bg"
      >
        Extend time
      </button>
      <span className="text-[11px] text-td-ink-soft">Auto-lock in 0:45</span>
    </div>
  );
}

export function TeacherScreen({ beat }: { beat: number }) {
  switch (beat) {
    case 1:
      return (
        <Shell>
          <Panel title="Roster setup">
            <p>Status: complete (one-time, before Session 1)</p>
            <p className="mt-1 text-td-ink-soft">
              8 students · career quiz completed · tiles assigned
            </p>
            <p className="mt-1 text-td-ink-soft">Class code MINT-42 · expires end of day</p>
          </Panel>
          <Panel title="Join activity">
            <p>6 of 8 joined</p>
          </Panel>
        </Shell>
      );
    case 2:
      return (
        <Shell>
          <Panel title="Recall (private)">
            <p>8/8 viewing recall</p>
            <p className="mt-1 text-td-ink-soft">
              Content is per-student and not surfaced here or on the shared screen.
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
          <Panel title="Spotlight">
            <p>Ruby S. (Banker) · rotation 7 of 15</p>
          </Panel>
        </Shell>
      );
    case 4:
      return (
        <Shell>
          <Panel title="What to explain">
            <p>A budget is a plan made before shopping, not decided in the moment.</p>
            <p className="mt-1 text-td-ink-soft">
              Peer pressure can come from ads, friends, even coworkers — anyone who makes a want
              feel urgent.
            </p>
          </Panel>
          <Panel title="Suggested question">
            <p>
              &ldquo;Has an ad or a friend ever made you want something you didn&rsquo;t plan on
              buying?&rdquo;
            </p>
          </Panel>
        </Shell>
      );
    case 5:
      return (
        <Shell>
          <Panel title="Check results">
            <p>6 of 8 answered correctly</p>
            <p className="mt-1 text-td-ink-soft">75% · above the reteach threshold (60%)</p>
          </Panel>
          <Panel title="If below 60%">
            <p className="text-td-ink-soft">
              Quickly re-explain using today&rsquo;s ad example before moving on. Not needed this
              session.
            </p>
          </Panel>
        </Shell>
      );
    case 6:
      return (
        <Shell>
          <Panel title="Timer">
            <p>60 seconds · pairs assigned automatically</p>
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
          <Panel title="Decide 1 — responses">
            <RosterTable votes={VOTES_1} />
            <LockButton />
          </Panel>
        </Shell>
      );
    case 8:
      return (
        <Shell>
          <Panel title="Suggested questions">
            <p>Ask the &ldquo;Buy it&rdquo; voters: what made this feel worth it right now?</p>
            <p className="mt-1 text-td-ink-soft">
              Ask the &ldquo;Pass&rdquo; voters: what helped you resist?
            </p>
          </Panel>
        </Shell>
      );
    case 9:
      return (
        <Shell>
          <Panel title="Branch">
            <p>Branch selected: branch_buy</p>
            <p className="mt-1 text-td-ink-soft">Majority 3–2 · locked 18:20</p>
          </Panel>
        </Shell>
      );
    case 10:
      return (
        <Shell>
          <Panel title="Activity 1 monitoring">
            <p>Class-interactive · no per-student input expected</p>
            <p className="mt-1 text-td-ink-soft">
              Devices idle. Answer key: Fruits &amp; veg $84 · Grains $48.
            </p>
          </Panel>
        </Shell>
      );
    case 11:
      return (
        <Shell>
          <Panel title="Activity 2 monitoring">
            <p>Class-interactive · no per-student input expected</p>
            <p className="mt-1 text-td-ink-soft">Answer key: &ldquo;overspend.&rdquo;</p>
          </Panel>
        </Shell>
      );
    case 12:
      return (
        <Shell>
          <Panel title="Decide 2 — responses">
            <RosterTable votes={VOTES_2} />
            <LockButton />
          </Panel>
        </Shell>
      );
    case 13:
      return (
        <Shell>
          <Panel title="Reflections">
            <p>8/8 reflections submitted</p>
            <p className="mt-1 text-td-ink-soft">
              Spotlight response shared to class screen: Ruby S.
            </p>
          </Panel>
        </Shell>
      );
    case 14:
      return (
        <Shell>
          <Panel title="Wrap-up script">
            <p>
              &ldquo;What&rsquo;s one thing YOU&rsquo;LL do differently next time you see an ad
              for something you want?&rdquo;
            </p>
            <p className="mt-1 text-td-ink-soft">
              Take 2–3 answers, then close. No need to write anything down.
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
          <Panel title="Generation queue">
            <p>Session 8 generation started</p>
            <p className="mt-1 text-td-ink-soft">
              One session ahead only. No further sessions queued.
            </p>
          </Panel>
        </Shell>
      );
  }
}
