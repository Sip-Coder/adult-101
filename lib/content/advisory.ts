import type { Advisor } from "./types";
import { sources } from "./sources";

export const advisors: Advisor[] = [
  {
    slug: "attorney",
    role: "Attorney",
    helpsWith:
      "Contracts, leases, prenups, wills, trusts, and disputes. You hire them before you sign something large or after a problem has a deadline.",
    find: [
      "Start with your state bar's lawyer referral service. The American Bar Association keeps a directory of those services.",
      "If you cannot afford a private lawyer, start with USA.gov's legal aid page. It points to the Legal Services Corporation and to LawHelp.org for your state. Legal aid is a real law office with income limits, not a lesser version of advice.",
      "For a will or trust, ask whether the lawyer practices estate planning in your state. A lawyer licensed somewhere else cannot sign off on your state's formalities.",
      "Ask friends for a name, then still check the state bar to confirm the license is active.",
    ],
    bring: [
      "The document, the dates, and what you want to happen. You do not need legal vocabulary.",
      "A timeline of one page if the story is a dispute. Who said what, and when.",
      "Your questions written down. The meeting goes further when you are not reconstructing them from memory.",
    ],
    ask: [
      "What do you charge for a first meeting, and what does that meeting cover?",
      "Do you handle this kind of problem in this state?",
      "What is the likely range of cost, and what would make it cost more?",
      "What should I do, and not do, before we talk again?",
    ],
    fees: "Lawyers charge a flat fee, an hourly rate, or, in some cases, a share of a recovery. A first call is sometimes free and sometimes a paid consult. Ask the price before you tell the whole story. A written fee agreement is normal. You can say you need to think about it.",
    approach:
      "You are the client. They work for you. Open with: I'm new to this and I want to understand my options before I decide. You are allowed to stop them and ask for a plain-language version. A lawyer who is impatient with that question is giving you information about the working relationship.",
    sources: [sources.cfpbFindAttorney, sources.usaLegalAid, sources.lscHelp],
  },
  {
    slug: "cpa",
    role: "CPA",
    helpsWith:
      "Taxes, side-hustle income, and the books of a small business. A CPA is a licensed accountant. An enrolled agent is licensed by the IRS to represent people on tax matters. Either one can prepare a return. They are not financial planners unless they also hold that credential.",
    find: [
      "The IRS explains the difference between a CPA, an enrolled agent, a lawyer, and an unenrolled preparer. Read that page before you hire the cheapest ad.",
      "Ask for the person's Preparer Tax Identification Number. Paid preparers sign the return with it.",
      "A referral from someone with a return like yours (a W-2 plus a side hustle, or a new sole prop) is more useful than a referral from a business ten times your size.",
    ],
    bring: [
      "Last year's return, if you have one.",
      "Income forms: W-2s, 1099s, and a total of side income if the forms are not in yet.",
      "A simple list of business expenses if you have them. Categories are enough. A shoebox of receipts with a spreadsheet on top is a kindness.",
      "Your questions, including I don't know what I owe.",
    ],
    ask: [
      "Is this a flat fee or hourly, and what is included?",
      "Will you sign the return, and will you help if the IRS writes later?",
      "Should I be paying estimated taxes, and will you tell me the amount?",
      "What records do you want me to keep next year so this is easier?",
    ],
    fees: "A simple return is often a flat fee. Planning, a messy first business year, or a letter from the IRS is often hourly. Get the fee before you send the documents. The preparer should never ask you to sign a blank return or to have the refund deposited into their account.",
    approach:
      "I have a side hustle and I don't know what I owe is a complete opening sentence. You are not supposed to arrive with the return finished. You are supposed to arrive with honest numbers. If you do not understand a line, ask them to explain it before you sign.",
    sources: [sources.irsChoosePreparer, sources.irsSelfEmployed],
  },
  {
    slug: "cfp",
    role: "CFP",
    helpsWith:
      "A plan for budgeting, debt, insurance gaps, investing, and big purchases. CFP means Certified Financial Planner. The credential is not the same as a CPA, and it is not required to call yourself a financial advisor. Verify the letters.",
    find: [
      "Look the person up on the CFP Board's verify tool. Confirm the certification is current.",
      "Ask how they are paid before you book: fee-only, commission, or both. Fee-only means you pay them, not a company whose product they sell. Commission means they may be paid when you buy a product. Neither label makes someone honest or dishonest. You should hear the label clearly.",
      "You can meet a planner before you have a lot of money. Say that when you write to them. Some planners have minimums. A no is useful. It is not a verdict on you.",
    ],
    bring: [
      "Your monthly plan, even a rough one.",
      "A list of debts with balances, rates, and minimums.",
      "Account statements, or a one-page list of accounts and rough balances.",
      "The decision you are actually trying to make. I don't know where to start is allowed.",
    ],
    ask: [
      "Are you a fiduciary for this advice, and will you say so in writing?",
      "How are you paid, in dollars I can understand?",
      "What will the first plan cover, and what will it leave for later?",
      "What should I do in the next 30 days, in order?",
    ],
    fees: "You might pay a flat planning fee, a monthly subscription, an hourly rate, or a percentage of investments. Ask for the dollar amount on your size of account, not only the percentage. You can take the plan and leave. You do not have to move your accounts to them on day one.",
    approach:
      "I'm starting from a normal paycheck and I want a plan I can follow is a respected opening. Bring the numbers you have. If you feel rushed toward a product, say I'd like the written plan before I buy anything. Then stop talking and let them answer.",
    sources: [sources.cfpVerify, sources.cfpbBudget],
  },
  {
    slug: "insurance",
    role: "Insurance agent or broker",
    helpsWith:
      "Car, renters, home, and life coverage. An agent often represents one company. A broker often shops several. Ask which one you are talking to.",
    find: [
      "Start from the coverage you need, not from an ad. Bring your current declarations page if you already have a policy.",
      "Your state insurance department licenses agents and takes complaints. The NAIC directory links to each state.",
      "A referral is useful. Confirm the person can sell the kind of policy you need in your state.",
    ],
    bring: [
      "The declarations page of any policy you have now.",
      "For a car: who drives, the cars, and roughly how many miles.",
      "For renters or home: the address, and whether you own expensive single items like a bike or a ring.",
      "The must-haves from the car insurance lessons if you have read them: liability limits and the deductible you can pay.",
    ],
    ask: [
      "Do you represent one company or can you shop several?",
      "Please compare the same limits and deductibles.",
      "What does this policy not cover?",
      "What is my deductible on the day something happens, in dollars?",
    ],
    fees: "Agents and brokers are usually paid a commission by the insurance company. You rarely get a separate bill for the conversation. The commission is inside the premium. That is normal. It is also why you ask them to match the coverages before you celebrate a lower price. If a claim goes badly, the state insurance department is the complaint path, not only the agent who sold it.",
    approach:
      "Please explain this in normal words, and tell me what this policy does not cover. You are allowed to say you will take the quote home. Buying on the phone because the pause feels awkward is how people discover a missing coverage after a crash.",
    sources: [sources.naicAuto, sources.naicDepartments, sources.naicConsumer],
  },
  {
    slug: "real-estate",
    role: "Real estate agent",
    helpsWith:
      "Renting is often a conversation with the landlord's agent, who works for the landlord. Buying is when your own agent earns their fee. Ask who they represent before you treat them as yours.",
    find: [
      "For a rental, you can go straight to the landlord or management company. An agent on a rental listing usually represents the owner.",
      "For a purchase, interview two buyer's agents. Ask how many first-time buyers they have worked with in the last year.",
      "Get the representation agreement in writing and read who pays them if you do not buy.",
    ],
    bring: [
      "Your monthly plan and the payment you can actually make, not the payment a website pre-approved in thirty seconds.",
      "Must-haves and areas, written down so a charming kitchen does not erase them.",
      "If you are renting: the lease questions from the renting lessons.",
    ],
    ask: [
      "Who do you represent in this deal?",
      "How are you paid, and what would I owe if I do not buy?",
      "What are the total estimated costs besides the price?",
      "What should I have a lawyer or an inspector look at before I commit?",
    ],
    fees: "How agents are paid has been changing, and it depends on the contract you sign. Ask, in writing, who pays them and what you would owe if the deal does not close. Do not rely on how it worked for a friend two years ago.",
    approach:
      "I want to understand the full cost and who you work for before I tour ten places. A good agent can answer that without making you feel slow. If you feel pushed to waive an inspection or a financing contingency, pause. Those are decisions with a lawyer or a very clear explanation, not a favor to keep a deal alive.",
    sources: [sources.cfpbOwning, sources.cfpbRenting],
  },
  {
    slug: "lender",
    role: "Mortgage lender",
    helpsWith:
      "The loan that pays for a home. A lender is not your real estate agent. Their job is to offer you a loan. Your job is to compare more than one offer.",
    find: [
      "Talk to at least two lenders: a bank or credit union, and another lender. Comparing one quote to itself teaches you nothing.",
      "Ask for a Loan Estimate, the standard three-page form, not only a rate in a text message.",
      "The CFPB's owning-a-home tools explain how to read that form line by line.",
    ],
    bring: [
      "Pay stubs, tax returns, bank statements, and a photo ID. Ask which months they need before you start downloading your whole life.",
      "A list of debts. Hiding one does not help. It shows up.",
      "The price range your monthly plan can hold, which may be lower than the maximum they will approve.",
    ],
    ask: [
      "Can you send a Loan Estimate I can compare with another lender?",
      "What is the full monthly payment, including taxes and insurance, not only principal and interest?",
      "Which fees change if I pick a different rate?",
      "What happens if the appraisal comes in low?",
    ],
    fees: "Lenders are paid through the interest rate, points, and fees on the Loan Estimate. A lower rate with higher upfront points can cost more or less depending on how long you keep the loan. Ask them to show both. You can walk away until you have signed. Pre-approval is not a commitment to that lender.",
    approach:
      "I want to compare full costs, not just the rate. Then stop. Let them put it on the Loan Estimate. If a number is only in a text message, ask for it on the form.",
    sources: [sources.cfpbLoanEstimate, sources.cfpbOwning],
  },
  {
    slug: "mechanic",
    role: "Trusted mechanic",
    helpsWith:
      "Maintenance and repairs. The time to find a shop is before the car makes a noise on a Sunday.",
    find: [
      "Ask people who drive a car like yours where they go back a second time. Repeat business is the signal.",
      "ASE certification is a real credential for technicians. It is a signal, not a guarantee of a fair price.",
      "Read recent reviews for how the shop explains work, not only for the star count. A shop that will not put an estimate in writing is a shop to skip.",
    ],
    bring: [
      "The symptom in plain words: when it happens, what it sounds like, and whether a light is on. I don't know cars is a fine preface.",
      "The maintenance records you have. A glovebox folder is enough.",
      "Your budget for this visit, so they can tell you what can wait.",
    ],
    ask: [
      "Can I have a written estimate before you start?",
      "Please call me if it will cost more than this estimate.",
      "What happens if I wait a month?",
      "Can you show me the part?",
    ],
    fees: "You approve the work. A written estimate is the agreement. If the price will rise, the shop should stop and call. You can take the car somewhere else before the work starts. The Federal Trade Commission publishes a plain guide to car repair. Diagnostic fees are normal. Ask what the fee is before they hook up a computer.",
    approach:
      "I don't know this system. Please show me the part and tell me what happens if I wait. A good shop expects that question. You do not need to perform expertise you do not have. You do need to leave with a piece of paper.",
    sources: [sources.ftcCarRepair],
  },
];

export const otherPros = [
  {
    role: "Banker",
    note: "Useful for fees, a second account for a side hustle, and the overdraft setting. A banker at the counter is not a financial planner.",
  },
  {
    role: "Therapist or counselor",
    note: "The pro for mental health, the way a CPA is the pro for taxes. This site does not provide counseling. If you are in crisis in the United States, call or text 988.",
  },
  {
    role: "Career mentor",
    note: "Someone a few years ahead in the work you want, who will tell you what the job is actually like. They are not a therapist and they are not a financial planner. One role at a time.",
  },
];
