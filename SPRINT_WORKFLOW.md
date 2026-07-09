# Noteworthy Sprint Workflow

This repository is designed to make resume updates a normal part of engineering practice.

A resume update should happen at the end of a noteworthy sprint, not only when an application deadline appears.

## What Counts as a Noteworthy Sprint?

A sprint is resume-worthy when it creates durable evidence:

- a shipped production feature
- a public release
- a new publication or disclosure
- a meaningful validation milestone
- a new credential or certificate
- a major architectural change
- a deployed system integration
- a measurable improvement in reliability, accuracy, security, or usability
- a public demo, artifact, repository, or written explanation

## The Sprint Closeout Question

At the end of each sprint, ask:

> What evidence did this sprint produce that future readers should be able to verify, understand, or ask about?

If the answer is clear, update `data/resume.json`.

If the answer is not clear, document the work elsewhere and wait until it becomes evidence.

## Update Sequence

1. Identify the evidence created by the sprint.
2. Decide whether it belongs in the executive resume, technical CV, portfolio, or project-specific documentation.
3. Add or update the relevant object in `data/resume.json`.
4. Regenerate the HTML.
5. Render the PDF.
6. Review the output visually.
7. Commit the change with a clear message.

## Commit Message Pattern

Use commit messages that describe the evidence, not just the formatting.

Good examples:

```text
Add Hermeneia validation milestone
Add Technical Disclosure Commons publication
Update systems portfolio with OCR pipeline
Add IBM AI Engineering certificate
```

Avoid vague messages:

```text
Update resume
Fix stuff
More changes
```

## Truth Rule

Metrics should reflect the state of the work at the time of publication.

If Hermeneia has 998 passing automated tests when the resume is submitted, the resume says 998.

If it passes 1,000 later, that becomes a later commit.

## Why This Matters

The resume becomes a living publication of professional evidence.

The commit history becomes a provenance trail.

The goal is not to embellish accomplishments. The goal is to preserve them accurately while they are still fresh.
