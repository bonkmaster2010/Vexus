

export const PC_FILTERS = [
    { name: "RAM", data: ["8GB", "16GB", "32GB", "64GB"], filterID: "systemMemory" },
    { name: "Storage", data: ["256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD", "HDD 1TB"], filterID: "storageCapacity" },
    { name: "Processor", data: ["Intel i5", "Intel i7", "Intel i9", "AMD Ryzen 5", "AMD Ryzen 7", "AMD Ryzen 9"], filterID: "processorBrand" },
    { name: "Graphics", data: ["NVIDIA", "AMD Radeon", "Intel UHD"], filterID: "graphicsBrand" },
];

export const LAPTOP_FILTERS = [
    { name: "RAM", data: ["8GB", "16GB", "32GB"], filterID: "systemMemory" },
    { name: "Storage", data: ["256GB SSD", "512GB SSD", "1TB SSD"], filterID: "storageCapacity" },
    { name: "Processor", data: ["Intel i3", "Intel i5", "Intel i7", "AMD Ryzen 3", "AMD Ryzen 5", "AMD Ryzen 7"], filterID: "processorBrand" },
    { name: "Screen Size", data: ["11 inch", "13 inch", "15 inch", "17 inch"], filterID: "screenSize" },
    { name: "Graphics", data: ["NVIDIA", "AMD Radeon", "Intel Iris"], filterID: "graphicsBrand" },
];

export const MONITOR_FILTERS = [
    { name: "Screen Size", data: ["22 inch", "24 inch", "27 inch", "32 inch", "34 inch"], filterID: "screenSize" },
    { name: "Resolution", data: ["1080p", "1440p", "4K"], filterID: "screenResolution" },
    { name: "Refresh Rate", data: ["60Hz", "75Hz", "120Hz", "144Hz", "240Hz"], filterID: "refreshRate" },
    { name: "Panel Type", data: ["IPS", "VA", "TN"], filterID: "panelType" },
];

export const LAPTOP_CHARGER_FILTERS = [
  {
    name: "Charger Type",
    data: ["AC Adapter", "USB-C Charger", "Car Charger", "Docking Charger"],
    filterID: "chargerType"
  },
  {
    name: "Power Output",
    data: ["45W", "60W", "65W", "85W", "90W", "100W", "120W", "135W", "150W"],
    filterID: "wattage"
  },
  {
    name: "Connector Type",
    data: ["Barrel Plug", "USB-C", "MagSafe", "Slim Tip", "Proprietary"],
    filterID: "connectorType"
  },
  {
    name: "Compatibility",
    data: ["HP Pavilion", "Dell Inspiron", "Lenovo ThinkPad", "MacBook Pro", "Asus ZenBook"],
    filterID: "compatibility"
  }
];

export const LAPTOP_BAGS_FILTERS = [
  {
    name: "Bag Type",
    data: ["Backpack", "Messenger Bag", "Sleeve", "Briefcase", "Roller Bag"],
    filterID: "bagType"
  },
  {
    name: "Fits Screen Size",
    data: ["13 inch", "14 inch", "15.6 inch", "17 inch"],
    filterID: "screenSize"
  },
  {
    name: "Material",
    data: ["Nylon", "Polyester", "Leather", "Canvas", "Neoprene"],
    filterID: "material"
  },
  {
    name: "Color",
    data: ["Black", "Gray", "Blue", "Red", "Brown"],
    filterID: "color"
  }
];

export const LAPTOP_COOLING_PADS_FILTERS = [
  {
    name: "Fan Size",
    data: ["80mm", "120mm", "140mm", "200mm"],
    filterID: "fanSize"
  },
  {
    name: "Number of Fans",
    data: ["1", "2", "3", "4", "5+"],
    filterID: "fanCount"
  },
  {
    name: "Lighting",
    data: ["No Lighting", "Blue LED", "RGB"],
    filterID: "lighting"
  },
  {
    name: "Fits Screen Size",
    data: ["Up to 15.6 inch", "Up to 17 inch", "17 inch and above"],
    filterID: "screenSize"
  },
  {
    name: "Adjustable Height",
    data: ["Yes", "No"],
    filterID: "adjustableHeight"
  }
];

export const LAPTOP_DOCKING_STATIONS_FILTERS = [
  {
    name: "Dock Type",
    data: ["Docking Station", "USB Hub", "Thunderbolt Dock", "Universal Dock"],
    filterID: "dockType"
  },
  {
    name: "Connection Type",
    data: ["USB-A", "USB-C", "Thunderbolt 3", "Thunderbolt 4", "Proprietary"],
    filterID: "connectionType"
  },
  {
    name: "Number of USB Ports",
    data: ["2", "4", "6", "8", "10+"],
    filterID: "usbPorts"
  },
  {
    name: "Video Output",
    data: ["HDMI", "DisplayPort", "VGA", "DVI", "None"],
    filterID: "videoOutput"
  },
  {
    name: "Power Delivery",
    data: ["Yes", "No"],
    filterID: "powerDelivery"
  }
];


export const LAPTOP_STANDS_FILTERS = [
  {
    name: "Material",
    data: ["Aluminum", "Plastic", "Wood", "Metal", "Acrylic"],
    filterID: "material"
  },
  {
    name: "Adjustability",
    data: ["Height Adjustable", "Angle Adjustable", "Fully Adjustable", "Fixed"],
    filterID: "adjustability"
  },
  {
    name: "Cooling Support",
    data: ["Yes", "No"],
    filterID: "coolingSupport"
  },
  {
    name: "Portable",
    data: ["Yes", "No"],
    filterID: "portable"
  },
  {
    name: "Fits Screen Size",
    data: ["Up to 13 inch", "Up to 15.6 inch", "Up to 17 inch"],
    filterID: "screenSize"
  }
];
