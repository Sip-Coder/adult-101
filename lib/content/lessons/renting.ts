import type { Lesson } from "../types";
import { sources } from "../sources";

export const rentingLessons: Lesson[] = [
  {
    slug: "how-a-lease-works",
    title: "How a lease actually works",
    minutes: 7,
    summary:
      "A lease is a contract. It says what you pay, how long you stay, and which promises are real. A nice tour is not the contract.",
    sections: [
      {
        heading: "The paper is the deal",
        paragraphs: [
          "A lease is a contract between you and the landlord. You agree to pay and to follow the rules in the document. The landlord agrees to let you live there for the term and, in many states, to keep the place livable. What livable means, and what you can do if it is not, is state law. A blog cannot settle it for your state. Your state attorney general's consumer page and legal aid can.",
          "The promises that count are the ones written in the lease and its attachments. Please add that to the lease is the sentence to use when a showing includes a verbal offer: parking, a new fridge, a month of free rent, a pet. If it is not in the document you sign, treat it as not agreed.",
        ],
      },
      {
        heading: "The lines to find before you fall in love with the kitchen",
        paragraphs: [
          "Find the names of every party, the address and unit, the rent, the due date, the start date, and the end date. Then find who pays which utilities, the deposit, guest and pet rules, parking, and what it costs to leave early. A fixed term and a month-to-month agreement end differently. The notice period should be a number of days, not whenever.",
          "In many leases, each person who signs can be asked for the full rent, not only their share. That is a common setup. Ask how the landlord treats roommates before you sign. If your name is the only one on the lease, the people you live with may have no direct agreement with the landlord at all.",
        ],
      },
      {
        heading: "Fees, applications, and listings that are not real",
        paragraphs: [
          "Ask what an application fee pays for and whether any part of it comes back. Some states cap these fees. Pay the landlord or the management company the way the listing says, after you have seen the unit. A stranger who wants a wire transfer or a gift card for an apartment you have not walked through is a common scam, even when the photos are real.",
          "The landlord's insurance covers the building. It does not cover your laptop, your bed, or your liability if a guest is hurt. Renters insurance is a separate policy, often required by the lease, and it is its own upcoming topic on this site.",
        ],
      },
      {
        heading: "You are allowed to go slowly",
        paragraphs: [
          "Ask for the lease before you pay a holding deposit, and read it when you are not standing in the unit. A first apartment is a large contract. Taking it home, or sending it to a lawyer for an hour, is a normal request. The advisory team page on this site covers how to make that call without pretending you went to law school.",
          "If the landlord will not let you read the full lease, including the house rules, that is information about the deal. You can walk away.",
        ],
      },
    ],
    checklist: [
      "Get the full lease and every attachment before you pay to hold the unit.",
      "Find rent, dates, utilities, deposit, pets, parking, and the cost of leaving early.",
      "Move any verbal promise into the lease.",
      "Ask how roommates share responsibility for the full rent.",
      "Refuse wire or gift-card payments for a unit you have not seen.",
    ],
    selfCheck: [
      {
        prompt: "The manager says you can have the parking spot, and it is not in the lease. What is the agreement?",
        choices: [
          "You have the spot, because they said it on the tour",
          "You do not have a reliable agreement until it is written into the lease",
          "Parking is always included in rent",
        ],
        answer: 1,
        why: "The signed document is the deal. Ask them to add the spot before you sign.",
      },
      {
        prompt: "Whose insurance replaces your belongings after a fire in a rental?",
        choices: [
          "The landlord's building policy, automatically",
          "Your renters policy, if you have one",
          "The city's policy",
        ],
        answer: 1,
        why: "The landlord's policy covers the building. Your stuff and your liability are a separate policy.",
      },
    ],
    sources: [sources.cfpbRenting, sources.usaStateAg],
  },
  {
    slug: "before-you-sign",
    title: "What to check before you sign",
    minutes: 8,
    summary:
      "A careful hour before you sign is cheaper than a year inside a lease you did not read. Bring a phone charger and some patience.",
    sections: [
      {
        heading: "See the unit you would live in",
        paragraphs: [
          "Walk the actual apartment if you can, not only a model. Run the water, flip the breakers if they let you, test the locks and windows, look under the sink, and check that the heat turns on. Look for stains on the ceiling. They are often a map of an old leak. Check your phone signal. You are about to rely on this place.",
          "Visit at the time of day you would be home. A street that is quiet at noon can be a loading dock at midnight. If you cannot see the unit, ask why, and be slow with your money.",
        ],
      },
      {
        heading: "Read for the sentences that move money",
        paragraphs: [
          "Watch for rent that can rise during the term, fees described only as as the landlord decides, and repair language that makes you responsible for appliances the landlord owns. Ask for the total you will pay on day one: first rent, last rent, deposit, and every fee. The total is the number that has to be in your account.",
          "Some leases include clauses about lawsuits, jury trials, or extra fees that may or may not be enforceable where you live. Do not assume a clause is harmless because it looks like boilerplate, and do not assume you can ignore it because a friend said courts throw those out. If the rent is high or a paragraph makes no sense, that is a good reason to pay a lawyer for an hour. Legal aid is there if you cannot afford a private lawyer.",
        ],
      },
      {
        heading: "Document the place on day one",
        paragraphs: [
          "On move-in day, walk through with a written list and photos. Photograph each wall, the floors, the appliances, and anything already broken. Send the list to the landlord and keep a copy in your own email. Those photos are how a security deposit comes home later.",
          "If something is broken, write it on the move-in report with a date you expect it fixed. A promise to handle it next week is easier to remember, and easier to prove, when the date is in the email.",
        ],
      },
      {
        heading: "Questions that are not rude",
        paragraphs: [
          "What is the total due before I get keys? How do I report a repair, and how fast do emergencies get answered? Where is the deposit held, if this state requires a separate account? What does move-out have to look like for me to get the deposit back? Who do I call after hours?",
          "You are about to send this person a large share of your paycheck every month. Clear questions are part of being a good tenant, not a difficult one.",
        ],
      },
    ],
    checklist: [
      "Walk the actual unit and test water, locks, windows, and heat.",
      "Add up every dollar due before you get the keys.",
      "Read the attachments, not only the first page.",
      "Photograph the unit on move-in day and email yourself the photos.",
      "Write broken items and repair dates into the move-in report.",
    ],
    selfCheck: [
      {
        prompt: "Why do move-in photos matter?",
        choices: [
          "Landlords require them for the application",
          "They are your record of what was already worn or broken when you arrived",
          "They replace the lease",
        ],
        answer: 1,
        why: "Deposit disputes are about the difference between move-in and move-out. Photos plus a written list are that difference.",
      },
      {
        prompt: "A paragraph in the lease is confusing and the rent is a large share of your pay. A reasonable next step is:",
        choices: [
          "Sign anyway, because every lease says that",
          "Ask a lawyer or legal aid to explain that paragraph before you sign",
          "Cross it out in pen without telling the landlord",
        ],
        answer: 1,
        why: "A one-hour review is ordinary for a contract this large. Silent edits do not change a contract the other side did not agree to.",
      },
    ],
    sources: [sources.cfpbRenting, sources.usaLegalAid, sources.usaStateAg],
  },
  {
    slug: "deposits-and-move-out",
    title: "Deposits, repairs, and moving out",
    minutes: 7,
    summary:
      "The deposit comes back when you can show the place's condition and you follow the lease on the way out. State law sets the clock.",
    sections: [
      {
        heading: "Learn your state's deposit clock before you need it",
        paragraphs: [
          "States differ on how large a deposit can be, where it has to sit, how many days the landlord has to return it, and what counts as damage versus ordinary wear. Look this up for your state while you still live there. Your state attorney general's consumer page is the usual starting point. The deadline is much harder to use after it has passed and you are guessing.",
          "Give a forwarding address in writing. In many states the return clock is tied to the landlord having both the keys and an address to send the money.",
        ],
      },
      {
        heading: "Move out the way the lease describes",
        paragraphs: [
          "Photograph the empty unit from the same angles as move-in. Clean to the standard the lease names. Return every key, fob, and garage remote the way the lease says, and get a receipt or a dated email. A key left on the counter is an argument about whether you moved out.",
          "Normal wear is faded paint and the kind of scuff a year of walking makes. Damage is a broken door, a hole in the wall, or a stain the size of a piece of furniture. The line between them is state law and the lease, not a landlord's taste. If money is kept, ask for an itemized list in writing and compare it to your photos.",
        ],
      },
      {
        heading: "Repairs while you live there",
        paragraphs: [
          "Report repairs in writing. Email is fine if that is how the office works. Include the date, what is wrong, and a photo. Keep the thread. A sticky drawer and a ceiling leak are not the same kind of urgency. Say which one you are reporting.",
          "Many states require a landlord to keep a place fit to live in: water, heat, weatherproofing, and working sanitation are the usual core. The remedy if they do not is also state law. Some states allow a careful repair-and-deduct or rent withholding process. Some do not. Do not withhold rent because a stranger on the internet said tenants can. Withholding the wrong way can become an eviction case. Read your state's steps, or ask legal aid, before you change what you pay.",
        ],
      },
      {
        heading: "Your stuff is a different claim from the building",
        paragraphs: [
          "If a pipe soaks your mattress, the landlord may be responsible for the pipe and you may be responsible for claiming the mattress on renters insurance. Those are two tracks. Report the leak in writing so there is a record, and call your insurer if you have a policy.",
          "A deeper course on renters insurance is still coming on Adult 101. Until then, read the declarations page of any policy the lease requires so you know the deductible before something breaks.",
        ],
      },
    ],
    checklist: [
      "Look up your state's deposit deadline and wear-and-tear rules before move-out.",
      "Photograph the empty unit and return keys with a receipt.",
      "Leave a forwarding address in writing.",
      "Report repairs in writing and keep the thread.",
      "Do not withhold rent until you have read your state's actual rule or talked with legal aid.",
    ],
    selfCheck: [
      {
        prompt: "You want the deposit back. Which pair of records matters most?",
        choices: [
          "Move-in photos and move-out photos, plus proof you returned the keys",
          "A text that says the place was nice",
          "The original listing photos",
        ],
        answer: 0,
        why: "The comparison between arrival and departure, and proof of when you surrendered the unit, is what a deposit dispute is about.",
      },
      {
        prompt: "The heat is out and a blog says to stop paying rent. What do you do?",
        choices: [
          "Stop paying immediately so the landlord feels it",
          "Report it in writing, then follow your state's required steps or ask legal aid before you change the rent",
          "Wait until the lease ends",
        ],
        answer: 1,
        why: "Habitability rules are real, and so is the risk of withholding rent the wrong way. The steps are specific to your state.",
      },
    ],
    sources: [sources.cfpbRenting, sources.usaStateAg, sources.usaLegalAid],
  },
];
