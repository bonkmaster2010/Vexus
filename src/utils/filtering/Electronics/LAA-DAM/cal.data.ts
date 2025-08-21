import { CAData } from "./CA/CA.data";
import { LAData } from "./LA/LA.data";
import { monitorManufacturers, pcManufacturers } from "./laa.dam.manufacturers";
import { LAPTOP_FILTERS, MONITOR_FILTERS, PC_FILTERS } from "./laa.dam.specs";
import { laptopTypeFilters, monitorTypeFilters, pcTypeFilters } from "./laa.dam.types";



export const CALData = {
    pcs: {
        title: "PCs",
        filters: PC_FILTERS,
        types: pcTypeFilters,
        manufacturers: pcManufacturers,
    },
    
    laptops: {
        title: "Laptops",
        filters: LAPTOP_FILTERS,
        types: laptopTypeFilters,
        manufacturers: pcManufacturers,
    },
    
    monitors: {
        title: "Monitors",
        filters: MONITOR_FILTERS,
        types: monitorTypeFilters,
        manufacturers: monitorManufacturers,
    },

    ...LAData,
    ...CAData
};
