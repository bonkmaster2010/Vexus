interface Sublink {
  title: string;
  route?: string;
};

interface LinkItem {
  linkName: string;
  route: string;
  routeType: string;
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

interface DataIF{
  linkName: string;
  route: string;
  routeType: string;
  subLinks: Sublink[];
  cf: CFD[];
  key: string;
};

export interface DropdownProps {
  data: DataIF[];
  src: string;
  route?: string;
  brandArr?: BrandItem[];
  type: string
};