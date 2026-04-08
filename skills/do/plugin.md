# Plugin and Skills

Default directory: `docs/plugin/`

There are 2 main ecosystems that must be supported:

The claude code marketplace/plugin style

this requires a .claude-plugin/plugin.json file

The vercel npx skills style

this can use the same .claude-plugin/plugin.json file

the name in the plugin.json file will be your plugin name and the namespace that will be used for claude code skills.

## Skills

the MOST important thing to make these 2 ecosystems work together is the naming convention for skills. npx skills wont use namespaces, but claude code plugin will require them.

claude code will use the directory name as the skill name (namespaced), but npx skills will use the frontmatter name.

```
| docs
|   | plugin
|   |   | skills
|   |   |   | my-new-skill
|   |   |   |   | SKILL.md (frontmatter name: other-skill)
|   |   |   |   | ...
```

If the user installs as a plugin, and you name the plugin `dodo`, then the skill be called with `/dodo:my-new-skill` in claude code. If you install the skills by themselves, it will be called with `/other-skill` in other agents (npx skills), or fall back to the directory name if theres no frontmatter name. name skills carefully

## Agents

agents are only supported by claude code plugins. they follow the same naming convention as skills eg `dodo:my-agent`

## Create

scaffold the directory structure for the user based on the layout information above. ask them what they want skills to be called, and make sure you tell them how it will actually end up being called by end users

remind them that if they create a claude code plugin, they will also need to have a marketplace repository so end users can install the plugin

make sure all agents and skills have extensive frontmatter. web search the up to date frontmatter documentation as new fields get added constantly

## Update

keep frontmatter up to date as the project evolves
