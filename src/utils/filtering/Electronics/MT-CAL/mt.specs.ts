export const MOBILE_FILTERS = [
  { name: "Storage", data: ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"], filterID: "storageCapacity" },
  { name: "RAM", data: ["4 GB", "6 GB", "8 GB", "12 GB", "16 GB"], filterID: "systemMemory" },
  { name: "Operating System", data: ["iOS", "Android"], filterID: "operatingSystem" },
  { name: "Network", data: ["5G", "4G LTE"], filterID: "networkTechnology" },
];

export const TABLET_FILTERS = [
  { name: "Storage", data: ["32 GB", "64 GB", "128 GB", "256 GB", "512 GB", "1 TB"], filterID: "storageCapacity" },
  { name: "RAM", data: ["3 GB", "4 GB", "6 GB", "8 GB"], filterID: "systemMemory" },
  { name: "Operating System", data: ["iOS", "Android", "Windows"], filterID: "operatingSystem" },
  { name: "Screen Size", data: ["8 in", "10 in", "12 in", "14 in"], filterID: "screenSize" },
];

export const SMARTWATCH_FILTERS = [
  { name: "Connectivity", data: ["Bluetooth", "Wi-Fi", "GPS", "LTE"], filterID: "connectivityTechnology" },
  { name: "Operating System", data: ["watchOS", "Wear OS", "Fitbit OS", "Garmin OS", "Tizen"], filterID: "operatingSystem" },
  { name: "Features", data: ["Heart Rate Monitor", "Sleep Tracking", "ECG", "Fall Detection", "Step Counter"], filterID: "features" },
  { name: "Water Resistance", data: ["Yes", "50 m", "100 m"], filterID: "waterResistance" },
  { name: "Battery Life", data: ["1 day", "2 days", "5 days", "7+ days"], filterID: "batteryLife" },
  { name: "Case Size", data: ["38 mm", "40 mm", "42 mm", "44 mm", "46 mm"], filterID: "caseSize" },
  { name: "Brand", data: ["Apple", "Samsung", "Fitbit", "Garmin", "Fossil"], filterID: "brand" }
];

export const HEADSETS_FILTERS = [
  { name: "Connectivity", data: ["Bluetooth", "Wired", "Wireless", "NFC"], filterID: "connectivityTechnology" },
  { name: "Features", data: ["Microphone", "Noise Cancellation", "Water Resistant", "Foldable"], filterID: "features" },
  { name: "Battery Life", data: ["Up to 5 hrs", "5–10 hrs", "10+ hrs"], filterID: "batteryLife" },
  { name: "Brand", data: ["Sony", "Bose", "JBL", "Beats", "Sennheiser"], filterID: "brand" }
];

export const CASES_AND_PROTECTORS_FILTERS = [
  { name: "Material", data: ["Silicone", "Leather", "Plastic", "Metal"], filterID: "material" },
  { name: "Compatibility", data: ["iPhone", "Samsung", "Google Pixel", "OnePlus"], filterID: "compatibility" },
  { name: "Brand", data: ["OtterBox", "Spigen", "Speck", "Tech21"], filterID: "brand" }
];

export const CHARGERS_AND_CABLES_FILTERS = [
  { name: "Connector Type", data: ["USB-C", "Lightning", "Micro-USB", "MagSafe"], filterID: "connectorType" },
  { name: "Charging Type", data: ["Wired", "Wireless", "Fast Charging"], filterID: "chargingType" },
  { name: "Cable Length", data: ["1 ft", "3 ft", "6 ft", "10 ft"], filterID: "cableLength" },
  { name: "Brand", data: ["Anker", "Belkin", "Apple", "Samsung"], filterID: "brand" }
];

export const SCREEN_PROTECTORS_FILTERS = [
  { name: "Material", data: ["Tempered Glass", "PET Film", "TPU"], filterID: "material" },
  { name: "Compatibility", data: ["iPhone", "Samsung", "Google Pixel"], filterID: "compatibility" },
  { name: "Features", data: ["Anti-Glare", "Privacy", "Scratch Resistant", "Bubble Free"], filterID: "features" },
  { name: "Brand", data: ["ZAGG", "amFilm", "Tech Armor"], filterID: "brand" }
];

export const MOUNTS_AND_HOLDERS_FILTERS = [
  { name: "Compatibility", data: ["Universal", "iPhone", "Samsung"], filterID: "compatibility" },
  { name: "Adjustability", data: ["Fixed", "360°", "Tilt"], filterID: "adjustability" },
  { name: "Brand", data: ["iOttie", "Scosche", "RAM Mounts"], filterID: "brand" }
];

export const POWER_BANKS_FILTERS = [
  { name: "Capacity", data: ["5,000 mAh", "10,000 mAh", "20,000 mAh", "30,000 mAh"], filterID: "capacity" },
  { name: "Output Ports", data: ["1", "2", "3+"], filterID: "outputPorts" },
  { name: "Charging Type", data: ["Wired", "Wireless"], filterID: "chargingType" },
  { name: "Brand", data: ["Anker", "RAVPower", "Mophie"], filterID: "brand" }
];

export const LENS_ATTACHMENTS_FILTERS = [
  { name: "Compatibility", data: ["Universal", "iPhone", "Samsung"], filterID: "compatibility" },
  { name: "Mount Type", data: ["Clip-On", "Case Attachment"], filterID: "mountType" },
  { name: "Brand", data: ["Moment", "Apexel", "Olloclip"], filterID: "brand" }
];

export const SELFIE_STICKS_FILTERS = [
  { name: "Connectivity", data: ["Bluetooth", "Wired"], filterID: "connectivityTechnology" },
  { name: "Extendable Length", data: ["Up to 20 in", "Up to 40 in", "Up to 60 in"], filterID: "extendableLength" },
  { name: "Features", data: ["Remote Shutter", "Tripod Compatible"], filterID: "features" },
  { name: "Brand", data: ["Fugetek", "Mpow", "Anker"], filterID: "brand" }
];
