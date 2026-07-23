# Deployment Guide

The generated outputs are static HTML, CSS, and PDF files. They can be hosted without a database or application server.

## Build locally

```bash
npm install
npm test
npm run build
npm run render
```

Generated web surfaces:

- `index.html` — resume
- `links/index.html` — compact links page
- `portfolio/index.html` — portfolio

The PDF workflow writes its output under `dist/`.

## GitHub Pages

1. Push the reviewed repository to GitHub.
2. Open **Settings → Pages**.
3. Choose deployment from a branch.
4. Select the branch containing generated files, commonly `main`.
5. Select the repository root as the publishing folder.
6. Save and wait for GitHub Pages to publish.

For a project repository, the site normally appears beneath the account’s GitHub Pages domain using the repository name as the path. Relative navigation between the resume, portfolio, and links surfaces is designed for static hosting.

## Custom domain with GitHub Pages

1. Configure GitHub Pages first.
2. Enter the custom domain in **Settings → Pages**.
3. Add the DNS records GitHub specifies through the domain provider.
4. Enable HTTPS after DNS validation succeeds.
5. Add a `CNAME` file only when required by the chosen GitHub Pages setup.

Do not publish private contact information merely because the repository supports it. Store only values intended for public display.

## Other static hosts

The same files can be deployed to:

- Cloudflare Pages
- Netlify
- Vercel static hosting
- conventional shared web hosting
- an object-storage static website

Use `npm run build` as the build command when the platform supports build pipelines. Publish the repository root unless a later architecture change introduces a dedicated output directory.

## Deployment review checklist

Before publishing:

- run `npm test`
- verify all three HTML surfaces open correctly
- inspect mobile widths for horizontal scrolling
- verify external destinations
- confirm private data is absent
- review the PDF
- confirm HTTPS
- check that relative navigation works from nested `/links/` and `/portfolio/` paths

Generated files are outputs. Make professional content changes in the canonical JSON source, rebuild, review, and commit the resulting change intentionally.