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
