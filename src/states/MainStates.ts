import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Main, AccountReview } from "../utils/interfaces/state-interfaces/MainState.interfaces";

export const useMain = create<Main>()(
  persist(
    (set, get) => ({
      /* Cart */
      cart: [],
      addItemToCart: (product, quantity, warranty) => {
        const { cart } = get();
        const productIndex = cart.findIndex(
          (item) => item.id === product.id && item.warranty === warranty
        );
        if (productIndex !== -1) {
          const updatedCart = cart.map((item, index) =>
            index === productIndex
              ? { ...item, quantity: Math.min(item.quantity + quantity, 10) }
              : item
          );
          set({ cart: updatedCart });
        } else {
          set({ cart: [...cart, { ...product, quantity, warranty }] });
        }
      },
      removeItemFromCart: (product, warranty) => {
        const { cart } = get();
        set({
          cart: cart
            .map((item) =>
              item.id === product.id && item.warranty === warranty
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
            .filter((item) => item.quantity > 0),
        });
      },
      updateQuantity: (productId, warranty, quantity) => {
        const { cart } = get();
        set({
          cart: cart.map((item) =>
            item.id === productId && item.warranty === warranty
              ? { ...item, quantity }
              : item
          ),
        });
      },

      /* Wishlist */
      wishlist: [],
      addItemToWishlist: (product) => set({ wishlist: [...get().wishlist, product] }),
      removeItemFromWishlist: (productToRemove) =>
        set({ wishlist: get().wishlist.filter((product) => product !== productToRemove) }),

      /* Orders */
      orders: [],
      addItemsToOrders: (items) => set({ orders: [...get().orders, ...items], cart: [] }),
      cancelOrder: (idx) =>
        set({ orders: get().orders.filter((_, i) => i !== idx) }),

      /* Addresses */
      addresses: [],
      setAddresses: (address) => set({ addresses: [...get().addresses, address] }),
      deleteAddress: (idx) =>
        set({ addresses: get().addresses.filter((_, i) => i !== idx) }),
      editAddress: (newAddress, i) => {
        const updated = get().addresses.map((a, index) =>
          index === i
            ? {
                name: newAddress.name ?? a.name,
                address_arr: newAddress.address_arr ?? a.address_arr,
                mobile_number: newAddress.mobile_number ?? a.mobile_number,
              }
            : a
        );
        set({ addresses: updated });
      },

      /* Reviews (INDEX-BASED) */
      reviews: [],
      addProductReview: (reviewData) => {
        const reviews = get().reviews;
        const exists = reviewData.productIndex;
        const found = reviews.findIndex((r) => r.productIndex === exists);
        if (found === -1) {
          set({ reviews: [...reviews, reviewData] });
        } else {
          const updated = reviews.map((r) =>
            r.productIndex === exists
              ? { ...r, reviews: [...r.reviews, ...reviewData.reviews] }
              : r
          );
          set({ reviews: updated });
        }
      },
      addReview: (reviewText, idx) => {
        if (idx === -1) return;
        const updated = get().reviews.map((r) =>
          r.productIndex === idx
            ? { ...r, reviews: [...r.reviews, reviewText] }
            : r
        );
        set({ reviews: updated });
      },
      deleteReview: (reviewIdx, productIdx) => {
        const updated = get().reviews.map((r) =>
          r.productIndex === productIdx
            ? { ...r, reviews: r.reviews.filter((_, i) => i !== reviewIdx) }
            : r
        );
        set({ reviews: updated });
      },
      editReview: (productIndex: number, newReview: string, reviewIdx: number) => {
        const { reviews } = get();

        const productPos = reviews.findIndex(r => r.productIndex === productIndex);
        if (productPos === -1) return;

        const updated = reviews.map((r, i) =>
          i === productPos
            ? { ...r, reviews: r.reviews.map((rev, j) => (j === reviewIdx ? newReview : rev)) }
            : r
        );

        set({ reviews: updated });
      },


      /* Account Reviews */
      accountReviews: [],
      addAccountReview: (review: AccountReview) =>
        set({ accountReviews: [review, ...get().accountReviews] }),
      deleteAccountReview: (idx) =>
        set({ accountReviews: get().accountReviews.filter((_, i) => i !== idx) }),

      /* RV */
      rv: [],
      addItemToRv: (product) => set({ rv: [...get().rv, product] }),
      emptyAllRvItems: () => set({ rv: [] }),

      /* Overlay Filter */
      showOverlayedFilter: false,
      setShowOverlayedFilter: (boo) =>
        set({
          showOverlayedFilter:
            typeof boo === "boolean" ? boo : !get().showOverlayedFilter,
        }),

      /* Dropdown */
      dropdown: "",
      setDropdown: (type) => set({ dropdown: type }),

      /* Grid/List */
      grid: true,
      setGrid: (boo) => set({ grid: boo }),

      /* User */
      registered: false,
      SignUp: () => set({ registered: true }),
      Logout: () => set({ registered: false }),

      /* Expanded Groups */
      expandedGroups: {},
      toggleGroup: (groupName, val) =>
        set((state) => ({
          expandedGroups: {
            ...state.expandedGroups,
            [groupName]: state.expandedGroups[groupName] === val ? null : val,
          },
        })),
      resetGroup: () => set({ expandedGroups: {} }),

      /* Mobile Menu */
      showMM: false,
      setShowMM: (boo) => set({ showMM: boo }),
      singleGroup: "",
      toggleSingleGroup: (type) => {
        const current = get().singleGroup;
        set({ singleGroup: current === type ? "" : type });
      },

      /* Mobile */
      isMobile: window.innerWidth <= 770,
      setIsMobile: (boo) => set({ isMobile: boo }),
    }),
    {
      name: "main-storage",
      partialize: (state) => ({ registered: state.registered }),
    }
  )
);
