export const GPU_FILTERS = [
  {
    name: "Video Memory",
    filterID: "gpuMemory",
    data: [
      "2GB VRAM",
      "4GB VRAM",
      "6GB VRAM",
      "8GB VRAM",
      "10GB VRAM",
      "12GB VRAM",
      "16GB VRAM",
      "24GB VRAM"
    ]
  },
  {
    name: "Ray Tracing",
    filterID: "rayTracing",
    data: [
      "Ray Tracing Support",
      "No Ray Tracing"
    ]
  },
  {
    name: "Memory Type",
    filterID: "gpuMemoryType",
    data: [
      "GDDR5",
      "GDDR5X",
      "GDDR6",
      "GDDR6X",
      "HBM2"
    ]
  },
  {
    name: "GPU Series",
    filterID: "gpuSeries",
    data: [
      "NVIDIA GeForce GTX 16 Series",
      "NVIDIA GeForce RTX 20 Series",
      "NVIDIA GeForce RTX 30 Series",
      "NVIDIA GeForce RTX 40 Series",
      "AMD Radeon RX 5000 Series",
      "AMD Radeon RX 6000 Series",
      "AMD Radeon RX 7000 Series",
      "Intel Arc Series"
    ]
  },
  {
    name: "Bus Interface",
    filterID: "gpuInterface",
    data: [
      "PCIe 3.0",
      "PCIe 4.0",
      "PCIe 5.0"
    ]
  },
  {
    name: "Cooling Type",
    filterID: "gpuCooling",
    data: [
      "Single Fan",
      "Dual Fan",
      "Triple Fan",
      "Blower Style",
      "Liquid Cooled"
    ]
  },
  {
    name: "Output Ports",
    filterID: "gpuOutputs",
    data: [
      "HDMI 2.0",
      "HDMI 2.1",
      "DisplayPort 1.4",
      "DisplayPort 2.0",
      "USB-C",
      "DVI",
      "VGA"
    ]
  },
  {
    name: "Recommended PSU",
    filterID: "gpuPsuReq",
    data: [
      "450W",
      "550W",
      "650W",
      "750W",
      "850W+"
    ]
  },
];


export const CPU_FILTERS = [
  {
    name: "Series",
    filterID: "cpuSeries",
    data: [
      "AMD Ryzen",
      "AMD Ryzen 7",
      "Intel Core i5",
      "Intel Core i7",
      "Intel Core i9"
    ]
  },
  {
    name: "CPU Socket Type",
    filterID: "cpuSocket",
    data: [
      "Socket 1700",
      "AM5",
      "AM4",
      "LGA 1200",
      "LGA 1851"
    ]
  },
  {
    name: "Number of Cores",
    filterID: "cpuCores",
    data: [
      "4 Cores",
      "6 Cores",
      "8 Cores",
      "10 Cores",
      "12 Cores",
      "16 Cores",
      "20 Cores"
    ]
  },
  {
    name: "Base Clock Speed",
    filterID: "baseClock",
    data: [
      "2.0 GHz - 2.49 GHz",
      "2.5 GHz - 2.99 GHz",
      "3.0 GHz & Higher"
    ]
  },
  {
    name: "Turbo Boost / Max Clock Speed",
    filterID: "boostClock",
    data: [
      "4.0 GHz+",
      "4.5 GHz+",
      "5.0 GHz+"
    ]
  },
  {
    name: "Integrated Graphics",
    filterID: "integratedGraphics",
    data: [
      "None",
      "AMD Radeon",
      "AMD Radeon HD",
      "Intel UHD Graphics 770"
    ]
  },
  {
    name: "Cooling Device",
    filterID: "cooling",
    data: [
      "Cooling device not included",
      "Heatsink and fan included"
    ]
  },
  {
    name: "Manufacturing Technology",
    filterID: "nmTech",
    data: [
      "3 nm",
      "4 nm",
      "5 nm",
      "6 nm",
      "7 nm",
      "10 nm",
      "14 nm",
      "45 nm"
    ]
  },
  {
    name: "Virtualization Technology Support",
    filterID: "virtualization",
    data: [
      "Yes",
      "No"
    ]
  },
  {
    name: "Hyper-Threading / Multithreading",
    filterID: "hyperThreading",
    data: [
      "Yes",
      "No"
    ]
  },
  {
    name: "Unlocked for Overclocking",
    filterID: "overclocking",
    data: [
      "Yes",
      "No"
    ]
  }
];


export const RAM_FILTERS = [
  {
    name: "Memory Type",
    filterID: "ramType",
    data: [
      "DDR4",
      "DDR5",
      "DDR3"
    ]
  },
  {
    name: "Capacity",
    filterID: "ramCapacity",
    data: [
      "4GB",
      "8GB",
      "16GB",
      "32GB",
      "64GB",
      "128GB"
    ]
  },
  {
    name: "Speed (Frequency)",
    filterID: "ramSpeed",
    data: [
      "2133MHz",
      "2400MHz",
      "2666MHz",
      "3000MHz",
      "3200MHz",
      "3600MHz",
      "4000MHz",
      "4800MHz",
      "5200MHz",
      "6000MHz"
    ]
  },
  {
    name: "CAS Latency",
    filterID: "ramLatency",
    data: [
      "CL14 or lower (Ultra Low Latency)",
      "CL15–CL16 (Low Latency)",
      "CL17–CL19 (Standard)",
      "CL20+ (High Latency)"
    ]
  },
  {
    name: "Form Factor",
    filterID: "ramFormFactor",
    data: [
      "DIMM (Desktop)",
      "SO-DIMM (Laptop)"
    ]
  },
  {
    name: "Channel Kit",
    filterID: "ramChannel",
    data: [
      "Single Channel",
      "Dual Channel Kit",
      "Quad Channel Kit"
    ]
  },
  {
    name: "RGB Lighting",
    filterID: "ramRGB",
    data: [
      "Yes",
      "No"
    ]
  },
  {
    name: "ECC Support",
    filterID: "ramECC",
    data: [
      "Yes (Error-Correcting)",
      "No (Non-ECC)"
    ]
  },
  {
    name: "Voltage",
    filterID: "ramVoltage",
    data: [
      "1.2V",
      "1.35V",
      "1.5V",
      "1.65V"
    ]
  }
];


export const STORAGE_FILTERS = [
  {
    name: "Storage Type",
    filterID: "storageType",
    data: [
      "SSD",
      "HDD",
      "Hybrid (SSHD)"
    ]
  },
  {
    name: "Form Factor",
    filterID: "storageFormFactor",
    data: [
      "2.5\"",
      "3.5\"",
      "M.2 2280",
      "M.2 2230",
      "Add-in Card"
    ]
  },
  {
    name: "Capacity",
    filterID: "storageCapacity",
    data: [
      "128GB",
      "256GB",
      "512GB",
      "1TB",
      "2TB",
      "4TB",
      "8TB+"
    ]
  },
  {
    name: "Interface",
    filterID: "storageInterface",
    data: [
      "NVMe (PCIe Gen 3)",
      "NVMe (PCIe Gen 4)",
      "NVMe (PCIe Gen 5)",
      "SATA III",
      "SATA II"
    ]
  },
  {
    name: "Read Speed",
    filterID: "readSpeed",
    data: [
      "Up to 550MB/s",
      "1000MB/s+",
      "3000MB/s+",
      "5000MB/s+",
      "7000MB/s+"
    ]
  },
  {
    name: "Write Speed",
    filterID: "writeSpeed",
    data: [
      "Up to 500MB/s",
      "1000MB/s+",
      "2500MB/s+",
      "4000MB/s+",
      "6500MB/s+"
    ]
  },
  {
    name: "NAND Flash Type",
    filterID: "nandType",
    data: [
      "TLC",
      "QLC",
      "MLC",
      "SLC"
    ]
  },
  {
    name: "DRAM Cache",
    filterID: "dramCache",
    data: [
      "Yes (DRAM cache)",
      "No (DRAM-less)"
    ]
  },
  {
    name: "Heatsink Included",
    filterID: "heatsink",
    data: [
      "Yes",
      "No"
    ]
  }
];

export const MOTHERBOARD_FILTERS = [
  {
    name: "Form Factor",
    filterID: "mbFormFactor",
    data: [
      "ATX",
      "Micro ATX",
      "Mini ITX",
      "E-ATX"
    ]
  },
  {
    name: "CPU Socket Type",
    filterID: "mbSocket",
    data: [
      "LGA 1700",
      "AM5",
      "AM4",
      "LGA 1200",
      "LGA 1151",
      "TR4 / sTRX4"
    ]
  },
  {
    name: "Chipset",
    filterID: "mbChipset",
    data: [
      "Intel Z790",
      "Intel B760",
      "Intel H610",
      "AMD X670",
      "AMD B650",
      "AMD A520"
    ]
  },
  {
    name: "Memory Type",
    filterID: "mbMemoryType",
    data: [
      "DDR4",
      "DDR5"
    ]
  },
  {
    name: "Max Memory Supported",
    filterID: "mbMaxMemory",
    data: [
      "32GB",
      "64GB",
      "128GB",
      "192GB"
    ]
  },
  {
    name: "PCIe Version",
    filterID: "mbPcie",
    data: [
      "PCIe 3.0",
      "PCIe 4.0",
      "PCIe 5.0"
    ]
  },
  {
    name: "Expansion Slots",
    filterID: "mbExpansion",
    data: [
      "x1 PCIe x16 Slot",
      "x2 PCIe x16 Slots",
      "PCIe x1 Slots",
      "M.2 Slot(s)"
    ]
  },
  {
    name: "Storage Support",
    filterID: "mbStorage",
    data: [
      "SATA III Ports",
      "M.2 NVMe Slots",
      "RAID Support"
    ]
  },
  {
    name: "Onboard Features",
    filterID: "mbFeatures",
    data: [
      "WiFi Built-in",
      "Bluetooth Built-in",
      "Integrated Graphics Support (CPU-dependent)",
      "RGB Header",
      "Debug LED / Q-Code",
      "BIOS Flashback Button"
    ]
  },
  {
    name: "Rear I/O Ports",
    filterID: "mbIOPorts",
    data: [
      "USB 3.2 Gen 2",
      "USB-C",
      "2.5G LAN",
      "HDMI",
      "DisplayPort",
      "Optical Audio"
    ]
  }
];


export const PSU_FILTERS = [
  {
    name: "Wattage",
    filterID: "psuWattage",
    data: [
      "400W – 499W",
      "500W – 599W",
      "600W – 699W",
      "700W – 799W",
      "800W – 899W",
      "900W – 999W",
      "1000W+"
    ]
  },
  {
    name: "Efficiency Certification",
    filterID: "psuEfficiency",
    data: [
      "80+ White",
      "80+ Bronze",
      "80+ Silver",
      "80+ Gold",
      "80+ Platinum",
      "80+ Titanium"
    ]
  },
  {
    name: "Modularity",
    filterID: "psuModular",
    data: [
      "Non-Modular",
      "Semi-Modular",
      "Fully Modular"
    ]
  },
  {
    name: "Form Factor",
    filterID: "psuFormFactor",
    data: [
      "ATX",
      "SFX",
      "SFX-L",
      "TFX"
    ]
  },
  {
    name: "Fan Type",
    filterID: "psuFan",
    data: [
      "120mm Fan",
      "135mm Fan",
      "140mm Fan",
      "Fanless (Passive)"
    ]
  },
  {
    name: "Smart Fan Control",
    filterID: "psuSmartFan",
    data: [
      "Yes (Zero RPM Mode)",
      "No"
    ]
  },
  {
    name: "Connectors Included",
    filterID: "psuConnectors",
    data: [
      "24-pin Motherboard",
      "8-pin CPU (EPS)",
      "PCIe 6+2-pin",
      "PCIe 12VHPWR (16-pin)",
      "SATA Power",
      "Molex"
    ]
  },
  {
    name: "GPU Support",
    filterID: "psuGpuSupport",
    data: [
      "NVIDIA RTX 30 Series",
      "NVIDIA RTX 40 Series (12VHPWR)",
      "AMD Radeon RX 6000/7000"
    ]
  }
];


export const COOLING_FILTERS = [
  {
    name: "Cooling Type",
    filterID: "coolingType",
    data: [
      "Air Cooler",
      "Liquid AIO Cooler",
      "Custom Liquid Loop",
      "Passive (Fanless)"
    ]
  },
  {
    name: "Radiator Size",
    filterID: "radiatorSize",
    data: [
      "120mm Radiator",
      "240mm Radiator",
      "280mm Radiator",
      "360mm Radiator",
      "420mm Radiator"
    ]
  },
  {
    name: "Number of Fans",
    filterID: "coolerFans",
    data: [
      "Single Fan",
      "Dual Fan",
      "Triple Fan"
    ]
  },
  {
    name: "Fan Size",
    filterID: "coolerFanSize",
    data: [
      "92mm",
      "120mm",
      "140mm"
    ]
  },
  {
    name: "Noise Level",
    filterID: "coolerNoise",
    data: [
      "Ultra Quiet (Under 20 dBA)",
      "Low Noise (20–25 dBA)",
      "Standard (25–30 dBA)",
      "Performance (30+ dBA)"
    ]
  },
  {
    name: "Lighting",
    filterID: "coolerLighting",
    data: [
      "ARGB",
      "RGB",
      "No Lighting"
    ]
  },
  {
    name: "Socket Compatibility",
    filterID: "coolerSocket",
    data: [
      "LGA 1700",
      "AM5",
      "AM4",
      "LGA 1200",
      "TR4 / sTRX4"
    ]
  },
  {
    name: "Height Clearance",
    filterID: "coolerHeight",
    data: [
      "Under 120mm",
      "120mm–155mm",
      "155mm–165mm",
      "165mm+"
    ]
  }
];

export const CASE_FILTERS = [
  {
    name: "Case Size / Type",
    filterID: "caseType",
    data: [
      "Mid Tower",
      "Full Tower",
      "Mini Tower",
      "Small Form Factor (SFF)",
      "Open Frame"
    ]
  },
  {
    name: "Motherboard Support",
    filterID: "caseMotherboardSupport",
    data: [
      "ATX",
      "Micro ATX",
      "Mini ITX",
      "E-ATX"
    ]
  },
  {
    name: "Side Panel",
    filterID: "caseSidePanel",
    data: [
      "Tempered Glass",
      "Acrylic",
      "Steel",
      "No Window"
    ]
  },
  {
    name: "Front Panel Type",
    filterID: "caseFrontPanel",
    data: [
      "Mesh Front Panel",
      "Solid Panel",
      "Tempered Glass Front",
      "Filtered Intake"
    ]
  },
  {
    name: "Pre-Installed Fans",
    filterID: "caseFans",
    data: [
      "No Fans Included",
      "1 Fan",
      "2 Fans",
      "3+ Fans"
    ]
  },
  {
    name: "Lighting",
    filterID: "caseLighting",
    data: [
      "ARGB Fans Included",
      "RGB Fans Included",
      "No Lighting"
    ]
  },
  {
    name: "Cable Management Features",
    filterID: "caseCableManagement",
    data: [
      "Cable Management Support",
      "Pre-Routed Cables",
      "Rubber Grommets"
    ]
  },
  {
    name: "Drive Bays",
    filterID: "caseDriveBays",
    data: [
      "2.5\" SSD Bays",
      "3.5\" HDD Bays",
      "Tool-less Drive Bays"
    ]
  },
  {
    name: "GPU Clearance",
    filterID: "caseGpuClearance",
    data: [
      "Under 280mm",
      "280mm – 330mm",
      "330mm+"
    ]
  },
  {
    name: "Radiator Support",
    filterID: "caseRadiatorSupport",
    data: [
      "120mm",
      "240mm",
      "280mm",
      "360mm"
    ]
  }
];

/* THATS A LOT */