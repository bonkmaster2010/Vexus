import type { Product } from "../../extras/Data";

/* Cards */
export interface TC{
    title: string;
    src: string;
    route: string;
};

export interface GC{
    src: string;
    route: string;
};

export interface ListcardIF{
    product?: Product;
    title: string;
    price: string;
    src: any;
    style?: string;
    route: any;
    salePrice: string;
};

/* Filter */
interface Type {
    title: string;
    id: string;
}

interface Spec{
    name: string;
    data: string[];
    id: string;
}

interface manufacturer{
    title: string;
    id: string;
}

export interface FilterProps {
    specArr: Spec[];
    typeArr: Type[];
    manufacturer: manufacturer[];
}

/* Product */
export interface CartProduct extends Product{
  quantity: number;
  warranty: number;
}

export interface PCard extends ListcardIF{
    product?: CartProduct;
    route: any;
    style?: string;
    CartType?: boolean;
}

export interface WishlistCardIF{
    product: CartProduct;
    index: number;
    showMtc?: boolean;
};

/* Section */
export interface SectionIF{
    title: string;
    style?: string;
    CartType?: boolean;
    searchTerm: string;
};

export interface PSSIF{
    data: Product[],
    title?: string,
    useRv: boolean,
    cf?: any,
    searchTerm: string;
};

/* Extra */
export interface SelectIF{
    name: string;
    arr: any[];
};
