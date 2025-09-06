
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
    str.replace(/[^a-z0-9\s]/gi, '').toLowerCase().trim();

  export const matchWord = (str: string, word: string) => {
    const normalizedStr = normalize(str).replace(/\s+/g, '');
    const normalizedWord = normalize(word).replace(/\s+/g, '');
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
  "cpu fans": "cooling"
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
