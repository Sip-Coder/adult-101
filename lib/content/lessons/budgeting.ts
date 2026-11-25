import type { Lesson } from "../types";
import { sources } from "../sources";

export const budgetingLessons: Lesson[] = [
  {
    slug: "what-a-budget-is",
    title: "A budget is a plan, not a punishment",
    minutes: 6,
    summary:
      "A budget tells the money you already have where to go this month. It is a short plan you can look at, not a test of your character.",
    sections: [
      {
        heading: "Start with the money that actually arrives",
        paragraphs: [
          "Take-home pay is the amount that lands in your account after taxes and other paycheck deductions. The larger number on a job offer is gross pay. You cannot spend gross pay. Build the plan from take-home pay, plus any other money you can count on this month, such as a regular stipend or a shift you already have on the calendar.",
          "If your income changes from month to month, plan from a low typical month, not your best one. When a better month shows up, assign the extra dollars after they arrive. Hoping they will arrive is not a line in the plan.",
        ],
      },
      {
        heading: "Three piles are enough",
        paragraphs: [
          "Split the month into bills you must pay, spending you can change, and money you are keeping for later. Later means a known bill that is coming (registration, a deposit, a trip home) or a small cushion for a bad week.",
          "You will see a 50/30/20 sketch online: about half for needs, about a third for wants, and the rest toward savings and extra debt payments. Treat that as a sketch someone drew, not a rule you have to hit. Rent in a lot of cities already takes more than half of take-home pay. If your numbers do not match the sketch, the sketch is the thing that does not fit. Write the plan from your rent and your paycheck.",
        ],
      },
      {
        heading: "Give every leftover dollar a job",
        paragraphs: [
          "List the bills with their due dates and amounts. Subtract them from take-home pay. What remains is what you can spend and set aside. Name those dollars: groceries, transit, the phone, going out, and a transfer to savings on payday.",
          "A notes app works. A spreadsheet works. Paper works. The tool is not the budget. Looking at the plan about once a week is the budget.",
        ],
      },
      {
        heading: "The first month is for learning",
        paragraphs: [
          "You will guess wrong on food or gas. Change the number next month. A plan you update beats a perfect plan you drop on day four.",
          "If the bills are larger than the paycheck, that is information, not a personal failure. The next lesson covers due dates so nothing expensive slips. A certified financial planner, or a nonprofit credit counselor, can sit with the real numbers when the gap is too wide to close by skipping one habit. This lesson can show the shape of the problem. It cannot tell you which bill to pay first in your life.",
        ],
      },
    ],
    checklist: [
      "Use take-home pay, not the gross number on the offer letter.",
      "List this month's bills with dates and amounts.",
      "Give the leftover dollars a job, including a small later pile.",
      "Pick a 15-minute time each week to look at the plan.",
      "Change next month's guesses instead of throwing the plan out.",
    ],
    selfCheck: [
      {
        prompt: "Which number do you build a monthly plan from?",
        choices: [
          "The salary in the job posting",
          "Take-home pay that reaches your account",
          "Last year's tax refund",
        ],
        answer: 1,
        why: "A plan can only spend money that arrives. Gross pay includes money that never hits the account.",
      },
      {
        prompt: "Rent is 60% of your take-home pay. What does that mean for a 50/30/20 sketch?",
        choices: [
          "You should not write a budget until rent is half of your pay",
          "The sketch does not fit, and you still write a plan from your real numbers",
          "The budget is invalid if it does not match 50/30/20",
        ],
        answer: 1,
        why: "The sketch is a picture of someone else's month. Your plan uses your rent, your paycheck, and your city.",
      },
    ],
    sources: [sources.cfpbBudget, sources.cfpbBankAccounts],
  },
  {
    slug: "your-first-month",
    title: "Set up your first month",
    minutes: 7,
    summary:
      "One sitting, one month, and a short list of bills. You are building a picture of this month, not a lifetime spreadsheet.",
    sections: [
      {
        heading: "Gather one month of evidence",
        paragraphs: [
          "Open your bank and card apps and look at the last full month. You are looking for repeating charges and the lumpy ones: rent, the phone, subscriptions, groceries, transit, loans, and anything that surprised you. Write the name and a typical amount. You do not need every coffee.",
          "If you have never tracked spending, a week of notes is enough to start. Perfect history can wait. A blurry true picture beats a blank page.",
        ],
      },
      {
        heading: "Put the bills on a calendar",
        paragraphs: [
          "Write each due date next to the bill. A bill due the day before payday is a different problem from the same bill due three days after. If two big bills land in the same week, that week needs cash sitting there already, even if the month as a whole works.",
          "Ask whether any due date can move. Many lenders, utilities, and card issuers will change a due date if you ask. Get the confirmation in writing, in the app or by email. A spoken yes is easy to lose.",
        ],
      },
      {
        heading: "Decide the savings transfer first",
        paragraphs: [
          "If you wait until the end of the month to save what is left, nothing is left. Pick a small amount you can move on payday, even if it is the price of one dinner out. Name the account so you know what it is for. Emergency cushion and known future bill are different jobs. Mixing them makes both harder to protect.",
          "There is no official correct size for a first cushion. A few hundred dollars changes a flat tire from a crisis into an errand. A month of must-pay bills is a stronger version. Build toward the larger one after the small one exists. Investing and extra debt payments come after you can cover a surprise without a new high-interest balance. A planner can help you choose the order for your debts and your goals. This page will not rank them for you.",
        ],
      },
      {
        heading: "Close the loop on Sunday",
        paragraphs: [
          "Once a week, look at what you planned and what you spent. Move money between the piles if food ran hot and going-out ran cold. The edit is the skill.",
          "If you share costs with a roommate or a partner, agree on who pays which bill and when you will look at it together. A shared plan that lives in one person's head is not shared.",
        ],
      },
    ],
    checklist: [
      "Skim one month of transactions and list repeating bills.",
      "Put every due date on one calendar.",
      "Ask to move a due date that lands before payday, and save the confirmation.",
      "Schedule a small payday transfer into a named savings bucket.",
      "Put a weekly 15-minute check on the calendar.",
    ],
    selfCheck: [
      {
        prompt: "Two large bills are due the Tuesday before Friday's paycheck. The month still balances. What is the actual risk?",
        choices: [
          "There is no risk, because the month balances",
          "That week can overdraw even when the month looks fine",
          "You should skip both bills",
        ],
        answer: 1,
        why: "Cash has to be in the account on the due date, not just by the end of the month.",
      },
      {
        prompt: "When do you move money into savings if you want it to happen?",
        choices: [
          "Whatever is left on the last day of the month",
          "On payday, for an amount you chose in advance",
          "Only after you have a full month of expenses saved",
        ],
        answer: 1,
        why: "Money left over at the end of the month is usually already spent. A payday transfer happens before the spending does.",
      },
    ],
    sources: [sources.cfpbBudget, sources.cfpbBankAccounts],
  },
  {
    slug: "bills-due-dates-autopay",
    title: "Bills, due dates, and autopay",
    minutes: 6,
    summary:
      "Autopay is a tool for bills that stay the same and that you can cover. It is a bad surprise when the account is empty or the amount can jump.",
    sections: [
      {
        heading: "Sort bills before you automate them",
        paragraphs: [
          "Fixed bills keep roughly the same amount: rent, a car payment, insurance, the phone. Variable bills move: electricity, a credit card, a medical payment plan. Autopay fits the fixed ones when you know the money will be there. For a variable bill, autopay the minimum or a set amount only if you understand what is left to pay yourself, or pay it manually after you read the bill.",
          "Turn on alerts for every account that will pull money: a low-balance alert and a payment-posted alert. Alerts are free. An overdraft fee is not.",
        ],
      },
      {
        heading: "Keep a buffer in the checking account",
        paragraphs: [
          "Autopay does not check your plans. It checks the balance. Leave a buffer in checking that can absorb a bill arriving a day early or a paycheck arriving a day late. The buffer is part of the bill system, not extra spending money.",
          "Overdraft programs differ by bank. Some banks decline the charge. Some pay it and add a fee. Some offer an overdraft transfer from savings. Read the setting in your app and pick one on purpose. The Consumer Financial Protection Bureau's bank-account materials explain the common choices in plain language.",
        ],
      },
      {
        heading: "Read the bill even when it pays itself",
        paragraphs: [
          "Autopay is not a reason to stop opening the bill. Look for a price change, a new fee, or a card that expired and silently failed. A failed autopay can still be reported late. Put a reminder a few days before the pull, glance at the amount, and make sure the balance covers it.",
          "When you cancel a service, confirm the cancellation in writing and watch the next statement. A company that keeps billing is easier to fight with the confirmation email than with a memory of a phone call.",
        ],
      },
      {
        heading: "If you cannot pay a bill",
        paragraphs: [
          "Call before the due date, not after the late fee. Say what you can pay and when. Ask what the late fee is, whether they will waive it once, and whether they offer a hardship plan. Write down the name of the person and the date.",
          "Paying nothing and hoping is the option that grows fees and, for credit accounts, can hurt your credit report. This site cannot rank your bills. A nonprofit credit counselor or a certified financial planner can. If a collector is already calling, the CFPB publishes your rights around debt collection. Read those before you agree to a payment you cannot make.",
        ],
      },
    ],
    checklist: [
      "Autopay only the bills whose amount you can cover on the due date.",
      "Turn on a low-balance alert and a payment alert.",
      "Keep a checking buffer for an early pull or a late paycheck.",
      "Read the bill even when autopay is on.",
      "If you will be short, call before the due date and write down what they offer.",
    ],
    selfCheck: [
      {
        prompt: "Which bill is the better candidate for autopay?",
        choices: [
          "A credit card whose balance changes every month and that you have not read",
          "A car insurance premium that stays the same and is already in this month's plan",
          "Any bill, because autopay means you never think about it again",
        ],
        answer: 1,
        why: "Autopay fits a known amount you have already set money aside for. You still open the bill.",
      },
      {
        prompt: "You can see you will not cover rent on the due date. What do you do first?",
        choices: [
          "Wait until the fee posts, then call",
          "Call before the due date, say what you can pay, and write down the answer",
          "Ignore it if you can pay next week",
        ],
        answer: 1,
        why: "The useful conversation happens before the due date. A late fee and a missed-payment record are harder to undo than they are to prevent.",
      },
    ],
    sources: [sources.cfpbBankAccounts, sources.cfpbBudget],
  },
];
