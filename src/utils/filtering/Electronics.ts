



export const PC_FILTERS = [
    { name: "Brand", data: ["HP", "Dell", "Lenovo", "Acer", "ASUS", "MSI"], filterID: "manufacturer" },
    { name: "RAM", data: ["8GB", "16GB", "32GB", "64GB"], filterID: "systemMemory" },
    { name: "Storage", data: ["256GB SSD", "512GB SSD", "1TB SSD", "2TB SSD", "HDD 1TB"], filterID: "storageCapacity" },
    { name: "Processor", data: ["Intel i5", "Intel i7", "Intel i9", "AMD Ryzen 5", "AMD Ryzen 7", "AMD Ryzen 9"], filterID: "processorBrand" },
    { name: "Graphics", data: ["NVIDIA", "AMD Radeon", "Intel UHD"], filterID: "graphicsBrand" },
];

export const LAPTOP_FILTERS = [
    { name: "Brand", data: ["HP", "Dell", "Lenovo", "Acer", "ASUS", "MSI", "Apple"], filterID: "manufacturer" },
    { name: "RAM", data: ["8GB", "16GB", "32GB"], filterID: "systemMemory" },
    { name: "Storage", data: ["256GB SSD", "512GB SSD", "1TB SSD"], filterID: "storageCapacity" },
    { name: "Processor", data: ["Intel i3", "Intel i5", "Intel i7", "AMD Ryzen 3", "AMD Ryzen 5", "AMD Ryzen 7"], filterID: "processorBrand" },
    { name: "Screen Size", data: ["11 inch", "13 inch", "15 inch", "17 inch"], filterID: "screenSize" },
    { name: "Graphics", data: ["NVIDIA", "AMD Radeon", "Intel Iris"], filterID: "graphicsBrand" },
];


export const MONITOR_FILTERS = [
    { name: "Brand", data: ["Samsung", "LG", "ASUS", "Dell", "AOC", "MSI"], filterID: "manufacturer" },
    { name: "Screen Size", data: ["22 inch", "24 inch", "27 inch", "32 inch", "34 inch"], filterID: "screenSize" },
    { name: "Resolution", data: ["1080p", "1440p", "4K"], filterID: "screenResolution" },
    { name: "Refresh Rate", data: ["60Hz", "75Hz", "120Hz", "144Hz", "240Hz"], filterID: "refreshRate" },
    { name: "Panel Type", data: ["IPS", "VA", "TN"], filterID: "panelType" },
];


export const MOBILE_FILTERS = [
    { name: "Brand", data: ["Apple", "Samsung", "Xiaomi", "OnePlus", "Oppo", "Realme"], filterID: "manufacturer" },
    { name: "Storage", data: ["64GB", "128GB", "256GB", "512GB", "1TB"], filterID: "storageCapacity" },
    { name: "RAM", data: ["4GB", "6GB", "8GB", "12GB", "16GB"], filterID: "systemMemory" },
    { name: "Operating System", data: ["iOS", "Android"], filterID: "operatingSystem" },
    { name: "Network", data: ["5G", "4G LTE"], filterID: "networkTechnology" },
];

export const TABLET_FILTERS = [
    { name: "Brand", data: ["Apple", "Samsung", "Lenovo", "Microsoft Surface", "Huawei"], filterID: "manufacturer" },
    { name: "Storage", data: ["32GB", "64GB", "128GB", "256GB", "512GB", "1TB"], filterID: "storageCapacity" },
    { name: "RAM", data: ["3GB", "4GB", "6GB", "8GB"], filterID: "systemMemory" },
    { name: "Operating System", data: ["iOS", "Android", "Windows"], filterID: "operatingSystem" },
    { name: "Screen Size", data: ["8 inch", "10 inch", "12 inch", "14 inch"], filterID: "screenSize" },
];
