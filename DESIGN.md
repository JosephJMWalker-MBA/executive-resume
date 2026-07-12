# Design Principles

This repository optimizes for **truth, reproducibility, clarity, and contributor comprehension** over visual novelty.

The resume is not treated as a static document. It is a publication generated from structured professional evidence.

## Old IBM Engineering Principles

This repository uses the phrase **Old IBM Engineering Principles** for a practical engineering tradition: build systems that are rigorous, understandable, maintainable, and easy for the next competent contributor to enter.

The phrase is used as an engineering reference point, not as a claim that IBM published this exact list under this exact title.

### The Five-Minute Rule

Every architectural improvement should reduce the time required for a competent new contributor to accurately understand the system.

If a file cannot be comfortably understood in one sitting, it probably has more than one responsibility.

### Contributor Success

A system is not fully engineered if only its original builder can safely change it.

Architecture, naming, documentation, and module boundaries should help the next engineer become productive quickly.

### Small, Composable Parts

Prefer small modules with one clear responsibility over large files that combine orchestration, data access, rendering, and policy.

### Verify Every Write

A successful write request is not proof of a correct repository state.

Use the cycle:

```text
write -> commit -> fetch -> verify -> continue
```

### Preserve the Reasoning

Documentation should explain not only what the repository does, but why important architectural decisions were made.

## Evidence-Centered Principles

1. Evidence before claims.
2. Truth over embellishment.
3. Structured data is the source of truth.
4. Presentation layers are replaceable.
5. Generated artifacts should not be edited by hand.
6. Human review remains part of publication.
7. Version history is part of the evidence.
8. The repository should demonstrate the engineering principles described by the resume.

## Publication Pipeline

```text
structured professional evidence
    -> validation
    -> HTML generation
    -> print styling
    -> PDF rendering
    -> visual review
    -> committed history
```

The PDF is an output.

The repository is the auditable implementation.
