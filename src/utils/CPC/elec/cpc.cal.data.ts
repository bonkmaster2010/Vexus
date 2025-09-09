import { caKeyboards, calLaptop, calMonitor, calPC, calPcComps, caMices, caMicrophones, caSpeakers, caUsbHubs, caWebcams } from "../../image-arrays/electronic.page.cates.imgs";
import type { CategoryPageCategory } from "../../interfaces/components/main.comps.if";

const CAL: CategoryPageCategory[]  = [
    {title: "Pcs", src: calPC, route: "pcs"},
    {title: "Monitors", src: calMonitor, route: "monitors"},
    {title: "Laptops & Accessories", src: calLaptop, route: "laa", routeType: "categories"},
    {title: "Computer Hardware", src: calPcComps, route: "pc_comps", routeType: "categories"},
];

const DAM: CategoryPageCategory[]  = [
    {title: "Pcs", src: calPC, route: "pcs"},
    {title: "Monitors", src: calMonitor, route: "monitors"},
];

const computerAccessories: CategoryPageCategory[] = [
    {title: "Keyboards", src: caKeyboards, route: "keyboards"},
    {title: "Mouses", src: caMices, route: "mice"},
    {title: "Webcams", src: caWebcams, route: "webcams"},
    {title: "Microphones", src: caMicrophones, route: "microphones"},
    {title: "Speakers", src: caSpeakers, route: "speakers"},
    {title: "USB Hubs & Adapters", src: caUsbHubs, route: "usb_hubs"},
]


export { CAL, DAM, computerAccessories}