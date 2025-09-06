import { 
    caseManufacturer, 
    coolerManufacturers, 
    cpuManufacturers, 
    gpuManufacturers, 
    MBManufacturer, 
    psuManufacturers, 
    ramManufacturers, 
    storageManufacturers 
} from "./pc-comps.manufacturers";

import { 
    CASE_FILTERS, 
    COOLING_FILTERS, 
    CPU_FILTERS, 
    GPU_FILTERS, 
    MOTHERBOARD_FILTERS, 
    PSU_FILTERS, 
    RAM_FILTERS, 
    STORAGE_FILTERS 
} from "./pc-comps.specs";

export const pc_comps_data = {
    graphics_cards: {
        title: "Graphics Cards",
        manufacturers: gpuManufacturers,
        filters: GPU_FILTERS
    },

    processors: {
        title: "Processors",
        manufacturers: cpuManufacturers,
        filters: CPU_FILTERS
    },

    memory: {
        title: "Memory",
        manufacturers: ramManufacturers,
        filters: RAM_FILTERS
    },

    storage: {
        title: "Storage",
        manufacturers: storageManufacturers,
        filters: STORAGE_FILTERS
    },

    motherboards: {
        title: "Motherboards",
        manufacturers: MBManufacturer,
        filters: MOTHERBOARD_FILTERS
    },

    computer_cases: {
        title: "Computer Cases",
        manufacturers: caseManufacturer,
        filters: CASE_FILTERS
    },

    power_supplies: {
        title: "Power Supplies",
        manufacturers: psuManufacturers,
        filters: PSU_FILTERS
    },

    cooling: {
        title: "Cooling",
        manufacturers: coolerManufacturers,
        filters: COOLING_FILTERS
    }
};

export const pc_comps_links = {};
