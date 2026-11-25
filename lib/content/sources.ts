import type { Source } from "./types";

export const sources = {
  cfpbBudget: {
    label: "Consumer Financial Protection Bureau: how to create a budget and stick with it",
    href: "https://www.consumerfinance.gov/about-us/blog/budgeting-how-to-create-a-budget-and-stick-with-it/",
  },
  cfpbBankAccounts: {
    label: "Consumer Financial Protection Bureau: bank accounts",
    href: "https://www.consumerfinance.gov/consumer-tools/bank-accounts/",
  },
  cfpbRenting: {
    label: "Consumer Financial Protection Bureau: help for renters",
    href: "https://www.consumerfinance.gov/housing/housing-insecurity/help-for-renters/",
  },
  usaStateAg: {
    label: "USA.gov: how to contact your state attorney general",
    href: "https://www.usa.gov/state-attorney-general",
  },
  usaLegalAid: {
    label: "USA.gov: legal aid",
    href: "https://www.usa.gov/legal-aid",
  },
  naicAuto: {
    label: "National Association of Insurance Commissioners: what auto insurance covers",
    href: "https://content.naic.org/article/what-does-auto-insurance-cover",
  },
  naicDepartments: {
    label: "National Association of Insurance Commissioners: state insurance departments",
    href: "https://content.naic.org/state-insurance-departments",
  },
  cfpbAutoLoans: {
    label: "Consumer Financial Protection Bureau: auto loans",
    href: "https://www.consumerfinance.gov/consumer-tools/auto-loans/",
  },
  usaWills: {
    label: "USA.gov: courts, including probate court for wills and estates",
    href: "https://www.usa.gov/courts",
  },
  usaPoa: {
    label: "Consumer Financial Protection Bureau: what is a power of attorney?",
    href: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-power-of-attorney-poa-en-1149/",
  },
  cfpbHeirs: {
    label: "Consumer Financial Protection Bureau: leaving your home to children or heirs",
    href: "https://files.consumerfinance.gov/f/documents/cfpb_jith_heirs_guide.pdf",
  },
  irsStructures: {
    label: "IRS: business structures",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/business-structures",
  },
  irsStarting: {
    label: "IRS: starting a business",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/starting-a-business",
  },
  irsEin: {
    label: "IRS: get an employer identification number",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number",
  },
  irsEinApply: {
    label: "IRS: apply for an EIN online (free)",
    href: "https://www.irs.gov/ein",
  },
  sbaSteps: {
    label: "U.S. Small Business Administration: 10 steps to start your business",
    href: "https://www.sba.gov/business-guide/10-steps-start-your-business",
  },
  sbaRegister: {
    label: "U.S. Small Business Administration: register your business",
    href: "https://www.sba.gov/business-guide/launch-your-business/register-your-business",
  },
  irsSelfEmployed: {
    label: "IRS: self-employed individuals tax center",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center",
  },
  irsEstimated: {
    label: "IRS: estimated taxes",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes",
  },
  irsRecords: {
    label: "IRS: recordkeeping",
    href: "https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping",
  },
  cfpbFindAttorney: {
    label: "Consumer Financial Protection Bureau: how to find an attorney in your state",
    href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-find-an-attorney-in-my-state-en-1549/",
  },
  lscHelp: {
    label: "Legal Services Corporation: find legal aid",
    href: "https://www.lsc.gov/about-lsc/what-legal-aid/i-need-legal-help",
  },
  irsChoosePreparer: {
    label: "IRS: choosing a tax professional",
    href: "https://www.irs.gov/tax-professionals/choosing-a-tax-professional",
  },
  cfpVerify: {
    label: "CFP Board: verify a CFP professional",
    href: "https://www.cfp.net/verify-a-cfp-professional",
  },
  cfpbOwning: {
    label: "Consumer Financial Protection Bureau: owning a home",
    href: "https://www.consumerfinance.gov/owning-a-home/",
  },
  cfpbLoanEstimate: {
    label: "Consumer Financial Protection Bureau: Loan Estimate explainer",
    href: "https://www.consumerfinance.gov/owning-a-home/loan-estimate/",
  },
  ftcCarRepair: {
    label: "Federal Trade Commission: Auto Repair Basics (GovInfo)",
    href: "https://www.govinfo.gov/content/pkg/GOVPUB-FT-PURL-gpo61874/pdf/GOVPUB-FT-PURL-gpo61874.pdf",
  },
  naicConsumer: {
    label: "National Association of Insurance Commissioners: consumer resources",
    href: "https://content.naic.org/consumer",
  },
} satisfies Record<string, Source>;
