import { 
    casesAndProtectorsManufacturers, 
    chargersAndCablesManufacturers, 
    headsetsManufacturers, 
    lensAttachmentsManufacturers, 
    mountsAndHoldersManufacturers, 
    powerBanksManufacturers, 
    screenProtectorsManufacturers, 
    selfieSticksManufacturers 
} from "./mt.manufacturers";

import { 
    CASES_AND_PROTECTORS_FILTERS, 
    CHARGERS_AND_CABLES_FILTERS, 
    HEADSETS_FILTERS, 
    LENS_ATTACHMENTS_FILTERS, 
    MOUNTS_AND_HOLDERS_FILTERS, 
    POWER_BANKS_FILTERS, 
    SCREEN_PROTECTORS_FILTERS, 
    SELFIE_STICKS_FILTERS 
} from "./mt.specs";

import { 
    casesAndProtectorsTypeFilters, 
    chargersAndCablesTypeFilters, 
    headsetsTypeFilters, 
    lensAttachmentsTypeFilters, 
    mountsAndHoldersTypeFilters, 
    powerBanksTypeFilters, 
    screenProtectorsTypeFilters, 
    selfieSticksTypeFilters 
} from "./mt.types";

export const MADATA = {
    headphones: {
        title: "Headphones",
        types: headsetsTypeFilters,
        filters: HEADSETS_FILTERS,
        manufacturers: headsetsManufacturers
    },

    cases_covers: {
        title: "Cases & Covers",
        types: casesAndProtectorsTypeFilters,
        filters: CASES_AND_PROTECTORS_FILTERS,
        manufacturers: casesAndProtectorsManufacturers
    },

    chargers: {
        title: "Chargers",
        types: chargersAndCablesTypeFilters,
        filters: CHARGERS_AND_CABLES_FILTERS,
        manufacturers: chargersAndCablesManufacturers
    },

    screen_protectors: {
        title: "Screen Protectors",
        types: screenProtectorsTypeFilters,
        filters: SCREEN_PROTECTORS_FILTERS,
        manufacturers: screenProtectorsManufacturers
    },

    carmounts_holders: {
        title: "Car Mounts & Holders",
        types: mountsAndHoldersTypeFilters,
        filters: MOUNTS_AND_HOLDERS_FILTERS,
        manufacturers: mountsAndHoldersManufacturers
    },
 
    powerbanks: {
        title: "Power Banks",
        types: powerBanksTypeFilters,
        filters: POWER_BANKS_FILTERS,
        manufacturers: powerBanksManufacturers
    },

    lens_attachments: {
        title: "Lens Attachments",
        types: lensAttachmentsTypeFilters,
        filters: LENS_ATTACHMENTS_FILTERS,
        manufacturers: lensAttachmentsManufacturers
    },

    selfie_sticks: {
        title: "Selfie Sticks",
        types: selfieSticksTypeFilters,
        filters: SELFIE_STICKS_FILTERS,
        manufacturers: selfieSticksManufacturers
    }
};
