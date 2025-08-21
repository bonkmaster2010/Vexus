import { casesAndProtectorsManufacturers, chargersAndCablesManufacturers, headsetsManufacturers, lensAttachmentsManufacturers, mountsAndHoldersManufacturers, powerBanksManufacturers, screenProtectorsManufacturers, selfieSticksManufacturers } from "./mt.manufacturers";
import { CASES_AND_PROTECTORS_FILTERS, CHARGERS_AND_CABLES_FILTERS, HEADSETS_FILTERS, LENS_ATTACHMENTS_FILTERS, MOUNTS_AND_HOLDERS_FILTERS, POWER_BANKS_FILTERS, SCREEN_PROTECTORS_FILTERS, SELFIE_STICKS_FILTERS } from "./mt.specs";
import { casesAndProtectorsTypeFilters, chargersAndCablesTypeFilters, headsetsTypeFilters, lensAttachmentsTypeFilters, mountsAndHoldersTypeFilters, powerBanksTypeFilters, screenProtectorsTypeFilters, selfieSticksTypeFilters } from "./mt.types";




export const MADATA = {
    headsets: {
        title: "Headsets",
        types: headsetsTypeFilters,
        filters: HEADSETS_FILTERS,
        manufacturers: headsetsManufacturers
    },

    casesAndProtectors: {
        title: "Cases & Protectors",
        types: casesAndProtectorsTypeFilters,
        filters: CASES_AND_PROTECTORS_FILTERS,
        manufacturers: casesAndProtectorsManufacturers
    },

    chargersAndCables: {
        title: "Chargers & Cables",
        types: chargersAndCablesTypeFilters,
        filters: CHARGERS_AND_CABLES_FILTERS,
        manufacturers: chargersAndCablesManufacturers
    },

    mobilePhoneScreenProtectors: {
        title: "Mobile Screen Protectors",
        types: screenProtectorsTypeFilters,
        filters: SCREEN_PROTECTORS_FILTERS,
        manufacturers: screenProtectorsManufacturers
    },

    mountsAndHolders: {
        title: "Mounts & Holders",
        types: mountsAndHoldersTypeFilters,
        filters: MOUNTS_AND_HOLDERS_FILTERS,
        manufacturers: mountsAndHoldersManufacturers
    },
 
    powerBanks: {
        title: "Power Banks",
        types: powerBanksTypeFilters,
        filters: POWER_BANKS_FILTERS,
        manufacturers: powerBanksManufacturers
    },

    lensAttachments: {
        title: "Lens Attachments",
        types: lensAttachmentsTypeFilters,
        filters: LENS_ATTACHMENTS_FILTERS,
        manufacturers: lensAttachmentsManufacturers
    },

    selfieSticks: {
        title: "Selfie Sticks",
        types: selfieSticksTypeFilters,
        filters: SELFIE_STICKS_FILTERS,
        manufacturers: selfieSticksManufacturers
    },

}