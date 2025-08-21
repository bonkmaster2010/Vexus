import { keyboardManufacturers, microphoneManufacturers, mouseManufacturers, speakerManufacturers, usbHubManufacturers, webcamManufacturers } from "./CA.manufacturers";
import { KEYBOARD_FILTERS, MICROPHONE_FILTERS, MOUSE_FILTERS, SPEAKER_FILTERS, WEBCAM_FILTERS } from "./CA.specs";
import { keyboardTypeFilters, microphoneTypeFilters, mouseTypeFilters, speakerTypeFilters, usbHubTypeFilters, webcamTypeFilters } from "./CA.types";



export const CAData = {
    keyboards: {
        title: "Keyboards",
        manufacturers: keyboardManufacturers,
        types: keyboardTypeFilters,
        filters: KEYBOARD_FILTERS
    },

    miceAndTrackballs: {
        title: "Mouses & Trackballs",
        manufacturers: mouseManufacturers,
        types: mouseTypeFilters,
        filters: MOUSE_FILTERS
    },

    webcams: {
        title: "Webcams",
        manufacturers: webcamManufacturers,
        types: webcamTypeFilters,
        filters: WEBCAM_FILTERS
    },

    microphones: {
        title: "Microphones",
        manufacturers: microphoneManufacturers,
        types: microphoneTypeFilters,
        filters: MICROPHONE_FILTERS
    },

    speakers: {
        title: "Speakers",
        manufacturers: speakerManufacturers,
        types: speakerTypeFilters,
        filters: SPEAKER_FILTERS
    },

    usbHubsAndAdapters: {
        title: "USB Hubs & Adapters",
        manufacturers: usbHubManufacturers,
        types: usbHubTypeFilters,
    },
}