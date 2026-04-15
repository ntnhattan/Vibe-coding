# Prototype Mapping

## Static prototype sections

- Header with logo, nav, and demo CTA
- Hero with product headline and supporting bullets
- Snapshot cards with spend, risk, and savings metrics
- Features grid
- Pricing section
- FAQ section
- Final CTA

## Current Next.js app sections

- Header with brand chip and CTA
- Hero with finance operations positioning
- Dashboard summary card
- Feature cards
- Final CTA section

## Porting guidance

- Port structure first, then copy, then visual refinement.
- Preserve responsive behavior from the target surface instead of copying CSS mechanically.
- Convert repeated visual patterns into reusable Tailwind patterns only after the JSX structure is stable.

## Known traps

- The brands do not match across surfaces.
- The static prototype has more sections than the current Next.js page.
- `script.js` is currently orphaned and should not be assumed to work.
