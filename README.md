# Professional Provenance Publisher

A beginner-friendly, source-controlled publishing system that turns one structured professional record into a resume, portfolio, mobile links page, PDF, and machine-readable source.

This repository began as the executive technical resume for **Joseph Jeremy Michael Walker, MBA**, but the architecture is intentionally reusable.

> Your resume should not be the place where you remember your career. It should be generated from a version-controlled record of work and evidence you have already preserved.

## What It Produces

One canonical file, `data/resume.json`, feeds:

- `index.html` — executive or conventional resume
- `links/index.html` — compact mobile-first links page
- `portfolio/index.html` — richer professional portfolio
- a printable PDF under `dist/`
- a reusable machine-readable professional record

The system is not a Linktree clone or a visual resume editor. It is a static-first professional provenance publisher.

## Why This Exists

Professional evidence often becomes scattered across chat histories, downloads, email drafts, screenshots, websites, and disconnected documents. That creates two problems:

1. people forget what they accomplished;
2. public claims become separated from supporting evidence.

Git provides a durable history of how the professional record changes. Structured data provides one source of truth. Separate renderers turn that source into views appropriate for different audiences.

```text
meaningful work
    -> preserved evidence
    -> structured professional record
    -> reviewed commit
    -> resume / portfolio / links / PDF
```

## Quick Start

```bash
npm install
npm test
npm run build
npm run render
```

Then open:

- `index.html`
- `links/index.html`
- `portfolio/index.html`

The generated PDF is written under `dist/`.

## Create Your Own Version

1. Fork or copy the repository.
2. Review `data/sample-profile.json`.
3. Replace the example data with verified professional information.
4. Move the reviewed content into `data/resume.json`.
5. Run the tests and builds.
6. Review every output.
7. Commit with a message describing the evidence added or corrected.
8. Publish with GitHub Pages or another static host.

Detailed guides:

- [Schema reference](SCHEMA.md)
- [Migration guide](MIGRATION.md)
- [Deployment guide](DEPLOYMENT.md)
- [Multi-surface architecture](MULTI_SURFACE_ARCHITECTURE.md)
- [Sprint workflow](SPRINT_WORKFLOW.md)
- [Design principles](DESIGN.md)

## Canonical Data and Normalization

`data/resume.json` is the source of truth. The build passes it through a shared `normalizeProfile()` boundary before rendering any surface.

The normalization layer:

- preserves compatibility with legacy plain-text records
- supports structured `{ title, url }` evidence
- validates optional HTTP and HTTPS links
- supplies safe visibility and ordering defaults
- avoids mutating source data
- gives every renderer one consistent model

## Surface Visibility

Structured records can specify where they appear:

```json
{
  "surfaces": {
    "resume": true,
    "portfolio": true,
    "links": false
  }
}
```

Visibility controls presentation, not truth. A links-page record must also contain a valid HTTP or HTTPS URL.

## Repository Structure

```text
.
├── data/
│   ├── resume.json
│   └── sample-profile.json
├── links/
│   └── index.html
├── portfolio/
│   └── index.html
├── scripts/
│   ├── profile/
│   │   └── normalize-profile.mjs
│   ├── renderer/
│   ├── build-html.mjs
│   ├── build-links.mjs
│   ├── build-portfolio.mjs
│   └── render-pdf.mjs
├── styles/
├── index.html
├── SCHEMA.md
├── MIGRATION.md
├── DEPLOYMENT.md
└── package.json
```

Generated HTML and PDF files are outputs. Professional content changes belong in the canonical JSON source.

## Evidence Workflow

At the end of a noteworthy sprint, ask:

> What evidence did this work produce that future readers should be able to verify, understand, or ask about?

Then:

1. preserve the evidence;
2. update the canonical record;
3. add only verified links and metrics;
4. run tests and builds;
5. inspect all affected surfaces;
6. commit with a clear explanation.

Example commit messages:

```text
Add verified research publication
Document production launch milestone
Correct certification date
Publish new portfolio system record
```

## Design and Governance Principles

- Evidence before claims.
- Truthful metrics only.
- Structured data is canonical.
- One source should feed multiple views.
- Missing or invalid URLs must not create broken links.
- AI may assist, but the repository owner remains responsible for accuracy.
- Static deployment should remain understandable and inexpensive.
- Accessibility and human readability take priority over visual novelty.
- Repository history should preserve authorship and decision provenance.

## Who This Is For

The pattern can support professionals, students, researchers, writers, designers, consultants, educators, healthcare workers, public servants, engineers, artists, and anyone who wants a practical first version-controlled professional record.

The content model can emphasize any field. The governing sequence remains:

```text
meaningful work
    -> evidence
    -> structured record
    -> reviewed publication
```

## Official Project Rule

This repository optimizes for truth, reproducibility, portability, and clarity over visual novelty.