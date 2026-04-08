---
title: FAQ
description: Frequently asked questions about dodo.
---

### Does dodo create documentation without asking?

No. If a documentation type doesn't exist yet, dodo asks whether you'd like to create it before doing anything. It never generates docs you didn't approve.

### What if I already have documentation?

dodo works with what you have. It checks default locations first, then searches the codebase. If your docs live somewhere non-standard, it remembers the location for future runs.

### Will dodo overwrite my content?

For factual errors (wrong file paths, outdated examples), dodo fixes them directly. For subjective content (plans, architectural opinions), it flags them for your review and explains what changed. It never rewrites your voice or restructures documents without asking.

### What's the difference between the Claude Code plugin and npx skills?

Both give you the same functionality. The difference is installation and invocation syntax:

| | Claude Code plugin | npx skills |
|---|---|---|
| **Install** | `/plugin install dodo@artificial-jellybeans` | `npx skills add thesimonho/dodo` |
| **Invoke** | `/dodo:do` | `/dodo` |
| **With args** | `/dodo:do site` | `/dodo site` |

### Can I use dodo on a project that already has a docs site?

Yes. Even if your site uses a generator dodo doesn't recommend by default (Hugo, MkDocs, Sphinx, etc.), it works with whatever is already there. It won't suggest migration unless you ask.

### How does dodo know what to update?

dodo compares your documentation against the current state of your codebase. It checks for dead file paths, outdated code examples, stale architecture descriptions, completed TODOs, and missing coverage for new features.

### What are codemaps for?

Codemaps are structured maps of your codebase designed specifically for AI agents. They let an agent understand your project's architecture without reading every file. Think of them as a table of contents that tells an agent where to look and how modules connect.

### Can I run dodo on just part of my docs?

Yes. You can target specific types (`/dodo site`), combinations (`/dodo references and site`), or even specific pages (`/dodo:do the site FAQ`).
