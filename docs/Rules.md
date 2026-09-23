# Sheesh Exports — Rules: Git Workflow, Coding Standards & Conventions

Companion documents: `PRD.md`, `Architecture.md`, `FrontendRoutes.md`, `Design.md`, `Phase.md`.

This is the team's standing rulebook: how branches are named, how commits are written, how PRs are reviewed, form/UX conventions every form must follow, and naming conventions across the codebase. Treat every rule here as binding unless a PR explicitly justifies an exception.

---

## Git Workflow — Branching, Commits, PR Process

### Branching Model (trunk-based with short-lived feature branches)

```
main  # always deployable, protected, production
 └─ develop  # integration branch, deployed to staging
     ├─ feature/<ticket-id>-desc  # e.g. feature/SE-104-rfq-form
     ├─ fix/<ticket-id>-short-description
     ├─ chore/<short-description>  # tooling, deps, config
     ├─ refactor/<short-description>
     └─ hotfix/<ticket-id>-desc  # off main, for prod emergencies
```

**Rules:**
- `main` and `develop` are protected — no direct pushes, PR + at least 1 review required, CI must pass.
- Feature branches are cut from `develop`, kept short-lived (merge within days, not weeks) — rebase on `develop` regularly to avoid drift.
- `hotfix/*` branches off `main`, merged back into **both** `main` and `develop` immediately after deploy.
- Release: `develop` → `main` via a PR/tag when a batch of features is staging-verified; tag `vX.Y.Z` on `main` on merge.

### Commit Convention — Conventional Commits
```
<type>(<scope>): <short summary>

[optional body]
[optional footer: BREAKING CHANGE / Closes #123]
```
**Types:** `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`, `perf`, `ci`. **Scope examples:** `feat(rfq): add multi-step quote form`, `fix(checkout): correct razorpay signature verification`, `chore(deps): bump next to 15.x`. Enforced via `commitlint` + `husky` `commit-msg` hook.

### Pull Request Rules
- PR title mirrors commit convention. PR description uses a template: **What / Why / Screenshots (for UI changes, both light & dark mode) / Testing done / Related ticket link**.
- CI pipeline on every PR: lint → typecheck → unit tests → build. Must be green before merge is enabled.
- Minimum 1 approving review; author cannot self-merge except for `chore`/`docs`-only trivial changes on solo-dev phases.
- Squash-merge into `develop` (keeps history readable); merge commit (no squash) when promoting `develop` → `main` (preserves feature history at release granularity).
- Delete branch on merge.

### Pre-commit / Pre-push Gates (`husky` + `lint-staged`)
`pre-commit`: `eslint --fix`, `prettier --write` on staged files, `tsc --noEmit` on touched packages. `commit-msg`: `commitlint`. `pre-push` (optional, CI-mirrored): run unit test suite for changed packages only (fast feedback).

### Environment/Branch → Deployment Mapping
| Branch | Environment | Trigger |
|---|---|---|
| `feature/*` | Ephemeral preview deploy (Vercel preview URL) | On PR open/update |
| `develop` | Staging | Auto-deploy on merge |
| `main` | Production | Auto-deploy on merge/tag, with a manual approval gate for the backend/DB migration step |


---

## Form UX Rules (apply to every form in the product)

- Every submit button shows a loading spinner state and is disabled during submission (prevents double-submit — critical for RFQ/order/payment forms).
- Server validation errors map back to specific fields by name (Express returns `{ field, message }[]`), displayed inline, not just as a toast.
- Multi-step forms persist progress to the relevant Redux slice (the State Management section in Architecture.md) so a refresh/navigation doesn't lose data.
- All forms are keyboard-navigable and label-associated (`htmlFor`) for accessibility.

---


---

### Naming Conventions
- Files/components: `PascalCase.tsx` for components, `camelCase.ts` for utilities/hooks/slices.
- API routes: kebab-case (`/export-markets`), plural nouns for collections.
- DB tables: Prisma model names PascalCase singular (`Product`), Prisma maps to `snake_case` plural table names in the actual DB via `@@map` if the team prefers conventional SQL naming — decide once and apply consistently.
- Redux slice names match the domain (`cartSlice`, `authSlice`) — action types auto-namespaced by RTK.

---

## Code Quality Gates

- `eslint` + `prettier` enforced on every file, run via `husky` pre-commit hook combined with `lint-staged` (staged files only, for fast commits).
- `tsc --noEmit` run on touched packages before commit.
- `commitlint` enforces the Conventional Commits format above on every commit message.
- CI (GitHub Actions) re-runs lint, typecheck, tests, and build on every PR — this is the authoritative gate, local hooks are a fast first pass, not a substitute.
- No direct pushes to `main` or `develop` — every change goes through a reviewed PR per the rules above.
