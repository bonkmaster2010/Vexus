import type { DropDownLink } from "../Links/Electronics/ElectronicLinks";

interface Sublink {
  title: string;
  route?: string;
};


interface BrandItem {
  id: string;
  title: string;
  src: string;
  route: string;
};

interface CFD{
  name: string;
  filters: Sublink[];
  routeType: string;
  route: string
};

export interface DropdownProps {
  data: DropDownLink[];
  src: string;
  route?: string;
  brandArr?: BrandItem[];
  type: string
};