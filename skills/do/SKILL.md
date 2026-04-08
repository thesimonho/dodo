---
name: dodo
description: Use proactively to create and update documentation.
argument-hint: "[docs, codemaps, site]"
---

## Finding documentation

Documentation created by this plugin has a default directory. However, the user may have chosen a different location. If you cannot find the documentation, use the `dodo:find` agent to search for it. The agent should store a memory containing the location of documentation. Use that to jump directly to the relevant items.

## Task

When tasked to update multiple types of documentation, use subagents to divide the work.

If the user doesnt specify a type, default to updating all documentation types in this priority order (in case your get interrupted):

1. codemaps
2. references
3. site
4. plugin

If the user specifies a type, default to updating only that type.

See these reference files for more information on each type:

- [Codemaps](./codemaps.md)
- [References](./references.md)
- [Site](./site.md)
- [Plugin](./plugin.md)
