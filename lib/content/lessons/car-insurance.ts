import type { Lesson } from "../types";
import { sources } from "../sources";

export const carInsuranceLessons: Lesson[] = [
  {
    slug: "what-the-coverage-words-mean",
    title: "What the coverage words mean",
    minutes: 8,
    summary:
      "Car insurance is a stack of promises with dollar limits. The words on the declarations page are the product. Full coverage is not one of them.",
    sections: [
      {
        heading: "Liability pays other people",
        paragraphs: [
          "Liability coverage pays other people when you cause a crash: their medical bills, their lost wages, and their car. Most states require a minimum amount. That minimum is a legal floor. It is often far below the cost of a hospital stay or a newer car. If the damages are higher than your limit, the rest can be your problem.",
          "You will see two kinds of numbers, often written like 25/50/25. The first is the most the policy pays for one injured person, the second is the most for all injured people in one crash, and the third is the most for property damage. Your state sets the floor. The National Association of Insurance Commissioners and your state insurance department publish consumer explanations of those floors. Read yours. A number that was enough for a 1998 sedan is a weak promise next to a 2024 car.",
        ],
      },
      {
        heading: "Collision, comprehensive, and the deductible",
        paragraphs: [
          "Collision helps pay for your car when it hits a car or an object, regardless of who was at fault, minus your deductible. Comprehensive helps pay for theft, fire, hail, flood, vandalism, or an animal. Comprehensive is not a fancier word for collision. They are different promises.",
          "The deductible is the part you pay before the policy pays on those coverages. A higher deductible usually lowers the premium and raises the cash you need on the day something happens. Pick a deductible you could actually pay on a bad Tuesday. If a lender or a lease owns the car, they usually require collision and comprehensive until you pay it off.",
        ],
      },
      {
        heading: "The other driver, and your own medical bills",
        paragraphs: [
          "Uninsured and underinsured motorist coverage helps when the other driver has no insurance or too little. Whether you want it, and whether the state pushes it, varies widely. Ask for it by name when you shop so a cheap quote is not cheap because this piece is missing.",
          "Medical payments coverage and personal injury protection help with medical bills for you and your passengers. Some states require a form of this. Some leave it optional. The name on the policy in your state matters more than the nickname a cousin used in another state.",
        ],
      },
      {
        heading: "Shop the same promise",
        paragraphs: [
          "Full coverage is a sales phrase. It usually means liability plus collision plus comprehensive, and it still has limits, deductibles, and exclusions. Ask for the declarations page, the one-page summary of cars, drivers, limits, and deductibles. Compare quotes only when those numbers match.",
          "Price is allowed to be a reason you pick a company. Price is a bad reason if the quote quietly cut a limit in half. Your state insurance department is also where you complain if a company will not pay a valid claim. Keep that site bookmarked before you need it.",
        ],
      },
    ],
    checklist: [
      "Read your state's minimum liability numbers, then decide whether the minimum is enough for you.",
      "Know which number is your collision deductible and whether you could pay it this month.",
      "Ask whether uninsured motorist coverage is on the quote.",
      "Compare quotes with the same limits and deductibles.",
      "Save the declarations page, not only the advertisement.",
    ],
    selfCheck: [
      {
        prompt: "Comprehensive coverage is the part that helps pay for:",
        choices: [
          "A crash with another car",
          "Theft, hail, flood, or hitting a deer",
          "Every possible loss, with no limit",
        ],
        answer: 1,
        why: "Comprehensive is the non-collision promise. Collision is the crash promise. Neither one is unlimited.",
      },
      {
        prompt: "Two quotes differ by $40 a month. What do you check before you call the cheaper one a better deal?",
        choices: [
          "Only the monthly price",
          "Whether the limits, deductibles, and listed drivers match",
          "The color of the insurance app",
        ],
        answer: 1,
        why: "A lower price on a smaller promise is a different product. Match the declarations before you compare.",
      },
    ],
    sources: [sources.naicAuto, sources.naicDepartments, sources.cfpbAutoLoans],
  },
  {
    slug: "after-a-crash",
    title: "After a crash: the first calls",
    minutes: 7,
    summary:
      "Safety first, then facts, then your own insurer. You can describe what you saw without guessing a legal conclusion.",
    sections: [
      {
        heading: "Get safe, then get help",
        paragraphs: [
          "Turn on the hazard lights. If the cars can move and nobody is hurt, moving out of the lane can be the safer choice. If anyone is hurt, if the cars are not drivable, or if your state requires a police report above a certain damage amount, call 911. Do not stand in a live lane to have an argument.",
          "Medical care comes before the paperwork. Adrenaline hides injuries. If something hurts, say so at the scene and get it checked. Your health is not a bargaining chip in the claim.",
        ],
      },
      {
        heading: "Collect facts, not a confession",
        paragraphs: [
          "Exchange names, phone numbers, insurance companies, policy numbers, license plate numbers, and driver's license numbers. Photograph both cars, the road, the signals, and the other person's documents. Photograph your own injuries for your records if you have them. Get the names of witnesses.",
          "You can describe what you saw. You do not have to announce a legal conclusion on the shoulder of the road. I want to stick to what I saw is a complete sentence. Apologies and guesses get repeated later in ways you did not mean.",
        ],
      },
      {
        heading: "Call your insurer, even if you think it was not your fault",
        paragraphs: [
          "Policies usually require you to report a crash promptly. Ask your insurer what prompt means in your contract, and report anyway rather than waiting to see whether the other driver handles it. Ask for a claim number and the name of the person you spoke with. Write down the date.",
          "If someone wants a recorded statement and you are unsure, you can ask what the question list is and whether you can get a copy of what you say. Stick to facts: where you were, your speed, what you saw, whether you were hurt. Guessing fault is not a fact. A lawyer is appropriate if someone was badly hurt, if you are being sued, or if the insurer's questions feel like a trap. That is a normal time to hire one, not a dramatic time.",
        ],
      },
      {
        heading: "Repairs, rentals, and a stalled claim",
        paragraphs: [
          "A rental car is its own coverage. Do not assume the policy includes it. Ask before you book a week of car you will pay for yourself. Get repair estimates the way the insurer instructs, and keep every receipt.",
          "If the claim stalls or the offer ignores the damage you can document, your state department of insurance takes complaints. The NAIC keeps the directory. A complaint is a process, not a scene. Bring the claim number, the dates, and the photos.",
        ],
      },
    ],
    checklist: [
      "Move to safety and call 911 when anyone is hurt or the law requires a report.",
      "Exchange insurance details and photograph the cars, the road, and the documents.",
      "Report the crash to your own insurer and get a claim number.",
      "Describe what you saw, and leave legal conclusions for later.",
      "Ask whether a rental is covered before you reserve one.",
    ],
    selfCheck: [
      {
        prompt: "You think the other driver caused the crash. Who do you still call?",
        choices: [
          "Only the other driver's insurer",
          "Your own insurer, promptly, plus 911 if anyone is hurt",
          "Nobody, until you see a repair bill",
        ],
        answer: 1,
        why: "Your policy almost certainly requires notice to your own company. Waiting can become its own problem, separate from who was at fault.",
      },
      {
        prompt: "On a recorded call, a useful answer sounds like:",
        choices: [
          "It was totally my fault, I always do this",
          "I was in the right lane, the light was green for me, and I felt the hit on the rear bumper",
          "No comment, I refuse to describe the crash at all",
        ],
        answer: 1,
        why: "Facts help the claim. A guessed confession and a total refusal both create trouble. You can also ask for a copy of a recorded statement.",
      },
    ],
    sources: [sources.naicAuto, sources.naicDepartments],
  },
];
