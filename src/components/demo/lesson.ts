export type Kid = { name: string; career: string; icon: string };

export const ROSTER: Kid[] = [
  { name: "Jordan M.", career: "Realtor", icon: "🏠" },
  { name: "Maya T.", career: "Doctor", icon: "🩺" },
  { name: "Diego R.", career: "Builder", icon: "🔨" },
  { name: "Liam O.", career: "Firefighter", icon: "🚒" },
  { name: "Sofia N.", career: "Chef", icon: "🍳" },
  { name: "Kai P.", career: "Baker", icon: "🥐" },
  { name: "Noah B.", career: "Hair Stylist", icon: "✂️" },
  { name: "Ruby S.", career: "Banker", icon: "🏦" },
];

export const BEATS = [
  { n: 1, label: "Join", note: "Class code on the board, kids tap their tile" },
  { n: 2, label: "Recall", note: "Private on each device — nothing shared" },
  { n: 3, label: "Story", note: "Ruby's spotlight story, read together" },
  { n: 4, label: "Decide 1", note: "Private tap, shared tally" },
  { n: 5, label: "Branch", note: "The class choice plays out" },
  { n: 6, label: "Activity", note: "Class-interactive budget table" },
  { n: 7, label: "Decide 2", note: "Cash today or IOU next week" },
  { n: 8, label: "Reflect", note: "Ruby's answer becomes a shared moment" },
  { n: 9, label: "Summary", note: "Recap and wrap up" },
] as const;

export const VOTES_1: Record<string, "Buy it" | "Pass" | "Not yet"> = {
  "Jordan M.": "Buy it",
  "Maya T.": "Pass",
  "Diego R.": "Buy it",
  "Liam O.": "Pass",
  "Sofia N.": "Not yet",
  "Kai P.": "Not yet",
  "Noah B.": "Not yet",
  "Ruby S.": "Buy it",
};

export const VOTES_2: Record<string, "Cash today" | "IOU" | "Not yet"> = {
  "Jordan M.": "Cash today",
  "Maya T.": "Cash today",
  "Diego R.": "IOU",
  "Liam O.": "Not yet",
  "Sofia N.": "Cash today",
  "Kai P.": "IOU",
  "Noah B.": "Not yet",
  "Ruby S.": "Cash today",
};
