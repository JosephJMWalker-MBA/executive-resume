# Contributing

Thank you for helping improve the Professional Provenance Resume Template.

This repository follows a contributor-centered discipline inspired by **Old IBM Engineering Principles**: build systems that are understandable, maintainable, reproducible, and easy for the next competent engineer to enter.

## The Five-Minute Rule

Every architectural improvement should reduce the time required for a competent new contributor to accurately understand the system.

If a file cannot be comfortably understood in one sitting, it probably has more than one responsibility.

## Development Order

Build upward through verified layers:

1. Primitive
2. Verify
3. Composition
4. Verify
5. Section
6. Verify
7. Page
8. Verify
9. Compiler

**No layer may depend on an unverified lower layer.**

## Verification Standard

A change is not complete when it is written or committed. It is complete only after the repository returns the expected content.

Use this cycle for every change:

1. Write
2. Commit
3. Fetch
4. Verify
5. Continue

When a file is truncated, malformed, or incomplete, repair and re-verify it before building anything that depends on it.

## Renderer Guidelines

- Prefer one clear responsibility per module.
- Return an empty string when optional data is absent.
- Never assume optional arrays, objects, links, or sections exist.
- Escape user-controlled text before placing it in HTML.
- Prefer composition over large template files.
- Keep the compiler thin; rendering logic belongs in renderer modules.
- Keep `data/resume.json` as the canonical source of content.

## Before Submitting a Change

Confirm that:

- the changed file fetches back complete;
- all imports resolve;
- optional data can be omitted without throwing;
- generated HTML remains valid;
- the build remains reproducible;
- documentation matches actual behavior.

The goal is not merely to make the current artifact work. The goal is to leave the repository easier for the next contributor to understand and extend.