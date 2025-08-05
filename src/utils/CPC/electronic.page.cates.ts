import { e1, e2, e3, e4, e5, e6, e7, e8} from "../image-arrays/electronic.page.cates.imgs";
import {pcc1, pcc2, pcc3, pcc4, pcc5, pcc6, pcc7, pcc8, pcc9} from "../image-arrays/electronic.page.cates.imgs";
import type { CategoryPageCategory } from "../interfaces/components/main.comps.if";

const CAL: CategoryPageCategory[]  = [
    {title: "Pcs", src: e1, route: "pcs"},
    {title: "Monitors", src: e2, route: "monitors"},
    {title: "Laptops & Accessories", src: e3, route: 'laa', type: 'categories'},
    {title: "Computer Hardware", src: e7, route: "pc_comps", type: 'categories'},
];

const MT: CategoryPageCategory[]  = [
    {title: "Mobiles", src: e4, route: "mobiles"},
    {title: "Tablets", src: e5, route: "tablets"},
    {title: "Smart Watches", src: e6, route: "smart-watches"}
];

const DAM: CategoryPageCategory[]  = [
    {title: "Pcs", src: e1, route: "pcs"},
    {title: "Monitors", src: e2, route: "monitors"},
];

const LAA: CategoryPageCategory[] = [
  {title: "Laptops", src: e3, route: "laptops"},
  {title: "Laptop Accessories", src: e8, route: "accessories"}
];

const PCC: CategoryPageCategory[] = [
    {title: 'Data Storage', src: pcc1, route: 'storage'},
    {title: 'Fan & Cooling', src: pcc5, route: 'fan_cooling'},
    {title: 'Memory / RAM', src: pcc9, route: 'ram'},
    {title: 'Computer Cases', src: pcc3, route: 'cases'},
    {title: 'Motherboards', src: pcc7, route: 'motherboards'},
    {title: 'Power Supplies', src: pcc8, route: 'ps'},
    {title: 'Video / Graphics Card', src: pcc6, route: 'gpus'},
    {title: 'CPU', src: pcc4, route: 'cpu'},
    {title: 'Case Accessories', src: pcc2, route: 'case_accessories'},
];

export const allElecCatesData = {
    cal: {data: CAL, title: "Computer & Laptops"},
    mt: {data: MT, title: "Mobile & Tablets"},
    dam: {data: DAM, title: "Desktops & Monitors"},
    laa: {data: LAA, title: "Laptops & Accessories"},
    pc_comps: {data: PCC, title: "Computer Hardware"}
};
