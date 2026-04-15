# Repo Architecture

## Primary surface

- `app/page.tsx`: current marketing-style landing page for `ExpenseFlow`.
- `app/layout.tsx`: root layout and page metadata.
- `app/globals.css`: Tailwind imports plus minimal global resets.

Use these files for most product and UI requests.

## Secondary surface

- `index.html`
- `styles.css`
- `script.js`

These root files form a separate static prototype for `LedgerDNS`. They are not wired into the Next.js app.

## Important inconsistencies

- The Next.js app and the static prototype use different brands and different product copy.
- `script.js` references a login form that does not exist in `index.html`.
- `index.html` does not load `script.js`.

Do not assume the root prototype is source of truth. Treat it as a design reference or migration source unless the user explicitly wants those files edited.

## Validation

- Use `npm run dev` for local iteration.
- Use `npm run build` for a concrete verification pass.
- Use `npm run lint` only if the repo is configured for it and the task warrants it.
