import { 
    TABLET_FILTERS, 
    MOBILE_FILTERS,
    SMARTWATCH_FILTERS, 
} from './mt.specs';

import { phoneManufacturers, smartwatchManufacturers } from './mt.manufacturers';
import { MADATA } from './ma.data';


export const MBData = {
    tablets: {
        title: "Tablets",
        filters: TABLET_FILTERS,
        manufacturers: phoneManufacturers
    },

    smartphones: {
        title: "Smartphones",
        filters: MOBILE_FILTERS,
        manufacturers: phoneManufacturers,
    },

    smartwatches: {
        title: "Smart Watches",
        filters: SMARTWATCH_FILTERS,
        manufacturers: smartwatchManufacturers,
    },

    ...MADATA
};