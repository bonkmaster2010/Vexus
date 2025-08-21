import { 
    TABLET_FILTERS, 
    MOBILE_FILTERS,
    SMARTWATCH_FILTERS, 
} from './mt.specs';

import { tabletTypeFilters, phoneTypeFilters, smartwatchTypeFilters } from './mt.types';
import { phoneManufacturers, smartwatchManufacturers } from './mt.manufacturers';
import { MADATA } from './ma.data';


export const MBData = {
    tablets: {
        title: "Tablets",
        filters: TABLET_FILTERS,
        types: tabletTypeFilters,
    },

    mobiles: {
        title: "Mobiles",
        filters: MOBILE_FILTERS,
        types: phoneTypeFilters,
        manufacturers: phoneManufacturers,
    },

    smartwatches: {
        title: "Smart Watches",
        filters: SMARTWATCH_FILTERS,
        types: smartwatchTypeFilters,
        manufacturers: smartwatchManufacturers,
    },

    ...MADATA
};