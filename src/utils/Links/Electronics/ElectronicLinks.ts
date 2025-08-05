import { damFiltersCf, laaFiltersCf, mobileFiltersCf, mtAcessoriesCf, pc_compsFiltersCf, smartwatchFiltersCf, tabletFiltersCf } from "./Electronic.cf";
import { CALSubLinks, MTSubLinks } from "./ElectronicSubLinks";



export const CALLinks = [
  {
    linkName: "Desktops & Monitors",
    route: "dam",
    routeType: "categories",
    subLinks: CALSubLinks.desktop,
    cf: damFiltersCf,
    key: 'dam'
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
    linkName: "Computer Components",
    route: "pc_comps",
    routeType: "categories",
    subLinks: CALSubLinks.pc_comps,
    cf: pc_compsFiltersCf,
    key: 'pc_comps'
  },
];


export const MBLinks = [
  {
    linkName: 'Mobiles',
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
    route: 'accessories',
    routeType: 'categories',
    subLinks: MTSubLinks.mobileAccessories,
    cf: mtAcessoriesCf,
    key: 'accessories'
  }
];
