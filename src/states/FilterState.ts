import { create } from "zustand";
import type { FiltersState } from "../utils/interfaces/state-interfaces/Filter.interface";

export const useFilters = create<FiltersState>((set, get) => ({
  selectedTypes: [],  
  selectedSpecs: [],
  
  setSelectedTypes: (type) => {
    const { selectedTypes } = get();
    if (!selectedTypes.includes(type)) {
      set({ selectedTypes: [...selectedTypes, type] });
    } else {
      set({ selectedTypes: selectedTypes.filter(t => t !== type) });
    }
  },

  setSelectedSpecs: (spec) => {
    const { selectedSpecs } = get();
    if (!selectedSpecs.includes(spec)) {
      set({ selectedSpecs: [...selectedSpecs, spec] });
    } else {
      set({ selectedSpecs: selectedSpecs.filter(s => s !== spec) });
    }
  },
  
  resetSelectedSpecsExcept: (keepSpec) =>
    set({
      selectedSpecs: [keepSpec],  
    }),

  resetSelectedTypesExcept: (keepType: string) =>
    set({
      selectedTypes: [keepType], 
    }),

  setSelectedSpecsArray: (specs) => set({ selectedSpecs: specs }),
  setSelectedTypesArray: (types) => set({ selectedTypes: types }),
}));
