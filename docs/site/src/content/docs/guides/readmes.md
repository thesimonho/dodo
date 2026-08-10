---
title: READMEs
description: Per-directory README files that give AI agents local context.
---

A directory's `README.md` is the context an agent needs to work inside that directory. It explains what the directory is for, what each file does, and how it connects to the rest of the project — so an agent can navigate without reading every file.

**Default location:** alongside the code, one per meaningful source directory.

The README lives in the directory it describes. `src/auth/README.md` describes `src/auth/`. There is no separate index directory and no mirrored tree to keep in sync: an agent that opens a directory has already found its documentation, and a directory that moves or is deleted takes its README with it.

## What gets generated

### Root README

Your project's root `README.md` keeps its normal job and gains a short project-layout table naming the top-level directories, so an agent knows where to go next. Nested READMEs are not linked from the root — being in the directory is how they're found.

### Directory READMEs

One `README.md` per directory that has 3 or more files with meaningful logic, or fewer files whose purpose isn't obvious from their names. Each one includes:

1. High level summary of what the directory is for
2. Important notes about implementation that may be hidden or non-obvious
3. Prior decisions that should not be reversed without an explanation
4. How/where this directory is used within the larger project

## Running it

```sh
/dodo readmes
```

On first run, dodo proposes which directories should get a README and asks for confirmation. It flags directories that already have one so you know they'll be extended rather than replaced.

## Tips

- If dodo misses a directory you want documented, run `/dodo:do add a readme for src/my-module`.
