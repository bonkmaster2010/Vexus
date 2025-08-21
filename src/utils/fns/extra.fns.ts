
export function isInWishlist(wishlist: any, product: any){
const wishlistCheck = wishlist.find((pro: any) => pro === product);
return wishlistCheck
};

export function getPageItems<T>(items: T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
};