# Codemaps

Default directory: `docs/codemaps/`

Codemaps are structured maps of the codebase designed for AI agents. They let an agent understand project architecture, find the right files, and navigate between modules — without reading every file in the repository.

## Structure

### Barrel index

`docs/codemaps/README.md` is the entry point. It acts as a table of contents for all codemaps in the project.

Format:

```markdown
# Codemaps — {Project Name}

{2-3 sentence architecture overview: what the project does, the main technology stack, and the high-level module boundaries.}

## Architectural patterns

- {Pattern 1: e.g., "Event-driven message bus connecting all services"}
- {Pattern 2: e.g., "Repository pattern for all database access"}

## Directory Map

| Directory   | Description                                  | Codemap               |
| ----------- | -------------------------------------------- | --------------------- |
| `src/auth/` | OAuth2 authentication and session management | [auth](./src/auth.md) |
| `src/api/`  | REST API route handlers and middleware       | [api](./src/api.md)   |
| ...         | ...                                          | ...                   |

## How to use these codemaps

Start here. Find the module relevant to your task in the table above, then read its codemap for file-level detail. Each codemap lists every file, its purpose, key exports, and how it connects to other modules.
```

### Subdirectories

Mirror the project's own directory structure. If the project has `src/auth/`, the codemap lives at `docs/codemaps/src/auth.md`. This makes it trivial for agents to find the codemap for any source directory.

### Granularity rule

Create one codemap per directory that has **3 or more files with meaningful logic**. Skip directories that only contain:

- Config files (e.g., a lone `tsconfig.json`)
- Generated output (e.g., `dist/`, `build/`)
- Vendored dependencies (e.g., `vendor/`, `node_modules/`)
- Test files — unless the project has a dedicated testing module worth mapping

### Size limit

Keep individual codemap files under 200 lines. If a module is larger, split into sub-codemaps and link between them. This saves you from having to read through a large file to find the right one.

## Content specification

Each codemap file should contain the following sections. Use this as a template:

```markdown
# {Module Name}

{1-2 sentence summary of what this module does and why it exists.}

## Files

| File           | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| `handler.ts`   | Processes incoming webhook events and dispatches to the correct service |
| `validator.ts` | Schema validation for webhook payloads using Zod                        |
| ...            | ...                                                                     |

## Key exports

| Symbol              | File           | Description                                                                 |
| ------------------- | -------------- | --------------------------------------------------------------------------- |
| `WebhookHandler`    | `handler.ts`   | Main class — instantiated once at app startup, processes all webhook events |
| `validatePayload()` | `validator.ts` | Called by the handler before processing. Returns a typed payload or throws. |
| ...                 | ...            | ...                                                                         |

## Relationships

- **Imports from**: `src/auth/` (session tokens), `src/database/` (event storage)
- **Used by**: `src/api/webhooks.ts` (route handler), `src/workers/retry.ts` (dead letter queue)

## Entry point

Start with `handler.ts` — it's the central dispatch for this module. Everything else is called from there.

## Patterns

{Only include this section if the module uses a non-obvious pattern.}

- Uses the chain-of-responsibility pattern for webhook processing. Each handler in `processors/` implements `WebhookProcessor` and is registered in `handler.ts`.
```

### Description quality

Descriptions must be specific enough that an agent can find the right file without reading it.

- Bad: "Handles authentication"
- Good: "OAuth2 token refresh logic and session management for the REST API"
- Bad: "Utility functions"
- Good: "String sanitization, URL normalization, and retry-with-backoff helper used across all API clients"

## Create flow

1. Scan the full project directory structure. Build a mental model of the project layout.
2. Identify which directories warrant codemaps using the granularity rule above.
3. Propose the codemap structure to the user as a directory tree showing which codemaps will be created.
4. Ask for confirmation. The user may want to include or exclude specific directories.
5. Generate the barrel index first — this forces you to articulate the project's architecture up front.
6. Generate individual codemaps. Use subagents to parallelize where possible, but ensure each subagent has the barrel index as context so descriptions are consistent.

## Update flow

1. Read the existing barrel index to understand current coverage.
2. Compare against the current project structure:
   - **New directories**: directories with 3+ logic files that don't have a codemap yet
   - **Removed directories**: codemaps for directories that no longer exist
   - **Changed directories**: directories where files have been added, removed, renamed, or significantly modified since the codemap was written
3. For changed directories: re-read the source files and update the codemap. Pay attention to new exports, changed relationships, and renamed files.
4. For new directories: create new codemap files following the content specification.
5. For removed directories: delete the codemap file and remove its entry from the barrel index.
6. Update the barrel index to reflect all changes.
7. Preserve any hand-written notes or custom sections the user has added. Look for comments, non-standard sections, or content that doesn't match the template — this is intentional and should be kept.

## Principles

- Codemaps are for agents, not humans. Optimize for machine readability — be precise, structured, and exhaustive rather than narrative.
- Use relative paths from the project root everywhere.
- When in doubt about whether to include something, include it. An agent that finds too much information can filter; an agent that finds nothing is stuck.
- Codemaps should be regenerable. Don't store opinions, decisions, or plans in codemaps — that's what references are for.
