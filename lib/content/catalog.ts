import { businessLessons } from "./lessons/business";
import { budgetingLessons } from "./lessons/budgeting";
import { carInsuranceLessons } from "./lessons/car-insurance";
import { estateLessons } from "./lessons/estate";
import { rentingLessons } from "./lessons/renting";
import type { Lesson, Pillar, Topic } from "./types";

function soon(
  slug: string,
  title: string,
  summary: string,
  placementNote?: string,
): Topic {
  return { slug, title, summary, status: "coming-soon", placementNote, lessons: [] };
}

function ready(slug: string, title: string, summary: string, lessons: Lesson[]): Topic {
  return { slug, title, summary, status: "ready", lessons };
}

export const pillars: Pillar[] = [
  {
    slug: "personal-health",
    number: "01",
    title: "Personal Health",
    tagline: "Money, home, and a way to get around",
    summary:
      "Running your own day-to-day life: the paycheck, the place you live, the car, and the repairs that show up anyway.",
    groups: [
      {
        title: "Money",
        topics: [
          ready(
            "budgeting",
            "Budgeting and money management",
            "A monthly plan built from take-home pay, due dates, and a small cushion.",
            budgetingLessons,
          ),
          soon(
            "paying-bills",
            "Paying bills",
            "A fuller course on due dates, hardship plans, and what to do when a bill wins. Autopay basics already live inside Budgeting.",
          ),
          soon(
            "banking",
            "Banking",
            "Checking, savings, fees, and how to read the account you already have.",
          ),
          soon(
            "credit",
            "Credit",
            "Credit reports, scores, and how a card actually works when the bill arrives.",
          ),
          soon(
            "student-loans",
            "Student loans",
            "Servicers, repayment plans, and the questions to ask before you refinance.",
          ),
          soon(
            "taxes",
            "Taxes",
            "A first pass at withholding, filing, and refunds for a W-2 life.",
            "Open question: taxes might stay here, move to Professional Health, or split. This card is a placeholder until that is decided.",
          ),
          soon(
            "investing",
            "Investing",
            "What a retirement account is, and what to ignore until a cushion exists.",
          ),
        ],
      },
      {
        title: "Housing",
        topics: [
          ready(
            "renting",
            "Renting",
            "Leases, the walkthrough before you sign, deposits, and repairs.",
            rentingLessons,
          ),
          soon(
            "renters-insurance",
            "Renters insurance",
            "What the landlord's policy does not cover, and how a deductible works on your stuff.",
          ),
          soon(
            "buying-a-home",
            "Buying a first home",
            "The path from looking to keys, including who works for whom.",
          ),
          soon(
            "mortgages",
            "Mortgages",
            "Rates, Loan Estimates, and why the payment is more than the rate.",
          ),
          soon(
            "property-insurance",
            "Property insurance",
            "Homeowners and hazard coverage, in plain language.",
          ),
          soon("hoas", "HOAs", "What an association can require, and the dues that are not optional."),
          soon(
            "utilities",
            "Utilities",
            "Setting up power, water, and internet, and whose name is on the bill.",
          ),
        ],
      },
      {
        title: "Vehicles",
        topics: [
          soon(
            "buying-vs-leasing",
            "Buying vs. leasing",
            "The real cost of each, past the monthly number in the ad.",
          ),
          soon(
            "car-loans",
            "Car loans",
            "How a car loan is priced, and what happens if you need to get out of it.",
          ),
          ready(
            "car-insurance",
            "Car insurance",
            "The coverage words, how to compare quotes, and the first hour after a crash.",
            carInsuranceLessons,
          ),
          soon(
            "car-maintenance",
            "Maintenance",
            "The service that prevents the expensive repair, and how to talk to a shop.",
          ),
          soon(
            "dmv-registration",
            "DMV and registration",
            "Titles, registration, and the appointment you cannot skip.",
          ),
          soon(
            "after-an-accident",
            "What to do after an accident",
            "A longer course on police reports, repairs, and injuries. The first-hour version is in Car insurance.",
          ),
        ],
      },
      {
        title: "Upkeep",
        topics: [
          soon(
            "home-and-car-repairs",
            "Home and car repairs",
            "How to describe a problem, get a written estimate, and decide what can wait.",
          ),
        ],
      },
    ],
  },
  {
    slug: "mental-health",
    number: "02",
    title: "Mental Health",
    tagline: "Staying steady when life gets loud",
    summary:
      "How to stay functional when money or a crisis is the thing keeping you up. This pillar is still thin. More topics belong here, and the owner has not written them yet.",
    groups: [
      {
        title: "When money stress hits",
        topics: [
          soon(
            "financial-emergencies",
            "Financial emergencies",
            "A lost job, a surprise medical bill, and the first week of decisions that do not have to be perfect.",
            "Open question: this might belong under Personal Health (the money) instead of Mental Health (the stress). It stays here until that is decided.",
          ),
        ],
      },
    ],
  },
  {
    slug: "family-health",
    number: "03",
    title: "Family Health",
    tagline: "Protecting the people you build a life with",
    summary:
      "The documents and decisions that show up around partnership, separation, and the question of who speaks for you.",
    groups: [
      {
        title: "Partnerships and endings",
        topics: [
          soon(
            "prenups",
            "Prenups",
            "What a prenuptial agreement can cover, and when a lawyer for each person matters.",
          ),
          soon(
            "divorce-basics",
            "Divorce basics",
            "The vocabulary of a divorce, and which questions are legal advice in disguise.",
          ),
        ],
      },
      {
        title: "If something happens to you",
        topics: [
          ready(
            "wills-and-trusts",
            "Wills, trusts, and estate planning",
            "Wills, beneficiary forms, powers of attorney, and when a trust is actually the tool.",
            estateLessons,
          ),
        ],
      },
    ],
  },
  {
    slug: "social-health",
    number: "04",
    title: "Social Health",
    tagline: "Agreements and disputes with other people",
    summary:
      "How to read a promise you are about to make, and what to do when someone does not keep one. This pillar is still thin and may gain topics, or lose these two to Personal Health.",
    groups: [
      {
        title: "With other people",
        topics: [
          soon(
            "contracts-and-leases",
            "Contracts and leases",
            "How to read an agreement that is not a residential lease: freelance work, roommates, and deposits.",
            "Open question: this might fit Personal Health (your own legal basics) better than Social Health. Leases for housing already have a starter course under Renting.",
          ),
          soon(
            "small-claims",
            "Small claims court and knowing your rights",
            "When a small dollar dispute belongs in small claims, and what that court will not do.",
            "Open question: same placement question as contracts. It stays under Social Health until the owner decides.",
          ),
        ],
      },
    ],
  },
  {
    slug: "professional-health",
    number: "05",
    title: "Professional Health",
    tagline: "Work, and building something of your own",
    summary:
      "Starting something people pay you for, and the licenses, records, and tax habits that keep it from becoming a mess.",
    groups: [
      {
        title: "Starting",
        topics: [
          ready(
            "starting-a-business",
            "Starting a business",
            "A real offer, getting paid, a separate account, an EIN, and the first records.",
            businessLessons,
          ),
          soon(
            "business-structures",
            "Business structures",
            "Sole prop, LLC, partnership, and corporation, with the liability and tax questions separated. A first pass lives in Starting a business.",
          ),
          soon(
            "licenses-permits-eins",
            "Licenses, permits, and EINs",
            "A deeper city-and-state checklist. The free EIN and the first license search are already in Starting a business.",
          ),
        ],
      },
      {
        title: "The money side of the work",
        topics: [
          soon(
            "side-hustle-taxes",
            "Side hustle and freelance taxes",
            "Estimated taxes, self-employment tax, and what to hand a preparer.",
            "Open question: this may merge with the Personal Health taxes course or stay separate.",
          ),
          soon(
            "bookkeeping",
            "Bookkeeping",
            "A simple set of books you can keep yourself until a CPA tells you to stop.",
          ),
        ],
      },
    ],
  },
];

export const starterPath = [
  "what-a-budget-is",
  "before-you-sign",
  "what-the-coverage-words-mean",
  "wills-beneficiaries-and-powers-of-attorney",
  "an-offer-people-pay-for",
] as const;

export type LessonLocation = {
  pillar: Pillar;
  topic: Topic;
  lesson: Lesson;
  index: number;
};

export function allTopics(): { pillar: Pillar; topic: Topic }[] {
  return pillars.flatMap((pillar) =>
    pillar.groups.flatMap((group) => group.topics.map((topic) => ({ pillar, topic }))),
  );
}

export function readyLessons(): LessonLocation[] {
  const found: LessonLocation[] = [];
  for (const { pillar, topic } of allTopics()) {
    topic.lessons.forEach((lesson, index) => {
      found.push({ pillar, topic, lesson, index });
    });
  }
  return found;
}

export function getPillar(slug: string): Pillar | undefined {
  return pillars.find((pillar) => pillar.slug === slug);
}

export function getTopic(slug: string): { pillar: Pillar; topic: Topic } | undefined {
  return allTopics().find((entry) => entry.topic.slug === slug);
}

export function getLesson(slug: string): LessonLocation | undefined {
  return readyLessons().find((entry) => entry.lesson.slug === slug);
}

export function neighborLessons(slug: string): {
  previous?: LessonLocation;
  next?: LessonLocation;
} {
  const current = getLesson(slug);
  if (!current) return {};
  const siblings = current.topic.lessons;
  const previous = siblings[current.index - 1];
  const next = siblings[current.index + 1];
  return {
    previous: previous ? getLesson(previous.slug) : undefined,
    next: next ? getLesson(next.slug) : undefined,
  };
}

export function topicMinutes(topic: Topic): number {
  return topic.lessons.reduce((sum, lesson) => sum + lesson.minutes, 0);
}
