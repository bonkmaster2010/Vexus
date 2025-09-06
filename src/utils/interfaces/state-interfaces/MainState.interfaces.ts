import type { Product } from "../../extras/Data";
import type { CartProduct } from "../components/SC.if";

/* Address interfaces */
export interface address {
  name: string;
  address_arr: string[];
  mobile_number: string;
}

export interface address_optional {
  name?: string;
  address_arr?: string[];
  mobile_number?: string;
}

export interface review {
  productIndex: number;      
  reviews: string[];
}

export interface AccountReview {
  productTitle: string;
  productIndex: number;
  review: string;
}

/* Main state interface */
export interface Main {
  /* Cart */
  cart: CartProduct[];
  addItemToCart: (product: CartProduct, quantity: number, warranty: number) => void;
  removeItemFromCart: (product: CartProduct, warranty: number) => void;
  updateQuantity: (productId: string, warranty: number, quantity: number) => void;

  /* Wishlist */
  wishlist: CartProduct[];
  addItemToWishlist: (product: CartProduct) => void;
  removeItemFromWishlist: (product: CartProduct) => void;

  /* Order History */
  orders: CartProduct[];
  addItemsToOrders: (items: CartProduct[]) => void;
  cancelOrder: (idx: number) => void;

  /* Addresses */
  addresses: address[];
  setAddresses: (address: address) => void;
  deleteAddress: (idx: number) => void;
  editAddress: (newAddress: address_optional, i: number) => void;

  /* Reviews */
  reviews: review[];
  addProductReview: (review: review) => void;
  addReview: (review: string, idx: number) => void;       
  deleteReview: (reviewIdx: number, productIdx: number) => void; 
  editReview: (productIdx: number, newReview: string, reviewIdx: number) => void; 

  /* Account Reviews */
  accountReviews: AccountReview[];
  addAccountReview: (review: AccountReview) => void;
  deleteAccountReview: (idx: number) => void;

  /* RV */
  rv: Product[];
  addItemToRv: (product: Product) => void;
  emptyAllRvItems: () => void;

  /* Overlayed Filter */
  showOverlayedFilter: boolean;
  setShowOverlayedFilter: (boo?: boolean) => void;

  /* Dropdown */
  dropdown: string;
  setDropdown: (type: string) => void;

  /* Grid or List */
  grid: boolean;
  setGrid: (boo: boolean) => void;

  /* Create User */
  registered: boolean;
  SignUp: () => void;
  Logout: () => void;

  /* Show more */
  expandedGroups: Record<string, string | null | undefined>;
  toggleGroup: (groupName: string, val?: string) => void;
  resetGroup: () => void;

  /* Show mobile menu */
  showMM: boolean;
  setShowMM: (boo: boolean) => void;

  /* single groups mainly used for mobile menu */
  singleGroup: string;
  toggleSingleGroup: (type: string) => void;

  /* is Mobile */
  isMobile: boolean;
  setIsMobile: (boo: boolean) => void;
}
