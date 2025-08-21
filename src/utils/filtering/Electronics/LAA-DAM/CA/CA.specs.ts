export const KEYBOARD_FILTERS = [
  {
    name: "Keyboard Type",
    data: ["Mechanical", "Membrane", "Wireless", "Ergonomic", "Gaming"],
    filterID: "keyboardType"
  },
  {
    name: "Switch Type",
    data: ["Cherry MX Red", "Cherry MX Blue", "Razer Green", "Membrane"],
    filterID: "switchType"
  },
  {
    name: "Connectivity",
    data: ["USB", "Bluetooth", "Wireless Receiver"],
    filterID: "connectivity"
  },
  {
    name: "Backlight",
    data: ["None", "Single Color", "RGB"],
    filterID: "backlight"
  }
];

export const MOUSE_FILTERS = [
  {
    name: "Mouse Type",
    data: ["Gaming", "Ergonomic", "Trackball", "Wireless", "USB"],
    filterID: "mouseType"
  },
  {
    name: "DPI Range",
    data: ["400-800", "800-1600", "1600-3200", "3200+"],
    filterID: "dpiRange"
  },
  {
    name: "Buttons",
    data: ["3 Buttons", "5 Buttons", "7+ Buttons"],
    filterID: "buttons"
  },
  {
    name: "Connectivity",
    data: ["USB", "Bluetooth", "Wireless Receiver"],
    filterID: "connectivity"
  }
];

export const WEBCAM_FILTERS = [
  {
    name: "Resolution",
    data: ["720p", "1080p", "4K"],
    filterID: "resolution"
  },
  {
    name: "Frame Rate",
    data: ["30fps", "60fps"],
    filterID: "frameRate"
  },
  {
    name: "Connectivity",
    data: ["USB", "USB-C"],
    filterID: "connectivity"
  },
  {
    name: "Field of View",
    data: ["60°", "75°", "90°", "120°"],
    filterID: "fov"
  }
];

export const MICROPHONE_FILTERS = [
  {
    name: "Microphone Type",
    data: ["USB", "XLR", "Condenser", "Dynamic", "Streaming"],
    filterID: "micType"
  },
  {
    name: "Polar Pattern",
    data: ["Cardioid", "Omnidirectional", "Bidirectional", "Stereo"],
    filterID: "polarPattern"
  },
  {
    name: "Connectivity",
    data: ["USB", "XLR", "3.5mm"],
    filterID: "connectivity"
  },
  {
    name: "Frequency Response",
    data: ["20Hz-20kHz", "50Hz-16kHz", "100Hz-15kHz"],
    filterID: "frequencyResponse"
  }
];

export const SPEAKER_FILTERS = [
  {
    name: "Speaker Type",
    data: ["Bluetooth", "Computer", "Portable", "Soundbar", "Studio Monitor"],
    filterID: "speakerType"
  },
  {
    name: "Power Output",
    data: ["5W", "10W", "20W", "50W", "100W+"],
    filterID: "powerOutput"
  },
  {
    name: "Connectivity",
    data: ["3.5mm", "USB", "Bluetooth", "Wi-Fi"],
    filterID: "connectivity"
  },
  {
    name: "Number of Channels",
    data: ["1.0", "2.0", "2.1", "5.1", "7.1"],
    filterID: "channels"
  }
];
