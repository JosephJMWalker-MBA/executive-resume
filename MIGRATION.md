# Migration Guide

This repository supports gradual adoption. You do not need to redesign every record before generating useful output.

## 1. Start from the sample

Copy `data/sample-profile.json` to a working file and replace the example identity, contact, projects, publications, education, and achievements with your own verified information.

When ready, replace `data/resume.json` with the reviewed profile.

## 2. Preserve readable legacy records

Books and Technical Disclosure Commons entries may remain plain strings:

```json
"books": ["A readable publication title"]
```

They will remain readable. Convert them to structured objects only when you have a verified URL or need presentation metadata.

## 3. Add verified evidence links

```json
{
  "title": "A readable publication title",
  "url": "https://example.com/verified-destination"
}
```

Never guess destinations. Keep unresolved records as plain text until the evidence is verified.

## 4. Choose public surfaces

New structured records may specify where they appear:

```json
"surfaces": {
  "resume": true,
  "portfolio": true,
  "links": false
}
```

A links-surface record also needs a valid HTTP or HTTPS URL.

## 5. Add order and featured state deliberately

Use `order` for stable sequencing and `featured` for a small number of priority records. Avoid marking everything as featured.

## 6. Build and review

```bash
npm install
npm test
npm run build
npm run render
```

Review:

- `/index.html` — resume
- `/links/index.html` — compact links surface
- `/portfolio/index.html` — portfolio
- generated PDF output under `dist/`

## 7. Commit evidence intentionally

Use commit messages that describe the professional evidence added or corrected, for example:

```text
Add verified research publication
Document production launch milestone
Correct certification date
Publish new portfolio system record
```

## Migration principles

- Preserve existing readable content.
- Convert records incrementally.
- Add only verified URLs and metrics.
- Keep source data canonical; generated HTML and PDF are outputs.
- Review every AI-assisted change before committing it.
- Use separate pull requests for data, renderer behavior, and design changes when practical.