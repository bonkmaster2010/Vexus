import type { Product } from "../interfaces/state-interfaces/MainState.interfaces";



export function isInWishlist(wishlist: any, id: string){
const wishlistCheck = wishlist.find((product: Product) => product.id === id);
return wishlistCheck
};

export function scrollLeft() {
  const container = document.querySelector('.section-products');
  if (!container) return;

  const card = container.querySelector('.section-card');
  if (!card) return;

  const cardStyle = getComputedStyle(card);
  const cardWidth = (card as HTMLElement).offsetWidth;
  const gap = parseInt(cardStyle.marginRight) || 12;

  const scrollAmount = cardWidth + gap;
  container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

export function scrollRight() {
  const container = document.querySelector('.section-products');
  if (!container) return;

  const card = container.querySelector('.section-card');
  if (!card) return;

  const cardStyle = getComputedStyle(card);
  const cardWidth = (card as HTMLElement).offsetWidth;
  const gap = parseInt(cardStyle.marginRight) || 12;

  const scrollAmount = cardWidth + gap;
  container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}


const isProductMatch = (
 { product,
  selectedSpecsFilters,
  selectedTypeFilters
}: any) => {
  const matchesSpecs =
    selectedSpecsFilters.length === 0 ||
    selectedSpecsFilters.some((specFilter: any) =>
      product.specifications.includes(specFilter)
    );

  const matchesType =
    selectedTypeFilters.length === 0 ||
    selectedTypeFilters.includes(product.type);

  return matchesSpecs && matchesType;
};



export { isProductMatch };