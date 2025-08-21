import { computerAccessoriesCF, damFiltersCf, laaFiltersCf, laFiltersCf, mobileFiltersCf, mtAcessoriesCf, pc_compsFiltersCf, smartwatchFiltersCf, tabletFiltersCf } from "./Electronic.cf";
import { CALSubLinks, MTSubLinks } from "./ElectronicSubLinks";

interface Link {
  linkName: string;
  route: string;
  routeType: string;
  subLinks: { title: string; id: string; route: string }[];
  cf: any;
  key: string;
  display?: boolean;  
}


export const CALLinks: Link[] = [
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


export const MBLinks: Link[] = [
  {
    linkName: 'Mobile Phones',
    route: 'mobiles',
    routeType: 'category',
    subLinks: MTSubLinks.mobile,
    cf: mobileFiltersCf,
    key: 'mobiles'
  },
  {
    linkName: 'Tablets',
    route: 'tablets',
    routeType: 'category',
    subLinks: MTSubLinks.tablet,
    cf: tabletFiltersCf,
    key: 'tablets'
  },
  {
    linkName: 'Smart Watches',
    route: 'smartwatches',
    routeType: 'category',
    subLinks: MTSubLinks.smartwatch,
    cf: smartwatchFiltersCf,
    key: 'smartwatches'
  },
  {
    linkName: 'Accessories',
    route: 'ma',
    routeType: 'categories',
    subLinks: MTSubLinks.mobileAccessories,
    cf: mtAcessoriesCf,
    key: 'ma'
  }
];


export const allElecLinks = [...CALLinks, ...MBLinks];