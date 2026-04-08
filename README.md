# dodo

(pronounced "doo-doo", you're welcome)

How many times have you said to an agent "update docs"? Now you can just `/dodo`

## The problem

You're working on a project. Your documentation is never up to date. There are too many people that need too many different things from your docs...

- **AI agents** need structured codemaps so they can navigate your codebase without reading every file
- **Contributors** need reference material, development guides, and plans
- **End Users** need a documentation website that teaches them how to use your app
- **Developers** want to just give their agent your code and say "make it work"

Ain't nobody got time for that.

## The solution

```
/dodo
```

It looks at what documentation you have (or don't have), and either updates it or offers to create it.

## What it manages

| Type           | Audience     | Default location | What it does                                                    |
| -------------- | ------------ | ---------------- | --------------------------------------------------------------- |
| **References** | Contributors | `docs/`          | Architecture docs, guides, plans, TODOs                         |
| **Codemaps**   | AI agents    | `docs/codemaps/` | Structured codebase maps so agents can actually find things     |
| **Site**       | End users    | `docs/site/`     | An end user documentation website deployed to GitHub Pages      |
| **Plugin**     | Developers   | `docs/plugin/`   | Turns your docs into skills that developers add to their agents |

## Installation

### Claude Code plugin

Install via the marketplace...

Add the marketplace:

```sh
/plugin marketplace add thesimonho/artificial-jellybeans
```

Add the plugin:

```sh
/plugin install dodo@artificial-jellybeans
```

Skills are namespaced: `/dodo:do`, `/dodo:do codemaps`, etc.

### npx skills

```sh
npx skills add thesimonho/dodo
```

Skills are flat: `/dodo`, `/dodo codemaps`, etc.

Both methods give you the same functionality, just different invocation syntax. Pick whichever fits your setup.

## Usage

Depending on your installation method, you can use either `/dodo [type]` or `/dodo:do [type]`.

```sh
/dodo                        # update everything
/dodo site                   # create or update the docs site
/dodo references and site    # update multiple types
/dodo:do the site FAQ        # update a specific part
```

If the documentation type doesn't exist yet, dodo asks if you want to create it and walks you through the setup. If it does exist, it updates it based on the current state of your project.

## How it works

dodo uses a sequential fallback for each documentation type:

1. **Find** — checks the default location, then agent memory, then actively searches the codebase
2. **Update** — if docs exist, updates them against the current project state
3. **Create** — if docs don't exist, asks you first, then walks through setup

It never creates documentation you didn't ask for. It never rewrites your content without telling you what changed. It does, however, have strong opinions about not letting your docs go stale.
