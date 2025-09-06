export const CALSubLinks = {
  desktop: [
    { title: "Gaming Desktops", id: "gaming", route: "pcs" },
    { title: "All-in-One Desktops", id: "all-in-one", route: "pcs" },
    { title: "Tower Desktops", id: "tower", route: "pcs" },
    { title: "Mini Desktops", id: "mini", route: "pcs" },
    { title: "Workstation Desktops", id: "workstation", route: "pcs" },
    { title: "Monitors", id: "monitors", route: "monitors" }
  ],

  desktopAccessories: [
    { title: "Keyboards", id: "keyboard", route: "keyboards" },
    { title: "Mice & Trackballs", id: "mouse", route: "mice" },
    { title: "Webcams", id: "webcam", route: "webcams" },
    { title: "Speakers", id: "speaker", route: "speakers" },
    { title: "USB Hubs & Adapters", id: "usb-hub", route: "usb_hubs" }
  ],

  laptop: [
    { title: "Gaming Laptops", id: "gaming", route: "laptops" },
    { title: "2-in-1 Laptops", id: "2-in-1", route: "laptops" },
    { title: "MacBooks", id: "macbook", route: "laptops" }
  ],

  laptopAccessories: [
    { title: "Laptop Chargers & Adapters", id: "laptop-charger", route: "laptop_chargers" },
    { title: "Laptop Bags & Cases", id: "laptop-bag", route: "laptop_backpacks" },
    { title: "Cooling Pads & Fans", id: "cooling-pad", route: "cooling_pads" },
    { title: "Docking Stations & Hubs", id: "docking-station", route: "usb_hubs" },
    { title: "Adjustable Notebook Stands", id: "adjustable-stand", route: "notebook_computer_stands" }
  ],

  monitor: [
    { title: "Gaming Monitors", id: "gaming", route: "monitors" },
    { title: "4K Monitors", id: "4k", route: "monitors" },
    { title: "Ultrawide Monitors", id: "ultrawide", route: "monitors" },
    { title: "Curved Monitors", id: "curved", route: "monitors" },
    { title: "Professional Monitors", id: "professional", route: "monitors" }
  ],

  pc_comps: [
    { title: "Graphics Cards", id: "graphics-card", route: "graphics_cards" },
    { title: "Processors", id: "processor", route: "processors" },
    { title: "RAM", id: "memory", route: "memory" },
    { title: "Storage Drives", id: "ssd", route: "storage" },
    { title: "Motherboards", id: "motherboard", route: "motherboards" },
    { title: "PC Cases", id: "case", route: "computer_cases" },
    { title: "Power Supplies", id: "power-supply", route: "power_supplies" },
    { title: "Cooling Fans & Heatsinks", id: "cpu-cooler", route: "cooling" }
  ]
};

export const MTSubLinks = {
  tablet: [
    { title: "Apple Tablets", id: "apple", route: "tablets" },
    { title: "Samsung Tablets", id: "samsung", route: "tablets" },
    { title: "Lenovo Tablets", id: "lenovo", route: "tablets" },
    { title: "Microsoft Tablets", id: "microsoft", route: "tablets" },
    { title: "Amazon Tablets", id: "amazon", route: "tablets" }
  ],

  mobile: [
    { title: "Apple Phones", id: "apple", route: "smartphones" },
    { title: "Samsung Phones", id: "samsung", route: "smartphones" },
    { title: "Google Phones", id: "google", route: "smartphones" },
    { title: "OnePlus Phones", id: "oneplus", route: "smartphones" },
    { title: "Motorola Phones", id: "motorola", route: "smartphones" },
    { title: "Xiaomi Phones", id: "xiaomi", route: "smartphones" }
  ],

  smartwatch: [
    { title: "Apple Smartwatches", id: "apple", route: "smartwatches" },
    { title: "Samsung Smartwatches", id: "samsung", route: "smartwatches" },
    { title: "Fitbit Watches", id: "fitbit", route: "smartwatches" },
    { title: "Garmin Watches", id: "garmin", route: "smartwatches" },
    { title: "Fossil Smartwatches", id: "fossil", route: "smartwatches" },
    { title: "Google Watches", id: "google", route: "smartwatches" }
  ],

  mobileAccessories: [
    { title: "Headsets", id: "headsets", route: "headphones" },
    { title: "Cases & Screen Protectors", id: "cases-and-screen-protectors", route: "cases_covers" },
    { title: "Chargers & Cables", id: "chargers-and-cables", route: "chargers" },
    { title: "Screen Protectors", id: "screen-protectors", route: "screen_protectors" },
    { title: "Mounts & Holders", id: "mounts-and-holders", route: "carmounts_holders" },
    { title: "Power Banks", id: "power-banks", route: "powerbanks" },
    { title: "Lens Attachments", id: "lens-attachments", route: "lens_attachments" },
    { title: "Selfie Sticks", id: "selfie-sticks", route: "selfie_sticks" }
  ]
};

export const allSubLinks = {
  ...MTSubLinks,
  ...CALSubLinks
};
