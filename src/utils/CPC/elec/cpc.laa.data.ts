import { calLaptop, la, la1, la2, la3, la4, la5} from "../../image-arrays/electronic.page.cates.imgs";
import type { CategoryPageCategory } from "../../interfaces/components/main.comps.if";

const LAA: CategoryPageCategory[] = [
  {title: "Laptops", src: calLaptop, route: "laptops"},
  {title: "Laptop Accessories", src: la, routeType: "categories", route: "la"}
];

const LA: CategoryPageCategory[] = [
    {title: 'Bags & Cases', src: la1, route: 'laptopBags'},
    {title: 'Chargers & Adapters', src: la2, route: 'laptopChargers'},
    {title: 'Cooling Pads & Fans', src: la3, route: 'laptopCoolingpads'},
    {title: 'Docking Stations & Hubs', src: la4, route: 'laptopDocking'},
    {title: 'Adjustable Stands', src: la5, route: 'laptopAdjustableStand'},
];

export { LAA, LA }