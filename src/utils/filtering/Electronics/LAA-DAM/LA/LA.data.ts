import { 
    laptopBagsManufacturers, 
    laptopChargerManufacturers, 
    laptopCoolingPadsManufacturers, 
    laptopDockingStationsManufacturers, 
    laptopStandsManufacturers 
} from "../laa.dam.manufacturers";

import { 
    LAPTOP_BAGS_FILTERS, 
    LAPTOP_CHARGER_FILTERS, 
    LAPTOP_COOLING_PADS_FILTERS, 
    LAPTOP_DOCKING_STATIONS_FILTERS, 
    LAPTOP_STANDS_FILTERS 
} from "../laa.dam.specs";

import { 
    laptopAdjustableStandsTypeFilters, 
    laptopBagTypeFilters, 
    laptopChargerTypeFilters, 
    laptopCoolingPadsTypeFilters, 
    laptopDockingStationsTypeFilters 
} from "../laa.dam.types";

export const LAData = {
    laptop_chargers: {
        title: "Chargers & Adapters",
        manufacturers: laptopChargerManufacturers,
        filters: LAPTOP_CHARGER_FILTERS,
        types: laptopChargerTypeFilters
    },

    laptop_backpacks: {
        title: "Bags & Cases",
        manufacturers: laptopBagsManufacturers,
        filters: LAPTOP_BAGS_FILTERS,
        types: laptopBagTypeFilters
    },

    cooling_pads: {
        title: "Cooling Pads & Fans",
        manufacturers: laptopCoolingPadsManufacturers,
        filters: LAPTOP_COOLING_PADS_FILTERS,
        types: laptopCoolingPadsTypeFilters
    },

    usb_hubs: {
        title: "Docking Stations & Hubs",
        manufacturers: laptopDockingStationsManufacturers,
        filters: LAPTOP_DOCKING_STATIONS_FILTERS,
        types: laptopDockingStationsTypeFilters
    },

    notebook_computer_stands: {
        title: "Laptop Stands",
        manufacturers: laptopStandsManufacturers,
        filters: LAPTOP_STANDS_FILTERS,
        types: laptopAdjustableStandsTypeFilters
    }
};
