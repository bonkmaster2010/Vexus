export interface FiltersState {
  selectedTypes: string[];
  selectedSpecs: string[];
  setSelectedTypes: (type: string) => void;
  setSelectedSpecs: (spec: string) => void;
  resetSelectedSpecsExcept: (keepSpec: string) => void;
  resetSelectedTypesExcept: (keepSpec: string) => void;
  setSelectedSpecsArray: (specs: string[]) => void;
  setSelectedTypesArray: (types: string[]) => void;
};
