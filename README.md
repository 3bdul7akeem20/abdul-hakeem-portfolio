# Abdul Hakeem — portfolio

A personal site for a data and MIS analyst: an oversized name, a technical
grid-and-gradient identity built from typography and CSS rather than
photography, case-study cards, an about page with the full timeline, and a
contact section with an email-draft form.

There are no images in the project. The identity is an `AH` monogram, fine
rules, subtle colour fields and two small CSS/SVG patterns (`grid-lines`,
`dot-grid`), so nothing on the site depends on a photo, screenshot or mockup.

## Run it

```sh
bun install
bun run dev        # http://localhost:5173
bun run typecheck  # tsc --noEmit
bun run build      # dist/client (assets) + dist/portfolio/index.js (Worker)
```

Alternatively, use `npm install`, `npm run dev`, `npm run typecheck` and
`npm run build`.

## Structure

- `src/data/site.ts` is the whole site: identity and contact details,
  `projects` (each with the case-study sections), `capabilities`,
  `skillGroups`, `experience`, `recognition`, `education`, `learning`,
  `languages` and `interestedIn`. Editing copy should not require touching a
  page component.
- `src/app/pages/*` contains `Home`, `About`, `Work` and `NotFound`.
  `/work/:slug` renders operational case studies with overview, problem,
  contribution, approach, deliverables and status. The NielsenIQ client-account
  entry uses a shorter context, responsibilities and approach layout.
- `src/app/components/` holds the shell (`Nav`, `Footer`, `Preloader`), the
  `Logomark` monogram, `WorkCard`, and `motion.tsx` — the reusable animation
  pieces (masked line reveals, scroll reveals, magnetic buttons).
- `src/styles.css` holds the tokens: paper canvas, ink text, one electric
  accent, Bricolage Grotesque for display type. Everything rounded is a
  squircle via `corner-shape`; true circles use `.round`.
- `src/worker/index.ts` serves initial HTML with route-specific SEO/social
  metadata and returns HTTP 404 for unknown page paths. Asset requests pass
  through to the asset binding.
- The contact form opens a prefilled email draft on the visitor's device.
  There is no email delivery service configured. The retired `/api/contact`
  endpoint returns HTTP 503 to avoid falsely acknowledging a message.

Motion respects `prefers-reduced-motion`, the preloader is skipped for reduced
motion and when storage is unavailable, and routes carry their own document
titles, descriptions, canonical URLs and Open Graph metadata. Update
`publicOrigin` in `src/data/metadata.ts` when changing the public URL.

## Content rules

The copy is deliberately restrained: no invented metrics, no testimonials, and
no phone number or home address. Client names are limited to those on the CV:
the Ejadah assignment at Dubai Hills Mall, and Pets@Home as a NielsenIQ client
account. Case studies separate what was delivered from what was requested, and
the Digital PPM page distinguishes its deployed web workflow from planned
offline synchronisation. Unverified QAQC implementation claims are omitted.

Pets@Home is client account experience from the NielsenIQ role, not academic
work. Its entry names NielsenIQ as the employer and Pets@Home as the client,
claims only the responsibilities the CV records, and lists no tools, findings or
outcomes that are not verified for that account. The account assignment dates
are not assumed to equal the full NielsenIQ employment period.

## Deploy with Freebuff Sites

`deploy.json` points at the build output. After building, deploy through the
original portfolio's Freebuff Sites project only when its ownership and site ID
are confirmed in the connected account. Do not create a replacement project or
overwrite another site. Do not re-enable a direct-send
contact form unless a working mail provider and delivery confirmation are
configured and tested. Until then, visitors can send from their email apps.

Before public launch, confirm education award details, client-account-specific
dates and duties, the Digital PPM deployment's formal usage status, and that
the public contact email is reachable. No CV download is offered until a
current, intentionally public PDF is provided.
