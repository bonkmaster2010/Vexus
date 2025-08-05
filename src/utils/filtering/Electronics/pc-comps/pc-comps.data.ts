import { caseManufacturer, coolerManufacturers, cpuManufacturers, gpuManufacturers, MBManufacturer, psuManufacturers, ramManufacturers, storageManufacturers } from "./pc-comps.manufacturers";
import { CASE_FILTERS, COOLING_FILTERS, CPU_FILTERS, GPU_FILTERS, MOTHERBOARD_FILTERS, PSU_FILTERS, RAM_FILTERS, STORAGE_FILTERS } from "./pc-comps.specs";


export const pc_comps_data = {
    gpu: {
        title: "Graphics Cards",
        manufacturers: gpuManufacturers,
        filters: GPU_FILTERS
    },

    cpu: {
        title: "Processors",
        manufacturers: cpuManufacturers,
        filters: CPU_FILTERS
    },

    ram: {
        title: "Ram",
        manufacturers: ramManufacturers,
        filters: RAM_FILTERS
    },

    storage: {
        title: "Storage",
        manufacturers: storageManufacturers,
        filters: STORAGE_FILTERS
    },

    motherboard: {
        title: "Mother Boards",
        manufacturers: MBManufacturer,
        filters: MOTHERBOARD_FILTERS
    },

    case: {
        title: "PC Cases",
        manufacturers: caseManufacturer,
        filters: CASE_FILTERS
    },

    ps: {
        title: "Power Supplies",
        manufacturers: psuManufacturers,
        filters: PSU_FILTERS
    },

    coolers: {
        title: "Fans & Cooling",
        manufacturers: coolerManufacturers,
        filters: COOLING_FILTERS
    }
};

export const pc_comps_links = {}