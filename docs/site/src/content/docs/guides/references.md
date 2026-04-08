---
title: References
description: Contributor-facing documentation, guides, and plans.
---

References are contributor-facing documentation — architecture decisions, development guides, project plans, and anything else that helps humans understand and contribute to your project. They capture knowledge that isn't derivable from reading the code alone.

**Default location:** `docs/`

## What counts as a reference

References vary by project. Common types include:

- **Architecture decision records (ADRs)** — why a technical decision was made
- **Development guides** — how to set up, build, test, deploy
- **Project plans and roadmaps** — what's being built and why
- **TODO lists** — tracked work items and priorities
- **Internal specs** — API contracts, data models, protocol definitions
- **Troubleshooting guides** — known issues and their solutions
- **Runbooks** — operational procedures for services

## Running it

```sh
/dodo references
```

On first run, dodo analyzes your project and suggests 3-5 reference docs based on what it finds — a deployment guide if you have a Dockerfile, a testing guide if you have a complex test setup, an architecture overview if you have multiple packages. You choose which ones to create.

On subsequent runs, dodo cross-references every existing doc against your current codebase to find:

- Dead file paths that no longer exist
- Outdated code examples that don't match the implementation
- Stale architecture descriptions
- Completed TODOs still listed as pending
- New features with no documentation

Factual errors are fixed directly. Stale opinions or plans are flagged for your review.

## Tips

- References are your documentation, not dodo's. It respects your voice and structure — updates are surgical fixes, not rewrites.
- A `docs/README.md` index is maintained automatically, linking to all reference docs.
- Root-level files like `CONTRIBUTING.md` stay at the root. Dodo won't move them.
