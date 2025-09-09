import { calLaptop, la, la1, la2, la3, la4, la5} from "../../image-arrays/electronic.page.cates.imgs";
import type { CategoryPageCategory } from "../../interfaces/components/main.comps.if";

const LAA: CategoryPageCategory[] = [
  {title: "Laptops", src: calLaptop, route: "laptops"},
  {title: "Laptop Accessories", src: la, routeType: "categories", route: "la"}
];

const LA: CategoryPageCategory[] = [
    {title: 'Bags & Cases', src: la1, route: 'laptop_backpacks'},
    {title: 'Chargers & Adapters', src: la2, route: 'laptop_chargers'},
    {title: 'Cooling Pads & Fans', src: la3, route: 'cooling_pads'},
    {title: 'Docking Stations & Hubs', src: la4, route: 'usb_hubs'},
    {title: 'Adjustable Stands', src: la5, route: 'notebook_computer_stands'},
];

export { LAA, LA }