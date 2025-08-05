import type { CartProduct, Product } from "../components/SC.if";

export interface Main{
  /* Cart */
  cart: CartProduct[];
  addItemToCart: (product: CartProduct, quantity: number, warranty: number) => void;
  removeItemFromCart: (product: CartProduct, warranty: number) => void;
  updateQuantity: (productId: string, warranty: number, quantity: number) => void;


  /* Wishlist */
  wishlist: CartProduct[];
  addItemToWishlist: (product: CartProduct) => void;
  removeItemFromWishlist: (id: string) => void;

  /* RV */
  rv: Product[];
  addItemToRv: (product: Product) => void;
  emptyAllRvItems: () => void;

  /* Overlayed Filter */
  showOverlayedFilter: boolean;
  setShowOverlayedFilter: (boo?: boolean) => void;

  /* Dropdown */
  dropdown: string,
  setDropdown: (type: string) => void;

  /* Grid or List */
  grid: boolean;
  setGrid: (boo: boolean) => void;

}

