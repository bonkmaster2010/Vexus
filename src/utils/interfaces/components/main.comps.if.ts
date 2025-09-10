import type { GC } from "./SC.if";

/* Product Pages */
export interface ProductsProps {
  categoryData?: any;  
  useRv?: boolean;
  title?: string;
};

export interface BPIF{
};

/* Filters */
export interface CFIF{
  title: string;
  data: any[];
};

/* Category Page */
export interface CategoryPageCategory{ /* what a name */
  title: string;
  src: string;
  route: string;
  routeType?: string;
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