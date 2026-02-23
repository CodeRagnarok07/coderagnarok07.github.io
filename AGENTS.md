# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` holds Astro routes (e.g. `src/pages/index.astro`).
- `src/components/` contains UI building blocks, split into `layouts/`, `sections/`, and `ui/`.
- `src/styles/` is for global styles; Tailwind is the primary styling system.
- `src/assets/` for images and static assets imported by components.
- `public/` for static files served as-is (favicons, robots, etc.).
- `src/content/` is used for content collections (Astro content APIs).

## Build, Test, and Development Commands
- `npm run dev`: start the local dev server (Astro).
- `npm run build`: type-check + production build (`astro check && astro build`).
- `npm run preview`: serve the production build locally.
- `npm run astro -- <command>`: run Astro CLI commands directly.

## Coding Style & Naming Conventions
- Use 4-space indentation in `.astro` files (matches current files).
- Prefer PascalCase for components and section names (e.g. `HomeHero.astro`).
- Keep Tailwind utility classes in `class:list` arrays when dynamic (see `src/components/ui/Card.astro`).
- TypeScript is enabled; keep types close to Astro props (`interface Props { ... }`).

## Testing Guidelines
- No automated test framework is configured in this repo.
- If you add tests, document the framework and add a script in `package.json`.

## Commit & Pull Request Guidelines
- Git history mixes Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`) and informal messages.
- Prefer Conventional Commit prefixes for new work to improve readability.
- PRs should include a short summary of changes, screenshots or recordings for UI changes, and a linked issue or context when available.

## Configuration Notes
- Astro + Tailwind + TypeScript are the core stack (`astro.config.mjs`, `tailwind.config.mjs`).
- `src/env.d.ts` defines typings for Astro; keep it updated if adding env vars.

## Interface Behavior (Homepage Layout)

The site has **two distinct layout/scroll behaviors** by viewport. Layout and scroll changes must preserve both.

| Viewport | Behavior | Scroll |
|----------|----------|--------|
| **Desktop** (md and up) | Acts as a **landing page**: sections stacked vertically in a single column. | **Main** scrolls vertically (mouse wheel or trackpad). |
| **Mobile** | Acts as a **finger slider**: horizontal swipe between sections, vertical scroll within the current section. | **Main** scrolls horizontally (swipe between sections). **Section** scrolls vertically (wheel or finger within current section). |

Implementation lives in `src/components/layouts/index.astro`: `main` uses responsive overflow and flex direction (`flex-row` / `md:flex-col`). When changing layout, global overflow, or `prefers-reduced-motion`, ensure desktop vertical scroll (main) and mobile horizontal (main) + vertical (section) scroll still work.

## Tech Stack

- Astro 5 (sitio principal)
- TypeScript 5
- Tailwind CSS 4 (con plugin Vite @tailwindcss/vite)
- React 19 dentro de Astro (@astrojs/react, componentes .jsx)
- Sass para estilos adicionales
- Integraciones Astro: Starlight, Sitemap, MDX, RSS
- Content Collections de Astro (src/content/)

## Skills

Project skills live in `.agents/skills/`. Invoke the relevant skill when the task matches its trigger.

| Skill | When to use |
|-------|-------------|
| `changelog-generator` | Release notes, changelogs from git history, product update summaries |
| `frontend-design` | Build landing pages, marketing sites, web components, or beautify UI with distinctive aesthetics |
| `git-commit` | Commit changes, create conventional commits, or user says "/commit" |
| `interface-design` | Dashboards, admin panels, apps, tools (not marketing/landing) |
| `skill-creator` | Create a new skill, add agent instructions, or document patterns for AI |
| `skill-sync` | Update skill metadata, regenerate Auto-invoke tables, or run `./.agents/skills/skill-sync/assets/sync.sh` |
| `tailwind-theme-builder` | Tailwind v4 + shadcn/ui setup, dark mode, or fix @theme/colors/tw-animate issues |
| `tailwindcss` | Styling with utilities, responsive design, theme variables, Tailwind v4 reference |
| `vercel-composition-patterns` | Refactor boolean props, compound components, React 19 patterns, component APIs |
| `vercel-react-best-practices` | React/Next.js performance, data fetching, re-renders, bundle size |
| `web-design-guidelines` | Review UI, accessibility audit, check site against best practices |
| `web-design-methodology` | Production HTML/CSS: BEM, responsive, a11y, tokens, dark mode (the HOW) |
| `web-design-patterns` | Section patterns: heroes, cards, CTAs, trust signals, testimonials (pair with methodology) |

### Auto-invoke Skills

When performing these actions, ALWAYS invoke the corresponding skill FIRST:

| Action | Skill |
|--------|-------|
| After creating/modifying a skill | `skill-sync` |
| Creating new skills | `skill-creator` |
| Regenerate AGENTS.md Auto-invoke tables (sync.sh) | `skill-sync` |
| Troubleshoot why a skill is missing from AGENTS.md auto-invoke | `skill-sync` |
