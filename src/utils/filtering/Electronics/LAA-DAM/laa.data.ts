import { laptopBagsManufacturers, laptopChargerManufacturers, laptopCoolingPadsManufacturers, laptopDockingStationsManufacturers, laptopStandsManufacturers, monitorManufacturers, pcManufacturers } from "./laa_dam_manufacturers";
import { LAPTOP_BAGS_FILTERS, LAPTOP_CHARGER_FILTERS, LAPTOP_COOLING_PADS_FILTERS, LAPTOP_DOCKING_STATIONS_FILTERS, LAPTOP_FILTERS, LAPTOP_STANDS_FILTERS, MONITOR_FILTERS, PC_FILTERS } from "./laa_dam_specs";
import { laptopAdjustableStandsTypeFilters, laptopBagTypeFilters, laptopChargerTypeFilters, laptopCoolingPadsTypeFilters, laptopDockingStationsTypeFilters, laptopTypeFilters, monitorTypeFilters, pcTypeFilters } from "./laa_dam_types";



export const LAAData = {
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

    laptopChargers: {
        title: "Chargers & Adapters",
        manufacturers: laptopChargerManufacturers,
        filters: LAPTOP_CHARGER_FILTERS,
        types: laptopChargerTypeFilters
    },

    laptopBags: {
        title: "Bags & Cases",
        manufacturers: laptopBagsManufacturers,
        filters: LAPTOP_BAGS_FILTERS,
        types: laptopBagTypeFilters
    },

    laptopCoolingpads: {
        title: "Cooling Pads & Fans",
        manufacturers: laptopCoolingPadsManufacturers,
        filters: LAPTOP_COOLING_PADS_FILTERS,
        types: laptopCoolingPadsTypeFilters
    },

    laptopDocking: {
        title: "Docking stations & Hubs",
        manufacturers: laptopDockingStationsManufacturers,
        filters: LAPTOP_DOCKING_STATIONS_FILTERS,
        types: laptopDockingStationsTypeFilters
    },

    laptopAdjustableStand: {
        title: "Adjustable Stands",
        manufacturers: laptopStandsManufacturers,
        filters: LAPTOP_STANDS_FILTERS,
        types: laptopAdjustableStandsTypeFilters
    }
};
