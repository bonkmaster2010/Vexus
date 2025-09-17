import { computerAccessoriesCF, damFiltersCf, laaFiltersCf, laFiltersCf, mobileFiltersCf, mtAcessoriesCf, pc_compsFiltersCf, smartwatchFiltersCf, tabletFiltersCf } from "./Electronic.cf";
import { CALSubLinks, MTSubLinks } from "./ElectronicSubLinks";

export interface DropDownLink {
  linkName: string;
  route: string;
  routeType: string;
  subLinks: { title: string; id: string; route: string }[];
  cf: any;
  key: string;
  display?: boolean;  
  filterType?: 'specs' | 'types' | 'manufacturers' | undefined;
}

export const CALLinks: DropDownLink[] = [
  {
    linkName: "Desktops & Monitors",
    route: "dam",
    routeType: "categories",
    subLinks: CALSubLinks.desktop,
    cf: damFiltersCf,
    key: 'dam'
  },
  {
   linkName: "Computer Accessories",
   route: "computerAccessories",
   routeType: "categories",
   subLinks: CALSubLinks.desktopAccessories,
   cf: computerAccessoriesCF,
   key: 'computerAccessories'
  },
  {
    linkName: "Laptops & Accessories",
    route: "laa",
    routeType: "categories",
    subLinks: CALSubLinks.laptop,
    cf: laaFiltersCf,
    key: 'laa'
  },
  {
    linkName: "Laptops Accessories",
    route: "la",
    routeType: "categories",
    subLinks: CALSubLinks.laptopAccessories,
    cf: laFiltersCf,
    key: 'la',
    display: false
  },
  {
    linkName: "Computer Components",
    route: "pc_comps",
    routeType: "categories",
    subLinks: CALSubLinks.pc_comps,
    cf: pc_compsFiltersCf,
    key: 'pc_comps'
  },
];


export const MBLinks: DropDownLink[] = [
  {
    linkName: 'Mobile Phones',
    route: 'smartphones',
    routeType: 'category',
    subLinks: MTSubLinks.mobile,
    cf: mobileFiltersCf,
    key: 'mobiles',
    filterType: 'manufacturers'
  },
  {
    linkName: 'Tablets',
    route: 'tablets',
    routeType: 'category',
    subLinks: MTSubLinks.tablet,
    cf: tabletFiltersCf,
    key: 'tablets',
    filterType: 'manufacturers'
  },
  {
    linkName: 'Smart Watches',
    route: 'smartwatches',
    routeType: 'category',
    subLinks: MTSubLinks.smartwatch,
    cf: smartwatchFiltersCf,
    key: 'smartwatches',
    filterType: 'manufacturers'
  },
  {
    linkName: 'Accessories',
    route: 'ma',
    routeType: 'categories',
    subLinks: MTSubLinks.mobileAccessories,
    cf: mtAcessoriesCf,
    key: 'ma',
    filterType: undefined
  }
];

/*
  - each link object has -
  linkName - link name
  route - link route
  routeType - link route type (category or categories)
  subLinks - link sublinks
  cf - sublink category filters
  key - link key
  filterType - (type, specs, manufacturer)
*/
export const allElecLinks = [...CALLinks, ...MBLinks];