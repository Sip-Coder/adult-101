import type { Lesson } from "../types";
import { sources } from "../sources";

export const estateLessons: Lesson[] = [
  {
    slug: "paperwork-while-you-are-young",
    title: "Why this paperwork matters while you are young",
    minutes: 6,
    summary:
      "These documents are instructions for people who love you, used on a bad day. Age is not what makes them useful. Having people, a paycheck, or a kid does.",
    sections: [
      {
        heading: "The state already has a plan. It is not yours.",
        paragraphs: [
          "If you die without a will, your state's intestacy law decides who inherits. That law is a default family tree. It does not know about the partner you did not marry, the sibling who already helps your parent, or the friend who should have the car. It is a plan. It is just not one you wrote.",
          "The same gap shows up while you are alive and unable to speak for yourself. Without a power of attorney and a health care directive, the people at the hospital and the bank fall back on default rules and court processes. Those exist so nobody is stranded. They are slower and less personal than a document that names the person you trust.",
        ],
      },
      {
        heading: "You do not need a mansion to need instructions",
        paragraphs: [
          "A checking account, a retirement account from a first job, a car, and a pet are enough to make a one-page set of instructions matter. If you have a child, naming a guardian is one of the few jobs only a will can do well. If you have none of those, a health care directive is still the document that tells a doctor who may hear your wishes.",
          "Online forms are everywhere. They fail when a state requires specific witnesses or a notary and the form was signed on a couch without them. A document that looks serious and was signed wrong can be useless. An estate attorney in your state, or a legal-aid clinic if money is tight, is how you find out which formalities your state actually uses.",
        ],
      },
      {
        heading: "Tell someone the documents exist",
        paragraphs: [
          "A will in a mystery folder helps no one on the day it is needed. Tell the person you named where the signed copies are. Give your doctor the health care directive. When you name a beneficiary on a retirement account, tell that person they are named, without turning it into a ceremony.",
          "Review the names after big life changes: a marriage, a breakup, a child, a move to a new state. Moving states matters because these documents are state-specific. A will that was valid at home may need a new signature after you relocate. Ask a lawyer in the new state rather than assuming.",
        ],
      },
      {
        heading: "What this lesson will not do",
        paragraphs: [
          "It will not give you a form to print and call done. It will not tell you whether you need a trust. The next two lessons separate the tools so you can walk into a professional's office knowing what to ask. The advisory team page covers how to hire that attorney without feeling like you are wasting their time.",
          "Nothing here is a substitute for advice about your family and your state. It is a map of the tools, with links to USA.gov, the CFPB, and other public explainers so you can read the original pages beside this one.",
        ],
      },
    ],
    checklist: [
      "Notice that your state already has a default inheritance plan.",
      "List the people who would need instructions if you could not speak for yourself.",
      "Plan to ask a lawyer in your state which signatures your documents need.",
      "Tell the named person where the signed copies will live.",
      "Revisit the documents after a move, a marriage, a breakup, or a child.",
    ],
    selfCheck: [
      {
        prompt: "If you die with no will, who decides who inherits?",
        choices: [
          "Your most recent text messages",
          "Your state's default inheritance law",
          "Whoever is listed on your streaming accounts",
        ],
        answer: 1,
        why: "Intestacy law is the state's backup plan. It follows a family-tree formula, not your unwritten wishes.",
      },
      {
        prompt: "An online will template is finished when:",
        choices: [
          "You typed your name at the bottom",
          "It is signed the way your state requires, which may include witnesses or a notary",
          "You saved the PDF",
        ],
        answer: 1,
        why: "States are particular about how these documents are signed. A file on your laptop is not the same as a valid will.",
      },
    ],
    sources: [sources.usaWills, sources.usaPoa, sources.cfpbHeirs],
  },
  {
    slug: "wills-beneficiaries-and-powers-of-attorney",
    title: "Wills, beneficiaries, and powers of attorney",
    minutes: 8,
    summary:
      "Three different tools get mixed up because they all involve someone you trust. They turn on at different times and control different things.",
    sections: [
      {
        heading: "A will works after you die",
        paragraphs: [
          "A will says who gets property that does not already have another instruction, who should carry out those wishes (the executor), and, if you have minor children, who you want as their guardian. A court process called probate is how many wills get carried out. Probate is not a scandal. It is a process, and in some states it is slow or expensive enough that people plan around it. In others it is ordinary. A local attorney knows which one you live in.",
          "A will does not control everything you own. Retirement accounts and life insurance usually pass by beneficiary form. Those forms often beat the will. If your will says your sibling gets everything and an old form still names an ex, the form can win. Read the beneficiary lines on every retirement account and policy when you do the will, and update them in the same season.",
        ],
      },
      {
        heading: "A financial power of attorney works while you are alive",
        paragraphs: [
          "A financial power of attorney names someone to handle money and paperwork for you. It ends at death. After that, the will and the executor take over. People mix these up and then discover the power of attorney cannot pay the bills from an account once the person has died.",
          "Some powers of attorney start immediately. Some start only if a doctor says you cannot manage things (a springing power). Immediate is simpler to use and requires more trust. Springing sounds safer and can be slow to prove at the bank. Ask the attorney which one banks in your state actually accept. Name a backup person. Say out loud what you do and do not want that person to do.",
        ],
      },
      {
        heading: "Health care wishes are their own document",
        paragraphs: [
          "A health care power of attorney, proxy, or advance directive names who may talk to doctors if you cannot, and can record wishes about treatment. The title changes by state. It is not the financial power of attorney. The person who is great with your bank password may be the wrong person to make a medical call, or they may be exactly right. Choose on purpose.",
          "Give a copy to the person you named and ask your clinic how to put it on file. A document in a drawer at home is invisible to an emergency room in another city.",
        ],
      },
      {
        heading: "Pick the person for the job, then tell them",
        paragraphs: [
          "The best executor is organized and calm, not necessarily your favorite person at dinner. The best health care agent can hear a doctor and can say your wishes when other people disagree. Ask them before you write their name. Surprising someone with a legal role is how documents stall.",
          "Beneficiaries on accounts, the will, and both powers of attorney should tell the same story. If they do not, write down which one you mean and fix the form that is wrong. A lawyer helps when there is a blended family, a child, property in more than one state, or a relative who will fight. Those are ordinary reasons to hire one.",
        ],
      },
    ],
    checklist: [
      "List accounts that pass by beneficiary form, separate from what a will controls.",
      "Update retirement and insurance beneficiaries in the same season as the will.",
      "Sign a financial power of attorney that banks in your state will accept.",
      "Sign a health care directive and give it to the person you named and your clinic.",
      "Ask the people before you name them, and name a backup.",
    ],
    selfCheck: [
      {
        prompt: "A financial power of attorney lets someone act for you:",
        choices: [
          "After you die, instead of an executor",
          "While you are alive, and it ends at death",
          "Only for medical decisions",
        ],
        answer: 1,
        why: "It is a lifetime tool. After death, the will and the executor are the path. Health decisions live in a different document.",
      },
      {
        prompt: "Your will leaves everything to your sibling. Your old 401(k) form names an ex. Who is likely to receive the 401(k)?",
        choices: [
          "Your sibling, because the will is newer",
          "The person on the beneficiary form",
          "The state",
        ],
        answer: 1,
        why: "Beneficiary forms usually pass outside the will. Update the form. Do not assume the will rewrites it.",
      },
    ],
    sources: [sources.usaWills, sources.usaPoa, sources.cfpbHeirs],
  },
  {
    slug: "trusts-in-plain-language",
    title: "Trusts, in plain language",
    minutes: 7,
    summary:
      "A trust is a container with rules and a manager. It is a useful tool for some people and an expensive stack of paper for others. Funding it is the part people skip.",
    sections: [
      {
        heading: "The three roles",
        paragraphs: [
          "A trust is a legal arrangement. A trustee holds property for a beneficiary under written rules. You can wear more than one of those hats while you are alive. The trust document is the rulebook: who benefits, who is in charge, and what happens when you die or cannot serve.",
          "People say trust fund like it means wealth. The tool is a container. It can hold a condo or a savings account. The size of the account does not tell you whether the container is worth the cost of setting it up and maintaining it.",
        ],
      },
      {
        heading: "Revocable living trusts and the funding step",
        paragraphs: [
          "A revocable living trust is one you can change while you are alive and competent. People use them to pass property without probate, to name a backup manager if they cannot cope, and to set simple rules for who inherits. A revocable trust you control is generally not an income-tax trick. Do not buy one because an advertisement promised a tax outcome. Ask a CPA or a tax attorney about tax, and ask an estate attorney about the trust. They are different questions.",
          "A trust only holds what you put in its name. That step is called funding. A house still titled in your personal name, and a bank account still titled in your personal name, are not in the trust. An unfunded trust is a nice binder. Retitling property has its own paperwork, and for a house it means a new deed. The attorney who drafts the trust should hand you the funding list and tell you which items they will retitle and which ones you must do.",
        ],
      },
      {
        heading: "You usually still want a will",
        paragraphs: [
          "A pour-over will catches property left outside the trust and sends it into the trust. It is also where you name a guardian for minor children. A trust does not replace that. Beneficiary forms on retirement accounts and life insurance still win on their own terms. Naming the trust as beneficiary can be right or wrong depending on the account type and the tax rules. That is a question for the attorney and the CPA together, not a checkbox on a website.",
          "Irrevocable trusts are harder to change. They show up in particular tax, benefit, and asset-protection situations. They are not the default first document for someone renting an apartment. If a salesperson leads with an irrevocable trust before asking about your life, slow down and get a second opinion from an estate attorney you chose.",
        ],
      },
      {
        heading: "How to decide whether to ask about one",
        paragraphs: [
          "Good reasons to ask: you own a home, you have a child and want a trustee to manage what they inherit, you own property in more than one state, or a lawyer has told you probate in your state is genuinely painful. Weak reasons: a webinar scared you, or you want a document that sounds more official than a will.",
          "Bring a list of what you own and how it is titled, the beneficiary forms you already have, and the names of the people you would trust to manage things. The advisory page on this site has a script for the first call. You are hiring them to tell you if you need a trust. A good lawyer will say no when the answer is no.",
        ],
      },
    ],
    checklist: [
      "Learn the three roles: trustee, beneficiary, and the rules in the document.",
      "Ask what a revocable trust would change for probate in your state, in dollars and time.",
      "If you create one, leave with a written funding list.",
      "Keep a will that names guardians and catches leftovers.",
      "Do not change retirement beneficiaries to a trust until a lawyer and a tax pro agree.",
    ],
    selfCheck: [
      {
        prompt: "A signed trust automatically holds your house when:",
        choices: [
          "You sign the trust, no matter whose name is on the deed",
          "The deed is retitled so the trust owns the house",
          "You mention the house in an email to yourself",
        ],
        answer: 1,
        why: "Funding means retitling. A house still in your personal name is outside the trust.",
      },
      {
        prompt: "A revocable living trust you still control is best understood as:",
        choices: [
          "A guaranteed way to pay no income tax",
          "A container for property, with rules, that you can usually change while you are able",
          "A replacement for a will, health care directive, and beneficiary forms",
        ],
        answer: 1,
        why: "It is a management and transfer tool. It is not a tax eraser, and it does not retire the other documents.",
      },
    ],
    sources: [sources.usaWills, sources.usaPoa, sources.cfpbHeirs],
  },
];
