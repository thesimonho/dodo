# dodo

(pronounced "doo-doo", you're welcome)

How many times have you said to an agent "update docs"? Now you can just `/dodo`

---

Gist (rewrite and replace all):

set of skills and agents. distributed via both claude code marketplace as a plugin...

the problem: project documentation ends up being scattered. it would be cool if you were working on a project and you had a single command/skill/agent you could use that creates/manages/updates your documentation.

the plugin solves this specific scenario:

- you are a developer working on a project
- you want to create project documentation that helps different groups of users

what types of "documentation" would be useful for an open source project to actually have? specifically:

- codemaps for agents (eg `docs/codemaps/`)
- references for contributors (eg `docs/`)
- website for users (eg `docs/site/`)
- plugins and skills for users (eg `docs/plugin/`)

dodo works with sequential fallback. it will first try to update, if it doesnt exist, it will ask and create. there is only a single `/dodo [type]` command

- update: will update that documentation type
- create: if the documentation type doesn't exist, ask the user if they want to create it and asks questions to brainstorm the ideal structure for the project

the command could either be `/dodo:do [type]` (claude) or `/dodo [type]` (skills, other agents). depends on installation method. `/dodo` should work for both.

if no type is specified, it will default to updating all documentation types.

examples:

- `/dodo` (everything)
- `/dodo codemaps`
- `/dodo:do the site FAQ`

---

## Installation

Add the marketplace in Claude Code and select the plugin in the UI:

```
/plugin marketplace add thesimonho/artificial-jellybeans
```

Or install the plugin directly:

```
/plugin install dodo@artificial-jellybeans
```

or downloadable via `npx skills add thesimonho/dodo` (<https://github.com/vercel-labs/skills>)
