# Multi-Surface Publishing Architecture

## Status

Stage 1 architecture contract. This document defines the intended expansion before runtime behavior changes.

## Decision

Evolve this repository from a resume-and-portfolio publishing system into a reusable professional provenance publisher that can generate multiple public views from one structured record.

The repository will continue to preserve and publish evidence of meaningful work. The executive resume remains a first-class output, but it will no longer be treated as the only presentation surface.

## Problem

Professionals commonly maintain the same identity and evidence across several disconnected systems:

- resume documents
- portfolio websites
- link-in-bio services
- professional biographies
- project directories
- application materials
- machine-readable profiles

These copies drift, become stale, and require repeated manual updates. They also separate public claims from the evidence that supports them.

## Product Thesis

A professional should maintain one truthful, source-controlled record of identity, work, evidence, and destinations. The system should transform that record into different views for different audiences.

```text
meaningful work
    -> preserved evidence
    -> structured professional record
    -> resume / portfolio / links / PDF / machine-readable output
```

The system is not a Linktree clone. A link-in-bio page is one compact presentation of the same provenance-aware record used to generate the resume and portfolio.

## Product Definition

**Professional Provenance Publisher**

A beginner-friendly, source-controlled publishing system that turns structured professional evidence into:

- an executive or conventional resume
- a printable PDF resume
- a portfolio or professional homepage
- a mobile-first link-in-bio page
- a machine-readable professional record
- future specialized views such as a CV, biography, speaker page, or project directory

## Core Principles

1. **Evidence before claims.** Public presentation remains downstream of preserved work and verifiable evidence.
2. **One source, multiple views.** A person should not manually reproduce the same information for every public surface.
3. **Structured data is canonical.** Rendered HTML and PDF files are outputs, not the primary record.
4. **Human responsibility.** AI may assist with editing or transformation, but the repository owner remains responsible for accuracy.
5. **Static-first publishing.** The default system should remain understandable, portable, inexpensive, and easy to host.
6. **Progressive complexity.** Beginners should be able to start with one file and one build command.
7. **Backward compatibility.** Existing resume data and output should continue to work while the architecture evolves.
8. **Readable by humans and useful to machines.** The record and outputs should support both audiences.
9. **Authorship and provenance remain visible.** Repository history should document intentional changes to professional evidence and system behavior.

## Intended Surfaces

### Resume

Purpose: hiring, institutional review, formal applications, and printable presentation.

Characteristics:

- evidence-rich
- restrained visual design
- print-aware
- selective professional content
- concise links to supporting evidence

### Portfolio

Purpose: provide context around projects, research, businesses, publications, and capabilities.

Characteristics:

- descriptive project cards
- broader content than the resume
- navigable sections
- web-first presentation
- room for supporting links and evidence

### Links

Purpose: provide a fast, mobile-first gateway to the owner's most useful destinations.

Characteristics:

- compact
- tap-friendly
- deliberately ordered
- limited explanatory text
- no duplicated hardcoded content
- generated from the same canonical records as other surfaces

### PDF

Purpose: preserve the current downloadable and printable resume workflow.

Characteristics:

- generated from the resume surface
- deterministic where practical
- compatible with existing automation

### Machine-Readable Record

Purpose: make professional evidence reusable by software, future tools, and AI-assisted workflows.

Characteristics:

- explicit structure
- stable identifiers where introduced
- URLs and evidence relationships
- surface visibility metadata

## Shared Record Model

The final schema is intentionally not frozen in Stage 1. Later stages may retain `data/resume.json`, introduce `data/profile.json`, or split records into multiple files.

Regardless of file organization, the architecture must support these concepts:

```json
{
  "id": "example-project",
  "title": "Example Project",
  "type": "project",
  "summary": "A concise description.",
  "url": "https://example.com",
  "repositoryUrl": "https://github.com/example/project",
  "evidenceUrls": [],
  "featured": true,
  "order": 10,
  "surfaces": {
    "resume": true,
    "portfolio": true,
    "links": true
  }
}
```

A record may render differently on each surface. Surface metadata controls inclusion, not truth. The underlying identity and evidence should remain shared.

## Normalization Boundary

Before multiple renderers independently interpret raw data, the system should introduce a shared normalization layer.

```text
existing or future structured data
        -> normalizeProfile()
        -> normalized profile model
        -> resume renderer
        -> portfolio renderer
        -> links renderer
```

The normalization layer should:

- preserve compatibility with the current `data/resume.json`
- supply safe defaults
- omit invalid or incomplete optional actions
- normalize ordering and visibility
- provide one stable input contract to renderers
- avoid mutating source data

## Backward Compatibility Contract

The expansion must not silently break the repository's current purpose.

At minimum:

- the existing `data/resume.json` remains accepted during migration
- the current executive resume remains buildable
- PDF generation remains functional
- existing fields continue to render unless intentionally deprecated through a documented migration
- missing new fields do not cause build failures
- records without URLs remain readable and do not render empty links or buttons
- the current static-hosting model remains supported

Renaming `resume.json` to `profile.json` is not part of Stage 1. That decision should occur only after a compatibility path and migration benefit are demonstrated.

## Proposed Output Direction

The target output structure may become:

```text
dist/
├── index.html
├── resume/
│   └── index.html
├── links/
│   └── index.html
└── resume.pdf
```

This structure is directional, not yet an implementation requirement. Later stages must account for current hosting behavior, relative asset paths, GitHub Pages, and existing users before changing the default output location.

## Initial Implementation Stages

### Stage 1 — Architecture Contract

- add this document
- freeze purpose, boundaries, compatibility, and acceptance criteria
- make no runtime behavior changes

### Stage 2 — Linkable Evidence

- add optional URL and presentation metadata conservatively
- make appropriate existing titles linkable when valid URLs exist
- preserve current resume rendering and PDF generation
- add tests for linked and unlinked records

### Stage 3 — Shared Normalization Layer

- normalize current structured data into one renderer-facing model
- preserve backward compatibility
- prevent individual surfaces from creating conflicting interpretations

### Stage 4 — Links Surface

- generate a compact, mobile-first links page
- reuse canonical identity and evidence records
- support featured state, ordering, visibility, and safe external links

### Stage 5 — Portfolio Surface

- generate a richer professional homepage
- reuse the normalized profile model
- provide contextual project, publication, and business presentation

### Stage 6 — Reusable Template Documentation

- provide beginner setup instructions
- add representative sample data
- document the schema and migration path
- document GitHub Pages and custom-domain deployment
- explain how to update evidence after a meaningful sprint

## Stage 1 Non-Goals

This stage does not:

- change production rendering
- change `data/resume.json`
- rename the repository or package
- add a new build command
- create a links page
- create a portfolio page
- add analytics
- add authentication
- add a database
- add a visual editor
- add payments
- add an embedded AI assistant
- create a hosted multi-user service

## Product Non-Goals for the Initial Expansion

The initial multi-surface publisher will not attempt to reproduce the full feature set of commercial link-in-bio platforms.

Excluded unless separately justified later:

- click analytics dashboards
- social scheduling
- storefronts and checkout
- tips or paid messaging
- user accounts
- drag-and-drop content management
- hosted multi-tenant infrastructure
- proprietary platform dependencies

These exclusions protect portability, comprehensibility, and the ability to publish without a recurring subscription.

## Security and Accessibility Requirements

Later implementation stages must ensure:

- user-controlled text is escaped before HTML output
- URLs are validated or safely handled before rendering
- external links use appropriate `rel` behavior when opening new contexts
- missing URLs do not produce empty interactive elements
- keyboard navigation remains usable
- focus states are visible
- semantic headings and landmarks are preserved
- link text remains understandable outside visual context
- mobile layouts do not require horizontal scrolling
- color is not the only signal for status or interaction

## Acceptance Criteria for the Expansion

The multi-surface work is successful when:

1. One structured professional record can feed resume, portfolio, and links views.
2. The existing resume and PDF workflows remain functional.
3. A user can publish the static outputs without a database or paid platform.
4. Records can appear on selected surfaces without duplicating their substantive content.
5. Titles and actions render as links only when valid destinations exist.
6. The links surface is usable on a small mobile screen.
7. Generated surfaces use the shared normalized model rather than separate hardcoded lists.
8. Existing users receive a documented, low-friction migration path.
9. Tests cover compatibility, escaping, optional URLs, ordering, and surface visibility.
10. Documentation explains the provenance workflow, not only visual customization.

## Open Decisions Reserved for Later Stages

The following questions are intentionally deferred until implementation evidence exists:

- whether the canonical file should remain `resume.json` or become `profile.json`
- whether structured content should remain in one file or be split by record type
- whether the portfolio or resume should occupy the root route by default
- whether generated files should move immediately into `dist/`
- how themes should be configured beyond CSS variables
- whether a JSON Schema should be introduced and at what stage
- how sample data and the owner's real data should coexist in a reusable template
- whether stable record IDs are mandatory for all existing content

## Decision Test for Future Features

A proposed feature belongs in the core system only when it strengthens at least one of these goals without materially weakening the others:

- truthful professional provenance
- one-source publishing
- portability
- beginner comprehensibility
- static deployment
- accessibility
- long-term maintainability

Features that primarily imitate a commercial platform should be rejected unless they clearly serve the provenance-publishing mission.

## Summary

This repository will evolve by extending its original logic rather than replacing it.

The resume remains important because it teaches professionals to preserve meaningful work in a structured, version-controlled record. The new portfolio and links surfaces make that same record more useful in public without requiring repeated manual maintenance or a subscription service.

The governing sequence remains:

```text
meaningful work
    -> evidence
    -> structured record
    -> reviewed commit
    -> appropriate public surfaces
```
