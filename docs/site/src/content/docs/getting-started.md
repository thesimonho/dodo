---
title: Getting Started
description: Install dodo and run it for the first time.
---

## Installation

dodo is available as a Claude Code plugin or as an npx skill. Both give you the same functionality — pick whichever fits your setup.

### Claude Code plugin

Add the marketplace, then install the plugin:

```sh
/plugin marketplace add thesimonho/artificial-jellybeans
/plugin install dodo@artificial-jellybeans
```

Skills are namespaced: `/dodo:do`, `/dodo:do codemaps`, etc.

### npx skills

```sh
npx skills add thesimonho/dodo
```

Skills are flat: `/dodo`, `/dodo codemaps`, etc.

## First run

Once installed, run the command with no arguments to update everything:

```sh
# Claude Code plugin
/dodo:do

# npx skills
/dodo
```

dodo checks each documentation type in your project. If docs exist, it updates them. If they don't, it asks whether you'd like to create them.

## Targeting a specific type

You can focus on a single documentation type:

```sh
/dodo site
/dodo codemaps
/dodo references
```

Or combine multiple types:

```sh
/dodo references and site
```

You can also target specific parts of a documentation type:

```sh
/dodo:do the site FAQ
/dodo:do add a codemap for the auth module
```

## How it works

dodo uses a sequential fallback for each documentation type:

1. **Find** — checks the default location, then agent memory, then actively searches the codebase
2. **Update** — if docs exist, updates them against the current project state
3. **Create** — if docs don't exist, asks you first, then walks through setup

It never creates documentation you didn't ask for. It never rewrites your content without telling you what changed.
