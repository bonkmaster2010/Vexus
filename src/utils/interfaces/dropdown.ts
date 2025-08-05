interface Sublink {
  id: string;
  title: string;
  route?: string;
}

interface LinkItem {
  linkName: string;
  route: string;
  routeType: string;
}

interface BrandItem {
  id: string;
  title: string;
  src: string;
  route: string;
}

interface DataIF{
  mainLinks: LinkItem[], 
  subLinks: Sublink[], 
}

export interface DropdownProps {
  data: any;
  src: string;
  route?: string;
  brandArr?: BrandItem[];
  type: string
}