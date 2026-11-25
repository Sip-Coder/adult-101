export type Source = {
  label: string;
  href: string;
};

export type LessonSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SelfCheck = {
  prompt: string;
  choices: string[];
  answer: number;
  why: string;
};

export type Lesson = {
  slug: string;
  title: string;
  minutes: number;
  summary: string;
  sections: LessonSection[];
  checklist: string[];
  selfCheck: SelfCheck[];
  sources: Source[];
};

export type Topic = {
  slug: string;
  title: string;
  summary: string;
  status: "ready" | "coming-soon";
  /** Set when the owner has not settled which pillar this topic belongs in. */
  placementNote?: string;
  lessons: Lesson[];
};

export type TopicGroup = {
  title: string;
  topics: Topic[];
};

export type Pillar = {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  summary: string;
  groups: TopicGroup[];
};

export type Advisor = {
  slug: string;
  role: string;
  helpsWith: string;
  find: string[];
  bring: string[];
  ask: string[];
  fees: string;
  approach: string;
  sources: Source[];
};
