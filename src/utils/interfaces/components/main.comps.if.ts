import type { GC, Product } from "./SC.if";

/* Product Pages */

export interface ProductsProps {
  arr: Product[];   
  categoryData?: any;  
  useRv?: boolean;
  title?: string;
};

export interface BPIF{
    data: Product[];
};

/* Filters */
export interface CFIF{
  title: string;
  data: any;
};

/* Category Page */
export interface CategoryPageCategory{ /* what a name */
    title: string;
    src: string;
    route: string;
    type?: string;
};

export interface CategoryPageIF{
    dataArr: any[];
    dataCategories: any[];
};

/* GenreCards */
export interface GenreCardsIF{
    title: string;
    images: GC[]
}