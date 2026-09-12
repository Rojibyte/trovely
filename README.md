# Trovely

A curated homeware & ceramics e-commerce storefront — and my personal
sandbox for learning system design.

**Live site:** [trovely-shop.vercel.app](https://trovely-shop.vercel.app)

---

## Why I built this

Trovely isn't a tutorial-follow-along. I built it to answer a question I
kept running into as a developer: _tutorials show you how to make something
work, but they rarely show you how to make the right decision when there are
three reasonable ways to do something._

So I picked the hardest, most decision-heavy slice of a typical e-commerce
app — payments, auth, and cart state — and forced myself to reason through
the trade-offs instead of copying the first Stack Overflow answer. Every
architecture note below is a decision I sat with, not a default I inherited.

This project is also documented in public. I write a running series called
**Trovely Log** on LinkedIn, covering what I built, what broke, and what I'd
do differently — including the mistakes. If you want the unfiltered version
of this README, that's where it lives.

The bigger goal: Trovely is step one. I'm using it to build the system
design instincts and this exact tech stack fluency I'll carry into a SaaS
project next, and into whatever I build after that. This isn't a one-off
portfolio piece — it's the first rep in a habit.

## Tech Stack

| Layer          | Choice                         |
| -------------- | ------------------------------ |
| Framework      | Next.js 15 (App Router)        |
| Language       | TypeScript                     |
| Database / ORM | Supabase (Postgres) + Prisma 7 |
| Auth           | Clerk                          |
| Cart state     | Zustand                        |
| Payments       | Stripe (PaymentIntents API)    |
| Styling        | Tailwind CSS + shadcn/ui       |
| Deployment     | Vercel                         |

## Design System

I wanted the store to feel like a specimen catalog, not a generic
storefront template — so the design system came before most of the code.

- **Palette:** a six-color earthy set — Parchment, Bark Ink, Moss, Ochre,
  Rust, Stone — chosen to feel warm and material, like the ceramics
  themselves.
- **Typography:** a three-font system — Fraunces for display type, Public
  Sans for body copy, JetBrains Mono for prices and catalog numbers — giving
  product data a deliberate, almost archival feel.
- **Catalog language:** sequential "No. 001" index numbers carried across
  the site, reinforcing the specimen-catalog concept.
- **Two hard rules I hold myself to:** Rust appears only once per view, as
  the single primary call-to-action. Moss is reserved exclusively for
  interactive elements. Constraints like these forced more deliberate design
  decisions instead of "whatever color looks fine here."

## Features

- Product catalog with filtering and sorting
- Product detail pages
- Persistent cart (survives refresh, hydration-safe)
- Clerk-based authentication with custom sign-in/sign-up pages
- Custom checkout flow using Stripe PaymentIntents
- Webhook-driven order creation (`payment_intent.succeeded`)
- Order confirmation page

## Architecture Decisions (and what I learned from each)

These are the calls that taught me the most — the system design thinking
behind them, not just the fact that they work.

**PaymentIntents over Checkout Sessions.** Stripe's Checkout Sessions are
simpler and get you to "it works" faster, but redirect the user to a
Stripe-hosted page. I wanted full control over the checkout UI, so I used
PaymentIntents instead and built the form myself. Trade-off: more integration
surface area to get right, in exchange for a checkout that actually feels
like part of the site.

**Prices are never trusted from the client.** Early on I had to internalize
a rule that seems obvious in hindsight but isn't when you're moving fast:
never let client-supplied data determine what someone gets charged. The
checkout route re-derives every price server-side from product IDs alone.
Client-side price values exist for display, never as a source of truth.

**Zustand + SSR hydration.** This one taught me the most about how
Next.js's server/client split actually works under the hood. The server has
no `localStorage`, so Zustand's `persist` middleware caused hydration
mismatches by default. The fix — `skipHydration: true` with a manual
rehydration step gated by a `hasHydrated` flag — forced me to actually
understand _why_ hydration mismatches happen, not just patch around the
symptom. (I also learned the hard way that `onFinishHydration` breaks under
React Strict Mode's double-mount in development — a good reminder that dev
mode and production don't always behave the same.)

**Serialization at the data-access boundary.** Prisma's `Decimal` type isn't
serializable across the server/client boundary — a constraint I didn't know
existed until I hit it. All product data now gets normalized into a plain
`SerializedProduct` shape before it reaches a client component, which
taught me to think of the server/client boundary as a real API contract,
not just a folder structure.

**Stripe webhooks use raw request text.** Signature verification requires
the unparsed request body, so the webhook handler reads `request.text()`
rather than `request.json()`. A one-line detail, but a good example of how
reading the docs closely (instead of pattern-matching to a more familiar
API) actually matters.

## Getting Started

```bash
git clone <repo-url>
cd trovely
npm install
```

Create a `.env` file with:

```
DATABASE_URL=            # Supabase pooled connection, port 6543
DIRECT_URL=              # Supabase direct connection, port 5432 (migrations)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

```bash
npx prisma generate
npx prisma migrate dev
npm run dev
```

## What I'm Still Working On

I'd rather show an honest in-progress list than pretend this is a finished,
airtight product:

- [ ] Idempotency guard on webhook-driven order creation (Stripe can
      redeliver the same event more than once — my handler doesn't yet
      guard against processing it twice)
- [ ] Unit tests around server-side price verification, since that's the
      one function where a bug would have real financial consequences
- [ ] Loading/empty states pass across cart, PDP, and checkout
- [ ] Lighthouse / image optimization pass

## Follow Along

I document this build in public in the **Trovely Log** series on LinkedIn —
architecture decisions, bugs, and the reasoning behind both. If you're
evaluating this as a portfolio piece: the code here is one part of the
story, the log is the other.
