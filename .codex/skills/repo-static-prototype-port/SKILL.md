---
name: repo-static-prototype-port
description: Work with this repository's root static prototype and port it into the Next.js app when needed. Use when editing `index.html`, `styles.css`, or `script.js`, when the user asks to translate static HTML/CSS into `app/`, or when reconciling the root `LedgerDNS` prototype with the Next.js `ExpenseFlow` app.
---

# Repo Static Prototype Port

## Overview

Treat the root HTML and CSS as a standalone prototype. Use it as a migration source, visual reference, or direct edit target only when the request clearly involves those files.

## Decision rules

### 1. Decide whether to edit or port

- If the user names `index.html`, `styles.css`, or `script.js`, edit those files directly.
- If the user asks for site changes without naming files, prefer implementing them in `app/`.
- If the user asks to sync, migrate, or convert the prototype, port the relevant sections into JSX and Tailwind-friendly styling.

### 2. Reconcile brand differences before mixing copy

- The root prototype is `LedgerDNS`, focused on domain expense management.
- The Next.js app is `ExpenseFlow`, focused on business expense management.
- Keep the chosen brand consistent within a single change set.

### 3. Port intentionally

- Map sections before rewriting them.
- Convert semantic HTML sections into clean JSX structure.
- Move reusable visual rules into `app/globals.css` only when they are truly global.
- Keep one-off styling close to the target component or page.

### 4. Handle JavaScript carefully

- Treat `script.js` as disconnected unless the request explicitly links it into `index.html` or ports its behavior.
- Do not preserve dead JavaScript by default during migration.

## References

Read `references/mapping.md` before porting sections or trying to reconcile the static and Next.js versions of the product.
