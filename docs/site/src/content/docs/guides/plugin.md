---
title: Plugin
description: Turn your project into skills for AI agents.
---

The plugin documentation type scaffolds and maintains a Claude Code plugin, a Vercel npx skills package, or both. It handles the meta-problem: helping your project distribute its own AI-powered skills and agents.

**Default location:** `docs/plugin/`

## Two ecosystems

dodo supports two distribution ecosystems. Both can coexist in the same repository.

### Claude Code plugins

- Distributed via marketplace repositories
- Installed with `/plugin install plugin-name@marketplace-repo`
- Skills are namespaced: `/plugin-name:skill-name`
- Supports skills, agents, hooks, and MCP server configurations

### Vercel npx skills

- Distributed via the GitHub repository itself
- Installed with `npx skills add owner/repo`
- Skills are flat: `/skill-name`
- Supports skills only

## What makes a good skill

Skills are not documentation. A site page explains _to a human_ how something works. A skill instructs _an agent_ on how to help a developer work with something.

A good skill:

- **Encodes project conventions** that aren't obvious from reading a single file
- **References real files as templates** instead of describing patterns abstractly
- **Includes guardrails** — what the agent should _not_ do, common mistakes to avoid
- **Stays actionable** — every sentence tells the agent what to do, where to look, or what to avoid

## Running it

```sh
/dodo plugin
```

On first run, dodo:

1. Asks which ecosystems to support (Claude Code, npx skills, or both)
2. Walks through naming for the plugin and each skill
3. Scaffolds the directory structure
4. Creates `plugin.json` and `SKILL.md` files
5. Suggests skills based on your project (e.g., `new-endpoint` for API projects, `new-component` for component libraries)

On subsequent runs, dodo checks frontmatter currency, description accuracy, structural consistency, and suggests new skills for features that have been added since the last update.

## Tips

- The `description` field in your SKILL.md frontmatter is the most important text in the file — it determines whether Claude ever invokes the skill.
- Skills are prompts. Write the body as clear, structured instructions with concrete steps.
- Always show both invocation commands (namespaced and flat) when naming skills.
