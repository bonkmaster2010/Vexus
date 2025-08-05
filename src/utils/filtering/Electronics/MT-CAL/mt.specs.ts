
export const MOBILE_FILTERS = [
    { name: "Storage", data: ["64GB", "128GB", "256GB", "512GB", "1TB"], filterID: "storageCapacity" },
    { name: "RAM", data: ["4GB", "6GB", "8GB", "12GB", "16GB"], filterID: "systemMemory" },
    { name: "Operating System", data: ["iOS", "Android"], filterID: "operatingSystem" },
    { name: "Network", data: ["5G", "4G LTE"], filterID: "networkTechnology" },
];

export const TABLET_FILTERS = [
    { name: "Storage", data: ["32GB", "64GB", "128GB", "256GB", "512GB", "1TB"], filterID: "storageCapacity" },
    { name: "RAM", data: ["3GB", "4GB", "6GB", "8GB"], filterID: "systemMemory" },
    { name: "Operating System", data: ["iOS", "Android", "Windows"], filterID: "operatingSystem" },
    { name: "Screen Size", data: ["8 inch", "10 inch", "12 inch", "14 inch"], filterID: "screenSize" },
];

export const SMARTWATCH_FILTERS = [
  {name: "Connectivity", data: ["Bluetooth", "Wi-Fi", "GPS", "LTE"], filterID: "connectivityTechnology"},
  {name: "Operating System", data: ["watchOS", "Wear OS", "Fitbit OS", "Garmin OS", "Tizen"], filterID: "operatingSystem"},
  {name: "Features", data: ["Heart Rate Monitor", "Sleep Tracking", "ECG", "Fall Detection", "Step Counter"], filterID: "features"},
  {name: "Water Resistance", data: ["Yes", "50 meters", "100 meters"], filterID: "waterResistance"},
  {name: "Battery Life", data: ["1 day", "2 days", "5 days", "7+ days"], filterID: "batteryLife"},
  {name: "Case Size", data: ["38mm", "40mm", "42mm", "44mm", "46mm"], filterID: "caseSize"},
  {name: "Brand", data: ["Apple", "Samsung", "Fitbit", "Garmin", "Fossil"], filterID: "brand"}
];
