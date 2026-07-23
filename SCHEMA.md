# Professional Profile Schema

The canonical source is `data/resume.json`. The build first passes this file through `normalizeProfile()`, then uses the normalized result for the resume, links, and portfolio surfaces.

## Compatibility

Legacy plain strings remain accepted for books and technical disclosures. Structured records are preferred when links, ordering, featured state, or surface visibility are needed.

## Identity

```json
{
  "identity": {
    "name": "Full Name",
    "documentLabel": "Executive Resume",
    "title": "Professional headline",
    "positioning": "One-sentence positioning statement"
  }
}
```

## Contact

Contact values are optional. Store only information intended for publication.

```json
{
  "contact": {
    "location": "City, State",
    "phone": "Optional",
    "email": "name@example.com",
    "linkedin": "https://...",
    "github": "https://..."
  }
}
```

## Linkable publication record

```json
{
  "id": "stable-human-readable-id",
  "title": "Publication title",
  "url": "https://example.com/evidence",
  "featured": false,
  "order": 10,
  "surfaces": {
    "resume": true,
    "portfolio": true,
    "links": false
  }
}
```

Only HTTP and HTTPS URLs become clickable. Invalid or missing URLs leave the title readable and unlinked.

## System record

Systems may represent software, products, organizations, research platforms, operating systems, or other substantial work.

```json
{
  "id": "example-system",
  "name": "System name",
  "subtitle": "Concise classification",
  "summary": "What it does and why it matters.",
  "url": "https://example.com",
  "validation": "Optional verified result",
  "featured": true,
  "order": 10,
  "surfaces": {
    "resume": true,
    "portfolio": true,
    "links": true
  },
  "highlights": ["Verified capability", "Another capability"]
}
```

## Surface rules

- `resume`: include in formal resume output.
- `portfolio`: include in the richer contextual web presentation.
- `links`: include in the compact link surface, provided a valid URL also exists.

Visibility controls presentation, not truth. Keep the canonical record accurate even when an item is hidden from a surface.

## Ordering

Lower `order` values appear first within their group. Featured records are prioritized on surfaces that support featured ordering.

## Stable identifiers

IDs are optional during migration but recommended for new structured records. Use lowercase, human-readable identifiers that remain stable when a title changes.

## Other supported sections

The current resume renderer also accepts:

- `executiveProfile`: array of paragraphs
- `capabilities`: grouped skill arrays
- `edgeAI`: optional specialized summary block
- `education`: credential records
- `technicalEnvironment`: object of categorized tool arrays
- `achievements`: array of verified achievements
- `principles`: array of operating principles
- `footer`: concise evidence or workflow statement

See `data/sample-profile.json` for a neutral example.