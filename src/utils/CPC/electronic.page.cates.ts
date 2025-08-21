import { CAL, computerAccessories, DAM } from "./elec/cpc.cal.data";
import { LA, LAA } from "./elec/cpc.laa.data";
import { MA, MT } from "./elec/cpc.mt.data";
import { PCC } from "./elec/cpc.pcc.data";




export const allElecCatesData = {
    cal: {data: CAL, title: "Computer & Laptops"},
    mt: {data: MT, title: "Mobile & Tablets"},
    ma: {data: MA, title: "Mobile Accessories"},
    dam: {data: DAM, title: "Desktops & Monitors"},
    computerAccessories: {data: computerAccessories, title: "Computer Accessories"},
    laa: {data: LAA, title: "Laptops & Accessories"},
    la: {data: LA, title: "Laptop Accessories"},
    pc_comps: {data: PCC, title: "Computer Hardware"}
};
