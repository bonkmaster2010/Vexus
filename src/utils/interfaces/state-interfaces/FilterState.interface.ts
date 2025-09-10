export interface FiltersState {
  selectedTypes: string[];
  selectedSpecs: string[];
  selectedManufacturers: string[];
  setSelectedManufacturers: (manufacturer: string) => void;
  setSelectedTypes: (type: string) => void;
  setSelectedSpecs: (spec: string) => void;
  resetSelectedSpecsExcept: (keepSpec: string) => void;
  resetSelectedTypesExcept: (keepSpec: string) => void;
  resetSelectedManufacturersExcept: (keepManufacturer: string) => void;
  setSelectedManufacturerArray: (manufacturers: string[]) => void;
  setSelectedSpecsArray: (specs: string[]) => void;
  setSelectedTypesArray: (types: string[]) => void;

  minPrice: string;
  setMinPrice: (price: string) => void;
  maxPrice: string;
  setMaxPrice: (price: string) => void;
};
