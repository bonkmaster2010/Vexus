import { MBData } from "./MT-CAL/mt.data";
import { pc_comps_data } from "./pc-comps/pc-comps.data";
import { CALData } from "./LAA-DAM/cal.data";

export const fullElecCategoriesData = {
  ...CALData,
  ...MBData,
  ...pc_comps_data,
  search: {
    types: [
    { id: 'pcs', title: 'PCs' },
    { id: 'laptops', title: 'Laptops' },
    { id: 'smartphones', title: 'Smartphones' },
    { id: 'monitors', title: 'Monitors' },
    { id: 'tvs', title: 'TVs' },
    { id: 'smartwatches', title: 'Smartwatches' },
    { id: 'tablets', title: 'Tablets' },
    { id: 'keyboards', title: 'Keyboards' },
    { id: 'mice', title: 'Mice' },
    { id: 'headphones', title: 'Headphones' },
    { id: 'speakers', title: 'Speakers' },
    { id: 'printers', title: 'Printers' },
    { id: 'cameras', title: 'Cameras' },
    { id: 'drones', title: 'Drones' },
    { id: 'routers', title: 'Routers' },
    { id: 'projectors', title: 'Projectors' },
    { id: 'microphones', title: 'Microphones' },
    { id: 'power supplies', title: 'Power Supplies' },
    { id: 'motherboards', title: 'Motherboards' },
    { id: 'ram', title: 'RAM' },
    { id: 'storage', title: 'Storage' }
  ]

  }
};
