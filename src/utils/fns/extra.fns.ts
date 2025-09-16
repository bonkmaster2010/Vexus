
export function isInWishlist(wishlist: any, product: any){
const wishlistCheck = wishlist.find((pro: any) => pro === product);
return wishlistCheck
};

export function getPageItems<T>(items: T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
};

export const normalize = (str: string) =>
  str.replace(/[^a-z0-9]/gi, '').toLowerCase().trim();

export const singularize = (str: string) => {
  if (str.endsWith('ies') && str.length > 3) {
    return str.slice(0, -3) + 'y';
  } else if (str.endsWith('es') && str.length > 3) {
    return str.slice(0, -2);
  } else if (str.endsWith('s') && str.length > 2) {
    return str.slice(0, -1);
  }
  return str;
};

export const matchWord = (str: string, word: string) => {
  const normalizedStr = singularize(normalize(str).replace(/\s+/g, ''));
  const normalizedWord = singularize(normalize(word).replace(/\s+/g, ''));
  return normalizedStr.includes(normalizedWord);
};




  export const CATEGORY_OVERRIDES: Record<string, string> = {
  "in-ear": "headphones",
  "on-ear": "headphones",
  "over-ear": "headphones",
  "bumpers": "cases & covers",
  "cradles": "car mount holders",
  "tripods": "selfie sticks",
  "internal solid state drives": "storage",
  "fans & cooling": "cooling",
  "water cooling systems": "cooling",
  "cpu fans": "cooling",
  "smart televisions": "televisions",
  "internal hard drives": "storage",
  "internal-solid-state-drives": "storage",
  "pc microphones": "microphones"
  }; 

export function safeBase64Encode(str: string) {
  return btoa(encodeURIComponent(str))
    .replace(/\+/g, '-') 
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export function safeBase64Decode(str: string) {
  const base64 = str
    .replace(/-/g, '+') 
    .replace(/_/g, '/'); 

  return decodeURIComponent(atob(base64));
}

export function slugify(str: string) {
  return str
    .trim()
    .replace(/\s+/g, ' ')   
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/^-+|-+$/g, '');
}

const specClasses = [
  { type: 'Color', keywords: ['black', 'white', 'blue', 'red', 'green', 'pink', 'yellow', 'purple', 'gold', 'silver'] },
  { type: 'RAM', keywords: ['ram'] },
  { type: 'Storage', keywords: ['storage', 'rom', 'gb', 'tb'] },
  { type: 'Battery', keywords: ['mAh', 'battery'] },
  { type: 'Camera', keywords: ['mp', 'camera'] },
  { type: 'Display', keywords: ['inch', 'display', 'screen'] },
  { type: 'Processor', keywords: ['snapdragon', 'mediatek', 'octa-core', 'cpu', 'chip'] },
  { type: 'OS', keywords: ['android', 'ios', 'windows'] },
  { type: 'Network', keywords: ['5g', '4g', 'lte', 'wifi', 'bluetooth'] },
  { type: 'Sensors', keywords: ['fingerprint', 'accelerometer', 'gyroscope', 'proximity'] },
  { type: 'Other', keywords: [] } 
];

export function classifySpec(spec: string) {
  const lowerSpec = spec.toLowerCase();
  
  for (const specClass of specClasses) {
    if (specClass.keywords.some(keyword => lowerSpec.includes(keyword))) {
      return { type: specClass.type, value: spec };
    }
  }
  
  return { type: 'Other', value: spec };
}