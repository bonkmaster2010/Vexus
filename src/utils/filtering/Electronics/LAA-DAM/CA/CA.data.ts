import { 
    keyboardManufacturers, 
    microphoneManufacturers, 
    mouseManufacturers, 
    speakerManufacturers, 
    usbHubManufacturers, 
    webcamManufacturers 
} from "./CA.manufacturers";

import { 
    KEYBOARD_FILTERS, 
    MICROPHONE_FILTERS, 
    MOUSE_FILTERS, 
    SPEAKER_FILTERS, 
    WEBCAM_FILTERS 
} from "./CA.specs";

import { 
    keyboardTypeFilters, 
    microphoneTypeFilters, 
    mouseTypeFilters, 
    speakerTypeFilters, 
    usbHubTypeFilters, 
    webcamTypeFilters 
} from "./CA.types";

export const CAData = {
    keyboards: {
        title: "Keyboards",
        manufacturers: keyboardManufacturers,
        types: keyboardTypeFilters,
        filters: KEYBOARD_FILTERS
    },

    mice: {
        title: "Mice",
        manufacturers: mouseManufacturers,
        types: mouseTypeFilters,
        filters: MOUSE_FILTERS
    },

    microphones: {
        title: "Microphones",
        manufacturers: microphoneManufacturers,
        types: microphoneTypeFilters,
        filters: MICROPHONE_FILTERS
    },

    webcams: {
        title: "Webcams",
        manufacturers: webcamManufacturers,
        types: webcamTypeFilters,
        filters: WEBCAM_FILTERS
    },

    speakers: {
        title: "Speakers",
        manufacturers: speakerManufacturers,
        types: speakerTypeFilters,
        filters: SPEAKER_FILTERS
    },

    usb_hubs: {
        title: "USB Hubs",
        manufacturers: usbHubManufacturers,
        types: usbHubTypeFilters
    }
};
