import { CALSubLinks, MTSubLinks } from "./ElectronicSubLinks";


export const damFiltersCf = [
    {name: "Desktops & Monitors", filters: [...CALSubLinks.desktop, ...CALSubLinks.monitor], routeType: `categories`, route: 'dam'},
];

export const computerAccessoriesCF = [
    {name: "Computer Accessories", filters: [...CALSubLinks.desktopAccessories], routeType: `categories`, route: 'computerAccessories'}
];

export const laaFiltersCf = [
    {name: "Laptops & Accessories", filters: [{title: 'Laptops', route: 'laptops'}, ...CALSubLinks.laptop], routeType: `categories`, route: 'laa'}
];

export const laFiltersCf = [
    {name: "Laptops Accessories", filters: [...CALSubLinks.laptopAccessories], routeType: `categories`, route: 'la'}
];

export const pc_compsFiltersCf = [
    {name: "Computer Hardware", filters: CALSubLinks.pc_comps, routeType: 'categories', route: 'pc_comps'}
];

export const mobileFiltersCf = [
    {name: "Mobiles", filters: MTSubLinks.mobile, routeType: 'category/', route: 'mobiles'}
];

export const tabletFiltersCf = [
    {name: "Tablets", filters: MTSubLinks.tablet, routeType: 'category/', route: 'tablets'}
];

export const smartwatchFiltersCf = [
    {name: "Smart Watches", filters: MTSubLinks.smartwatch, routeType: 'category/', route: 'smartwatches'}
];

export const mtAcessoriesCf = [
    {name: "Accessories", filters: MTSubLinks.mobileAccessories, routeType: 'category/', route: 'mtAccessories'}
];

