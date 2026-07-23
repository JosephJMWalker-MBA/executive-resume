const escapeHtml=(value='')=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const hasText=(value)=>typeof value==='string'&&value.trim().length>0;
const sortRecords=(items=[])=>[...items].sort((a,b)=>(Number(b.featured)-Number(a.featured))||(a.order-b.order)||String(a.title??a.name).localeCompare(String(b.title??b.name)));
const externalLink=(url,label)=>url?`<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(label)}</a>`:escapeHtml(label);

const renderHighlights=(items=[])=>Array.isArray(items)&&items.length?`<ul>${items.filter(hasText).map((item)=>`<li>${escapeHtml(item)}</li>`).join('')}</ul>`:'';

const renderSystem=(system)=>{
  const name=system.name??'';
  const title=system.url?externalLink(system.url,name):escapeHtml(name);
  const subtitle=hasText(system.subtitle)?`<p class="card-kicker">${escapeHtml(system.subtitle)}</p>`:'';
  const summary=hasText(system.summary)?`<p>${escapeHtml(system.summary)}</p>`:'';
  const validation=hasText(system.validation)?`<p class="validation">${escapeHtml(system.validation)}</p>`:'';
  return `<article class="portfolio-card${system.featured?' featured':''}">${subtitle}<h3>${title}</h3>${summary}${validation}${renderHighlights(system.highlights)}</article>`;
};

const renderPublication=(record)=>`<li>${record.url?externalLink(record.url,record.title):escapeHtml(record.title)}</li>`;

export const collectPortfolio=(profile={})=>({
  systems:sortRecords((profile.systems??[]).filter((item)=>item.surfaces?.portfolio!==false)),
  disclosures:sortRecords((profile.publications?.technicalDisclosureCommons??[]).filter((item)=>item.surfaces?.portfolio!==false)),
  books:sortRecords((profile.publications?.books??[]).filter((item)=>item.surfaces?.portfolio!==false))
});

export const renderPortfolioDocument=(profile={})=>{
  const name=escapeHtml(profile.identity?.name??'Professional Portfolio');
  const title=hasText(profile.identity?.title)?`<p class="hero-title">${escapeHtml(profile.identity.title)}</p>`:'';
  const positioning=hasText(profile.identity?.positioning)?`<p class="hero-positioning">${escapeHtml(profile.identity.positioning)}</p>`:'';
  const profileText=Array.isArray(profile.executiveProfile)?profile.executiveProfile.filter(hasText).map((item)=>`<p>${escapeHtml(item)}</p>`).join(''):'';
  const {systems,disclosures,books}=collectPortfolio(profile);
  const systemsHtml=systems.length?systems.map(renderSystem).join(''):'<p>No systems are currently published.</p>';
  const disclosuresHtml=disclosures.length?`<ul class="publication-list">${disclosures.map(renderPublication).join('')}</ul>`:'<p>No disclosures are currently published.</p>';
  const booksHtml=books.length?`<ul class="publication-list">${books.map(renderPublication).join('')}</ul>`:'<p>No books are currently published.</p>';
  return `<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="color-scheme" content="light dark" /><title>${name} — Portfolio</title><link rel="stylesheet" href="../styles/portfolio.css" /></head><body><main><header class="portfolio-hero"><p class="eyebrow">Professional provenance portfolio</p><h1>${name}</h1>${title}${positioning}<nav aria-label="Portfolio navigation"><a href="../index.html">Resume</a><a href="../links/index.html">Links</a></nav></header><section class="profile-section" aria-labelledby="profile-heading"><h2 id="profile-heading">Profile</h2>${profileText}</section><section aria-labelledby="systems-heading"><h2 id="systems-heading">Systems, products, and organizations</h2><div class="card-grid">${systemsHtml}</div></section><section aria-labelledby="research-heading"><h2 id="research-heading">Technical disclosures</h2>${disclosuresHtml}</section><section aria-labelledby="books-heading"><h2 id="books-heading">Books</h2>${booksHtml}</section><footer>${escapeHtml(profile.footer??'Research → Architecture → Implementation → Deployment → Validation')}</footer></main></body></html>`;
};