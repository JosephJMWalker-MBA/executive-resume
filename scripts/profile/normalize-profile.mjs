const DEFAULT_SURFACES=Object.freeze({resume:true,portfolio:true,links:false});

const isObject=(value)=>Boolean(value)&&typeof value==='object'&&!Array.isArray(value);
const hasText=(value)=>typeof value==='string'&&value.trim().length>0;
const cleanText=(value)=>hasText(value)?value.trim():'';

export const normalizeHttpUrl=(value)=>{
  if(!hasText(value)) return null;
  try{
    const url=new URL(value.trim());
    return url.protocol==='http:'||url.protocol==='https:'?url.href:null;
  }catch{return null;}
};

export const normalizeSurfaces=(value={})=>{
  const source=isObject(value)?value:{};
  return {
    resume:source.resume!==false,
    portfolio:source.portfolio!==false,
    links:source.links===true
  };
};

export const normalizeLinkableRecord=(value,index=0,defaults={})=>{
  const source=typeof value==='string'?{title:value}:isObject(value)?value:{};
  const title=cleanText(source.title??source.name??defaults.title);
  if(!title) return null;
  const order=Number.isFinite(source.order)?source.order:Number.isFinite(defaults.order)?defaults.order:index;
  return {
    id:cleanText(source.id??defaults.id)||null,
    title,
    url:normalizeHttpUrl(source.url??defaults.url),
    featured:source.featured===true,
    order,
    surfaces:normalizeSurfaces(source.surfaces??defaults.surfaces??DEFAULT_SURFACES)
  };
};

const normalizeList=(items,normalizer)=>Array.isArray(items)?items.map(normalizer).filter(Boolean):[];

export const normalizeProfile=(profile={})=>{
  const source=isObject(profile)?profile:{};
  const publications=isObject(source.publications)?source.publications:{};
  return {
    ...structuredClone(source),
    publications:{
      ...structuredClone(publications),
      technicalDisclosureCommons:normalizeList(publications.technicalDisclosureCommons,(item,index)=>normalizeLinkableRecord(item,index,{surfaces:{resume:true,portfolio:true,links:false}})),
      books:normalizeList(publications.books,(item,index)=>normalizeLinkableRecord(item,index,{surfaces:{resume:true,portfolio:true,links:false}}))
    },
    systems:normalizeList(source.systems,(item,index)=>{
      if(!isObject(item)) return null;
      const name=cleanText(item.name);
      if(!name) return null;
      return {
        ...structuredClone(item),
        id:cleanText(item.id)||null,
        name,
        url:normalizeHttpUrl(item.url),
        order:Number.isFinite(item.order)?item.order:index,
        featured:item.featured===true,
        surfaces:normalizeSurfaces(item.surfaces??{resume:true,portfolio:true,links:Boolean(item.url)})
      };
    })
  };
};
