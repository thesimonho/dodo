---
title: Codemaps
description: Structured codebase maps for AI agent navigation.
---

Codemaps are structured maps of your codebase designed for AI agents. They let an agent understand your project's architecture, find the right files, and navigate between modules — without reading every file in the repository.

**Default location:** `docs/codemaps/`

## What gets generated

### Barrel index

A `docs/codemaps/README.md` that acts as a table of contents — a high-level architecture overview with a directory map linking to individual codemaps.

### Individual codemaps

One codemap per directory that has 3 or more files with meaningful logic. Each codemap includes:

- **Files table** — every file in the directory with a specific description of what it does
- **Key exports** — exported functions, classes, and types with their signatures
- **Relationships** — which modules this directory imports from and which modules use it
- **Entry point** — where an agent should start reading
- **Patterns** — any non-obvious patterns used in the module

Codemaps mirror your project's directory structure. If your project has `src/auth/`, the codemap lives at `docs/codemaps/src/auth.md`.

## External tool detection

Before generating codemaps, dodo checks for external tools that can extract structured information from your source code. These tools are faster and more accurate than reading files manually:

- **AST parsers** (ast-grep, tree-sitter, tsc) — extract exports, imports, and symbols
- **Dependency graph tools** (madge, dpdm, go list) — map inter-module relationships
- **Code analysis tools** (ctags, LSP) — symbol indexing and reference lookups

If none of these are available, dodo falls back to reading source files directly. The output is the same either way.

## Running it

```sh
/dodo codemaps
```

On first run, dodo proposes which directories should get codemaps and asks for confirmation. On subsequent runs, it detects changes — new directories, removed directories, and modified files — and updates only what's needed.

## Tips

- Keep individual codemap files under 200 lines. Dodo will split large modules into sub-codemaps automatically.
- Codemaps are designed to be regenerable. Don't store opinions, decisions, or plans in them — use [references](/dodo/guides/references/) for that.
- If dodo misses a directory you want mapped, run `/dodo:do add a codemap for src/my-module`.
