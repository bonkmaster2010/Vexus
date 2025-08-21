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
    price: number;
    src: any[];
    style?: string;
    route: any;
    salePrice: number | undefined;
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
export interface Product{
    id: string;
    title: string;
    desc: string;
    price: number;
    salePrice?: number;
    category: string;
    specs?: any[];
    src: any[];
}

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
    arr: Product[];
    style?: string;
    CartType?: boolean;
};

export interface PSSIF{
    data: Product[],
    title?: string,
    useRv: boolean,
    cf?: any,
};

/* Extra */
export interface SelectIF{
    name: string;
    arr: any[];
};
