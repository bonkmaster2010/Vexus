import { create } from "zustand";
import type { Main } from "../utils/interfaces/state-interfaces/MainState.interfaces";
import { allProducts } from "../utils/extras/Data";




export const useMain = create<Main>((set, get) => ({
    cart: [],
        
    addItemToCart: (product, quantity, warranty) => {
        const { cart } = get();
        const productIndex = cart.findIndex(item => item.id === product.id && item.warranty === warranty);

        if (productIndex !== -1) {
            const updatedCart = cart.map((item, index) => 
                index === productIndex
                    ? item.quantity < 10 ? { ...item, quantity: item.quantity + quantity}
                    : item
                    : item
            );
            set({ cart: updatedCart });
        } else {
            set({ cart: [...cart, { ...product, quantity, warranty }] });
        }
    },


    removeItemFromCart: (product, warranty) => {
        const { cart } = get();

        const updatedCart = cart.map(item => {
        if(item.id === product.id && item.warranty ===  warranty){
            return {...item, quantity: item.quantity - 1};
        }
        return item
        }).filter(item => item.quantity > 0);

        set({cart: updatedCart});
    },

    updateQuantity: (productId: string, warranty: number, quantity: number) => {
    const { cart } = get();
    const updatedCart = cart.map(item =>
        item.id === productId && item.warranty === warranty
            ? { ...item, quantity: quantity }
            : item
    );
    set({ cart: updatedCart });
},


    /* Wishlist */
       wishlist: allProducts.slice(0, 5),
        addItemToWishlist: (product) => {
            const { wishlist } = get();

                set({ wishlist: [...wishlist, product] });
            
        },

    removeItemFromWishlist: (id) => {
        const { wishlist } = get();
        const filteredList = wishlist.filter((product) => product.id !== id);
        set({wishlist: filteredList})
    },


    /* Recently Viewed Items*/
    rv: allProducts.slice(0, 9),
    addItemToRv: (product) => {
        const { rv } = get();
        set({ rv: [...rv, product] });
    },
    emptyAllRvItems: () => set({rv: []}),

    /* Overlayed Filter */
    showOverlayedFilter: false,
    setShowOverlayedFilter: (boo?: boolean) => set((s) => ({ showOverlayedFilter: typeof boo === "boolean" ? boo : !s.showOverlayedFilter})),

    /* Dropdown */
    dropdown: '',
    setDropdown: (type) => set({dropdown: type}),

    /* Grid or List */
    grid: true,
    setGrid: (boo) => {
        console.log(boo)
        set({grid: boo})} 
}))