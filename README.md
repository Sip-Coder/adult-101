# Adult 101 (working title)

**One hub site, LMS-style, covering all the practical life skills school never taught — in one place.**

Adult 101 is a website and learning management system for young adults. Instead of hunting across dozens of blogs, videos, and forums, learners get structured courses, lessons, checklists, and quizzes on the real-world "adulting" topics nobody walks them through.

## Draft topic map: five pillars

### 1. Personal Health
Running your own day-to-day life: money, home, and transportation.
- **Money:** budgeting and money management, paying bills, banking, credit, student loans, taxes, investing
- **Housing:** renting, renters insurance, buying a first home, mortgages, property insurance, HOAs, utilities
- **Vehicles:** buying vs. leasing, car loans, car insurance, maintenance, DMV and registration, what to do after an accident
- **Upkeep:** home and car repairs

### 2. Mental Health
Staying steady when life gets stressful.
- Handling financial emergencies (lost job, surprise medical bills) without panic *(see flags)*

### 3. Family Health
Protecting the people you build a life with.
- Prenups
- Divorce basics
- Wills, powers of attorney, and beneficiaries
- Trust and estate planning

### 4. Social Health
Navigating agreements and disputes with other people.
- Contracts and leases *(see flags)*
- Small claims court and knowing your rights *(see flags)*

### 5. Professional Health
Work, career, and building something of your own.
- Starting a business
- Business structures (sole prop, LLC, etc.)
- Licenses, permits, and EINs
- Side hustle and freelance taxes
- Bookkeeping

## Open questions for the owner: topics without a clear pillar
- **Contracts and leases** and **small claims**: Social Health (dealing with others) or Personal Health (your own legal basics)?
- **Insurance claims**: spans car, home, and renters insurance, so Personal Health, or its own "when stuff breaks" module?
- **Financial emergencies**: Mental Health (coping) or Personal Health (money)?
- **Identity theft and scams**: Personal Health (money and credit) or Mental Health (safety and stress)?
- **Taxes**: Personal Health, Professional Health, or split between both?
- **Mental Health** and **Social Health** are thin with the current topics; they likely need new topics of their own.

## Future section: Build Your Personal Advisory Team
Idea from the owner: encourage learners to build a personal team of trusted professionals the same way they'd have a doctor, so they have someone to call before a big decision instead of after a mistake.
- **Attorney:** contracts, leases, prenups, wills, trusts and estate planning, disputes
- **CPA (Certified Public Accountant):** taxes, side hustle and business bookkeeping
- **CFP (Certified Financial Planner):** budgeting, investing, retirement, big purchases
- **Insurance agent or broker:** car, renters, home, and life coverage
- **Real estate agent and mortgage lender:** renting and buying a first home
- **Trusted mechanic:** car maintenance and repairs
- Others to consider: banker, therapist or counselor, career mentor

Planned guidance: how to find and vet each pro, what to bring to a first meeting, questions to ask, how fees work, and how to talk to them without it feeling intimidating.

## Status
First working version: browse the five pillars, open topics, read starter lessons, and use the advisory team page. Google and Apple sign-in, and private progress, turn on when Supabase is configured. Until then the site still runs, the sign-in buttons show **Not configured yet**, and a demo learner can save progress in this browser.

Scope, audience, tone, and the topic map are still being defined. The open questions above are unresolved on purpose.

## Run the site

Requirements: Node.js 20 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- `npm run build` then `npm start` serves the production build. `npm start` listens on `0.0.0.0` and `$PORT` (default 3000).
- `npm test` checks the catalog, the demo progress cookie format, and that the database migration enables row-level security.
- `npm run lint` runs ESLint.

You do not need API keys to read the site. Leave the Supabase lines in `.env.local` blank.

### What works with no keys

- Home, all five pillars, topic pages, starter lessons, the advisory team page, and the topic-map notes.
- Sign-in buttons for Google and Apple, labeled **Not configured yet**.
- A **demo learner**. Completed lessons and bookmarks stay in a cookie on that browser. They are not an account and they are not synced.

Set `NEXT_PUBLIC_DEMO_MODE=false` to hide the demo learner. Set it to `true` to keep the demo learner even after Supabase is configured. If the variable is unset, the demo learner appears only while Supabase keys are missing.

## Turn on Google and Apple sign-in

Accounts are free and passwordless. Supabase Auth is the only login system. The app reads these variables (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Project URL from Supabase → Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Publishable key from the same screen. This is safe to expose in the browser. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional legacy name, used only if the publishable key is empty |
| `NEXT_PUBLIC_SITE_URL` | Public origin, such as `http://localhost:3000` |
| `NEXT_PUBLIC_DEMO_MODE` | `true`, `false`, or unset (see above) |

Never put the Supabase `service_role` or secret key in a `NEXT_PUBLIC_` variable. This app does not use the service role at all.

Restart `npm run dev` after changing `.env.local`.

### 1. Create the Supabase project

Create a project at [supabase.com](https://supabase.com). Copy the project URL and the publishable key into `.env.local`.

In Authentication → URL configuration:

- Site URL: `http://localhost:3000` while you are developing, and your real origin in production.
- Redirect URLs: add `http://localhost:3000/auth/callback` and `https://YOUR_DOMAIN/auth/callback`.

The OAuth providers send the user back to Supabase first (`https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`), and Supabase then sends them to the redirect URL above. Both have to be allow-listed in the places named below.

### 2. Google

In the [Google Auth Platform](https://console.cloud.google.com/auth) for a Google Cloud project:

1. Configure the audience (who may sign in) and the branding you want on the consent screen.
2. Under Data Access, include the scopes Supabase asks for: `openid`, `.../auth/userinfo.email`, and `.../auth/userinfo.profile`. Do not add extra sensitive scopes.
3. Create an OAuth client of type **Web application**.
4. Authorized JavaScript origins: `http://localhost:3000` and your production origin (origin only, no path).
5. Authorized redirect URI: the callback shown on the Supabase Google provider page. It looks like `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`.
6. Copy the client ID and client secret into Supabase → Authentication → Providers → Google, and enable the provider.

### 3. Apple

Apple requires a paid Apple Developer account. Supabase's [Apple login guide](https://supabase.com/docs/guides/auth/social-login/auth-apple) is the checklist. In short:

1. Copy your Team ID from the Apple Developer account.
2. Create an App ID and enable Sign in with Apple. Leave the server-to-server notification URL blank. Supabase Auth does not use that endpoint.
3. Create a Services ID, for example `com.example.adult101.web`.
4. On that Services ID, set the website domain to your Supabase host (`YOUR_PROJECT_REF.supabase.co`) and the return URL to `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`.
5. Create a Sign in with Apple key and download the `.p8` file once. Store it privately. If it leaks, revoke it and create another.
6. In Supabase → Authentication → Providers → Apple, enter the Services ID, Team ID, Key ID, and the secret generated from the `.p8`. Supabase's Apple provider page includes the secret generator. Put the **Services ID first** in the client ID list if you ever add a native app ID. Supabase uses the first ID for the website flow.
7. Enable the provider.

Apple client secrets expire (six months is the maximum). Rotate the secret in the Supabase Apple provider before it lapses or sign-in starts failing.

### 4. Confirm login

With the env vars set, the sign-in page should say Google and Apple are connected, and both buttons should be clickable. After a successful sign-in you land on `/progress`.

## Progress, privacy, and the database

Browsing is public. Progress is not.

Each signed-in user's completed lessons and bookmarks are rows in `public.lesson_progress`. The migration is `supabase/migrations/20261125000000_create_lesson_progress.sql`.

Apply it in the Supabase SQL editor (paste the file and run it), or with the Supabase CLI once the project is linked (`supabase db push`).

The migration does three things that have to stay together:

1. **Grants.** `authenticated` can select, insert, and update. `anon` is revoked. New Supabase projects do not expose tables to the Data API until you grant access, so the grant is explicit.
2. **Row-level security**, forced on. Each policy uses `(select auth.uid()) = user_id` and is limited `to authenticated`. Updates include both `using` and `with check`, so a user cannot reassign a row to someone else.
3. **No service-role key in the app.** The table owner and `service_role` can bypass RLS from the Supabase dashboard. The website never uses that key. Authorization does not read `user_metadata`, because users can edit it.

A signed-in user only ever reads and writes their own rows. There is no public profile.

If sign-in works but saving progress says the table is missing, the migration has not been applied yet.

The demo learner does not write to Supabase. It stores progress in the `adult101_demo_progress` cookie.

## Lesson content and the disclaimer

Starter lessons are original writing for this site, in plain language for young adults:

- Budgeting and money management
- Renting
- Car insurance
- Wills, trusts, and estate planning
- Starting a business

Other topics from the map above are listed as **Coming soon**. They do not contain placeholder lesson text.

Every lesson links to primary public sources (IRS, CFPB, USA.gov, NAIC, SBA, FTC, and similar) and shows the same disclaimer: this is education, not legal, tax, insurance, or financial advice. Laws differ by state. The footer repeats the short form on every page.

## Project map

- `app/` — pages for the hub, pillars, topics, lessons, advisory team, sign-in, and progress
- `lib/content/` — the topic map and lesson text
- `lib/supabase/` — server client for Auth and the progress table
- `proxy.ts` — refreshes the Supabase session when keys are present, and does nothing when they are not
- `supabase/migrations/` — `lesson_progress` table, grants, and row-level security

