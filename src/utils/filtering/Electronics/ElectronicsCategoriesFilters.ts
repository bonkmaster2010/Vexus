import { MBData } from "./MT-CAL/mt.data";
import { pc_comps_data } from "./pc-comps/pc-comps.data";
import { CALData } from "./LAA-DAM/cal.data";

/* 
 - each object in here has -
  title - Page title
  manufacturers - manufacturer data
  types - type data
  filters - spec data 
*/
export const fullElecCategoriesData = {
  ...CALData,
  ...MBData,
  ...pc_comps_data,
  search: {
    types: [
    { id: 'pc', title: 'PCs' },
    { id: 'laptop', title: 'Laptops' },
    { id: 'smartphone', title: 'Smartphones' },
    { id: 'monitor', title: 'Monitors' },
    { id: 'tv', title: 'TVs' },
    { id: 'smartwatch', title: 'Smartwatches' },
    { id: 'tablet', title: 'Tablets' },
    { id: 'keyboard', title: 'Keyboards' },
    { id: 'mice', title: 'Mice' },
    { id: 'headphone', title: 'Headphones' },
    { id: 'speaker', title: 'Speakers' },
    { id: 'printer', title: 'Printers' },
    { id: 'camera', title: 'Cameras' },
    { id: 'drone', title: 'Drones' },
    { id: 'router', title: 'Routers' },
    { id: 'projector', title: 'Projectors' },
    { id: 'microphone', title: 'Microphones' },
    { id: 'power supplie', title: 'Power Supplies' },
    { id: 'motherboard', title: 'Motherboards' },
    { id: 'ram', title: 'RAM' },
    { id: 'storage', title: 'Storage' }
  ]

  }
};
