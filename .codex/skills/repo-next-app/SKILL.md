---
name: repo-next-app
description: Maintain and extend the main Next.js 14 App Router frontend in this repository. Use when editing `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, page metadata, Tailwind-driven UI, or when validating the primary app with `npm run build`. Prefer this skill for requests about the site or app unless the user explicitly names the root static prototype files.
---

# Repo Next App

## Overview

Treat `app/` as the default implementation target for this repository. The root `index.html` prototype is a separate concept and should not be treated as the live app unless the user explicitly asks for it.

## Workflow

### 1. Choose the correct surface

- Default to `app/page.tsx`, `app/layout.tsx`, and `app/globals.css`.
- Edit `index.html`, `styles.css`, or `script.js` only when the user names those files or asks to sync the prototype.

### 2. Keep responsibilities clear

- Put page structure, content, and section ordering in `app/page.tsx`.
- Update `app/layout.tsx` when the page title, meta description, or shared shell needs to change.
- Put true global styles in `app/globals.css`. Keep one-off layout and visual treatment close to the JSX with Tailwind classes.

### 3. Preserve the product feel

- Avoid falling back to generic starter styling.
- Keep mobile and desktop behavior explicit.
- Use deliberate typography, spacing, and color decisions instead of safe defaults.

### 4. Validate after meaningful changes

- Run `npm run build`.
- Re-check metadata if product name or positioning changes.

## References

Read `references/architecture.md` before structural changes or whenever the repo surfaces appear inconsistent.
