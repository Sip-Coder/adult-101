import type { Lesson } from "../types";
import { sources } from "../sources";

export const businessLessons: Lesson[] = [
  {
    slug: "an-offer-people-pay-for",
    title: "Start with an offer people pay for",
    minutes: 7,
    summary:
      "A business begins when someone who is not doing you a favor pays for a specific thing. The logo and the LLC can wait for that sentence to be true.",
    sections: [
      {
        heading: "Write the offer in one sentence",
        paragraphs: [
          "Name who it is for, what they get, and what it costs. I edit resumes for new grads in three days for $180 is a business sentence. I want to do something creative is a wish. You need the sentence before you need a brand.",
          "Talk to five people who might actually pay, not five friends being nice. Ask what they do today instead, what annoyed them last time, and whether the price is in a range they have already spent. You are listening for a yes with a wallet behind it.",
        ],
      },
      {
        heading: "A small test beats a big launch",
        paragraphs: [
          "Sell one unit before you build a system. A posted price, a deposit, and a delivery date will teach you more than a month of logos. The buyer should be someone you do not live with, so the money is real.",
          "List what it costs you to deliver that one unit: materials, software, fees, travel, and your hours. If the price does not cover those costs plus something for taxes and for paying yourself, you have a hobby with receipts. You can still do the first jobs while you learn the number. Write the number down so the next price is a decision.",
        ],
      },
      {
        heading: "What can wait",
        paragraphs: [
          "A name, a logo, a website, business cards, and a legal entity can all wait until a stranger is ready to pay. Some businesses need a license before the first sale, especially food, childcare, and the building trades. If your work might be one of those, check your city and your state before you take the money. The Small Business Administration's start-up guide is the federal map. Your city website is the local one.",
          "A deeper course on business structures is still coming here. For now: doing business in your own name, as a sole proprietor, is the default in the United States. It is legal to start that way. It also means you and the business are the same person for debts and for lawsuits. That tradeoff is why people later form an LLC. It is not a reason to form one on day one out of nerves.",
        ],
      },
      {
        heading: "Keep the first records ugly and true",
        paragraphs: [
          "Save every receipt and write down every payment: date, who, what, and whether money came in or went out. A spreadsheet is enough. You will care about this the first time taxes show up, which is sooner than new business owners expect.",
          "The IRS self-employed tax center explains the categories. A CPA or an enrolled agent should compute what you owe. This lesson will not. The next lesson covers how to get paid and why a separate bank account makes those records possible.",
        ],
      },
    ],
    checklist: [
      "Write one sentence: who it is for, what they get, and the price.",
      "Talk to five people who could pay, and ask what they do today.",
      "Deliver one paid job before you design a brand.",
      "Write down the cost of delivering that job, including your hours.",
      "Check whether your city or state requires a license before the first sale.",
    ],
    selfCheck: [
      {
        prompt: "Which of these is an offer?",
        choices: [
          "I like plants and might start a business someday",
          "I will pot three balcony plants at your apartment this Saturday for $90",
          "A logo with a leaf on it",
        ],
        answer: 1,
        why: "An offer names the person, the work, the time, and the price. A mood and a logo are not yet a business.",
      },
      {
        prompt: "Forming an LLC is required before the first dollar because:",
        choices: [
          "It is not required for many small starts. Sole proprietorship is the default, with real tradeoffs.",
          "The IRS rejects payments to a person",
          "Banks will not take a deposit otherwise",
        ],
        answer: 0,
        why: "You can start in your own name. An LLC is a later legal choice about liability and paperwork, not the definition of a business. Some trades still need a license first.",
      },
    ],
    sources: [sources.sbaSteps, sources.irsStarting, sources.irsStructures],
  },
  {
    slug: "getting-paid-and-separate-money",
    title: "Getting paid, and keeping the money separate",
    minutes: 7,
    summary:
      "Say the price and the due date before you do the work. Put every payment in an account that is not your personal spending account.",
    sections: [
      {
        heading: "The due date is part of the job",
        paragraphs: [
          "Before you start, say how you get paid. I invoice when I send the draft, and payment is due in 14 days is a clear deal. For a larger job, write it down: what you will deliver, the price, when they pay, and what happens if they want extra rounds. A contracts course is coming later on this site. Until then, a short email that the client replies yes to is already stronger than a handshake you remember differently.",
          "A deposit before custom work is normal. You are buying materials or holding time. Say the deposit amount and whether it is refundable. Send a real invoice: your name, their name, the date, what you did, the amount, how to pay, and the due date.",
        ],
      },
      {
        heading: "Follow up like a person who expects to be paid",
        paragraphs: [
          "If the due date passes, send the invoice again the next business day with one sentence: This was due yesterday. Here is the link. You are not being difficult. You are finishing the job, and getting paid is part of the job. Keep the thread.",
          "Do not do a pile of extra unpaid work while you wait, unless you decided the first job was a sample and you can afford the sample. Decide that before you are three weeks in, not after.",
        ],
      },
      {
        heading: "A separate account, even without an LLC",
        paragraphs: [
          "Open a separate checking account for the work as soon as money starts arriving. It can be a second personal account at the start, and later a business account when a bank asks for formation papers. Deposit every client payment there. Pay work expenses from there. Move your pay to your personal account as a transfer.",
          "That transfer is you taking profit. It is not a business expense. Mixing client money with Saturday dinner makes taxes harder and, if you later form an LLC, can weaken the separation you paid a lawyer to create. The IRS recordkeeping page explains why clean records matter. A separate account is how ordinary humans produce them.",
        ],
      },
      {
        heading: "Taxes are a bill, not a surprise party",
        paragraphs: [
          "When no employer withholds taxes, you may have to pay the IRS during the year. Those are estimated taxes. The calendar and the safe harbors are on the IRS estimated-tax page. New freelancers get hurt by spending the whole payment and meeting the tax bill in April with a credit card.",
          "A practical habit: move a slice of every deposit into a tax bucket the day it lands. A CPA or an enrolled agent tells you the percentage for your situation. A guess from a group chat is how people underpay. Side-hustle taxes are their own upcoming topic here, because the owner of this site is still deciding whether personal taxes and business taxes should be one course or two.",
        ],
      },
    ],
    checklist: [
      "Agree on price, deposit, and due date before you start.",
      "Send an invoice with a due date and a way to pay.",
      "Follow up the next business day if it is late.",
      "Put client money in a separate account.",
      "Move a tax slice aside from each deposit until a tax pro sets the real number.",
    ],
    selfCheck: [
      {
        prompt: "Moving your profit from the work account to your personal account is:",
        choices: [
          "A business expense you deduct",
          "You paying yourself, which is not an expense of the business",
          "Illegal unless you have an LLC",
        ],
        answer: 1,
        why: "The transfer is profit leaving the work account. Expenses are what you spent to do the work. You do not need an LLC to pay yourself this way.",
      },
      {
        prompt: "Nobody withholds taxes from a client payment. A sound habit is:",
        choices: [
          "Spend it all and sort it out if the IRS writes",
          "Set a slice aside for taxes and have a CPA or enrolled agent set the real amount",
          "Ignore taxes until you hire an employee",
        ],
        answer: 1,
        why: "Estimated taxes exist so self-employed people pay during the year. The IRS page has the rules. A tax pro has the number.",
      },
    ],
    sources: [sources.irsEstimated, sources.irsRecords, sources.irsSelfEmployed],
  },
  {
    slug: "ein-licenses-and-first-records",
    title: "EINs, licenses, and the first records",
    minutes: 7,
    summary:
      "The boring setup is a free IRS number, the licenses your city actually requires, and a record of money in and money out.",
    sections: [
      {
        heading: "The EIN is free. The websites that sell it are not the IRS.",
        paragraphs: [
          "An employer identification number is the IRS business ID. You apply on the IRS website. The IRS does not charge for it. Sites that charge you to get an EIN are selling convenience around a free form. Use irs.gov.",
          "A sole proprietor with no employees can often use a Social Security number. An EIN is still worth having when a bank, a client, or a vendor asks for a tax ID and you would rather not hand out your Social Security number. The IRS page lists who is required to get one, including if you hire or if you form an entity. Read that list against your situation instead of assuming every seller needs one on day one.",
        ],
      },
      {
        heading: "Licenses live at the city, the county, and the state",
        paragraphs: [
          "There is no single federal business license for a typical small business. Your city may want a general business license. Your state may want a sales-tax permit if you sell taxable goods. Your trade may want a professional license: food, cosmetology, contracting, childcare, and health work are common examples. Skip the license and the fine can be larger than the fee.",
          "Search your city name plus business license, and check your state's secretary of state and department of revenue. The SBA's register-your-business page points at those layers. If you sell online across state lines, sales tax gets more complicated fast. That is a CPA conversation, not a guess.",
        ],
      },
      {
        heading: "Structures, in one careful pass",
        paragraphs: [
          "A sole proprietorship is you. An LLC is a state filing that can separate some business debts from your personal assets. It does not cover every kind of mistake, it does not replace insurance, and courts can set the separation aside if you treat the business bank account like a personal wallet. An LLC also does not, by itself, change how you are taxed. Different tax treatments are elections with their own forms.",
          "Partnerships and corporations exist for other situations, including when someone else owns the business with you. Do not pick from a chart on a blog when another person, a lease, or a pile of personal savings is involved. The IRS business-structures page is the federal tax map. A lawyer in your state explains liability. A CPA explains the tax election. Use both when the choice is expensive to undo.",
        ],
      },
      {
        heading: "Records you can hand to a tax pro",
        paragraphs: [
          "Keep a running list: date, who paid or got paid, what it was for, and the amount in or out. Save the receipt or the invoice next to it. Photograph paper receipts. Once a month, make sure the list matches the separate account.",
          "The IRS recordkeeping page explains how long to keep those records. Follow that page rather than a round number from memory, because different records have different clocks. When you hire a CPA or an enrolled agent, this list is what you bring. You are not expected to arrive with the tax return already finished. You are expected to arrive with the truth.",
        ],
      },
    ],
    checklist: [
      "If you need an EIN, apply at irs.gov and skip fee-charging lookalikes.",
      "Check city, state, and professional license rules before you advertise.",
      "Read the IRS page on who must have an EIN against your own facts.",
      "Ask a lawyer and a CPA before you form an entity with a co-owner or a big personal risk.",
      "Keep a monthly list of money in and money out that matches the separate account.",
    ],
    selfCheck: [
      {
        prompt: "The legitimate place to get an EIN is:",
        choices: [
          "A sponsored ad that charges a processing fee for the same form",
          "The IRS website, which does not charge",
          "Your social media bio",
        ],
        answer: 1,
        why: "The IRS issues EINs for free. Third-party sites charge for a free government form.",
      },
      {
        prompt: "Forming an LLC automatically means:",
        choices: [
          "You are taxed as a corporation and you cannot be sued",
          "You have a state entity that may separate some debts, and you still have to choose tax treatment and carry insurance",
          "You no longer need to keep records",
        ],
        answer: 1,
        why: "An LLC is a liability and paperwork tool with limits. Tax treatment is a separate election. Insurance and clean records still matter.",
      },
    ],
    sources: [sources.irsEin, sources.irsEinApply, sources.sbaRegister, sources.irsStructures, sources.irsRecords],
  },
];
