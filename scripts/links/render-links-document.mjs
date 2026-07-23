const escapeHtml=(value='')=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const hasText=(value)=>typeof value==='string'&&value.trim().length>0;
const sortRecords=(items=[])=>[...items].sort((a,b)=>(Number(b.featured)-Number(a.featured))||(a.order-b.order)||a.title.localeCompare(b.title));

const renderLink=(record)=>{
  const title=escapeHtml(record.title??record.name??'');
  const summary=hasText(record.summary)?`<span class="link-summary">${escapeHtml(record.summary)}</span>`:'';
  return `<a class="link-card${record.featured?' featured':''}" href="${escapeHtml(record.url)}" target="_blank" rel="noopener noreferrer"><span class="link-title">${title}</span>${summary}<span class="link-arrow" aria-hidden="true">↗</span></a>`;
};

const collectRecords=(profile={})=>{
  const systems=(profile.systems??[]).filter((item)=>item.surfaces?.links===true&&item.url).map((item)=>({...item,title:item.name}));
  const disclosures=(profile.publications?.technicalDisclosureCommons??[]).filter((item)=>item.surfaces?.links===true&&item.url);
  const books=(profile.publications?.books??[]).filter((item)=>item.surfaces?.links===true&&item.url);
  return sortRecords([...systems,...disclosures,...books]);
};

export const renderLinksDocument=(profile={})=>{
  const name=escapeHtml(profile.identity?.name??'Professional Links');
  const positioning=hasText(profile.identity?.positioning)?`<p class="positioning">${escapeHtml(profile.identity.positioning)}</p>`:'';
  const records=collectRecords(profile);
  const links=records.length?records.map(renderLink).join(''):'<p class="empty-state">No links are currently published.</p>';
  return `<!doctype html><html lang="en"><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="color-scheme" content="light dark" /><title>${name} — Links</title><link rel="stylesheet" href="../styles/links.css" /></head><body><main class="links-shell"><header class="links-header"><p class="eyebrow">Professional provenance</p><h1>${name}</h1>${positioning}</header><section class="links-list" aria-label="Professional links">${links}</section><footer><a href="../index.html">View executive resume</a></footer></main></body></html>`;
};

export { collectRecords };
