import { create } from "zustand";
import type { FiltersState } from "../utils/interfaces/state-interfaces/FilterState.interface";

export const useFilters = create<FiltersState>((set, get) => ({
  selectedTypes: [],
  selectedSpecs: [],
  selectedManufacturers: [],

  // adds a type
  setSelectedTypes: (type: string) => {
    const { selectedTypes } = get();
    const normalizedType = type.trim().toLowerCase();

    set({
      selectedTypes: selectedTypes.includes(normalizedType)
        ? selectedTypes.filter(t => t !== normalizedType)
        : [...selectedTypes, normalizedType],
    });
  },

  // adds a spec
  setSelectedSpecs: (spec: string) => {
    const { selectedSpecs } = get();
    const normalizedSpec = spec.trim().toLowerCase();

    set({
      selectedSpecs: selectedSpecs.includes(normalizedSpec)
        ? selectedSpecs.filter(s => s !== normalizedSpec)
        : [...selectedSpecs, normalizedSpec],
    });
  },

  // adds a manufacturer
  setSelectedManufacturers: (manufacturer: string) => {
    const { selectedManufacturers } = get();
    const normalizedManufacturer = manufacturer.trim().toLowerCase();

    set({
      selectedManufacturers: selectedManufacturers.includes(normalizedManufacturer)
        ? selectedManufacturers.filter(m => m !== normalizedManufacturer)
        : [...selectedManufacturers, normalizedManufacturer],
    });
  },

  // resets each filter array and only leaves one specific value
  resetSelectedSpecsExcept: (keepSpec: string) =>
    set({ selectedSpecs: [keepSpec.trim().toLowerCase()] }),

  resetSelectedTypesExcept: (keepType: string) =>
    set({ selectedTypes: [keepType.trim().toLowerCase()] }),

  resetSelectedManufacturersExcept: (keepManufacturer: string) =>
    set({ selectedManufacturers: [keepManufacturer.trim().toLowerCase()] }),

  // sets the whole filter array with another array
  setSelectedManufacturerArray: (manufacturers: string[]) =>
    set({
      selectedManufacturers: manufacturers.map(m => m.trim().toLowerCase()),
    }),
    
  setSelectedSpecsArray: (specs: string[]) =>
    set({ selectedSpecs: specs.map(s => s.trim().toLowerCase()) }),

  setSelectedTypesArray: (types: string[]) =>
    set({ selectedTypes: types.map(t => t.trim().toLowerCase()) }),

  // Prices
  minPrice: '',
  setMinPrice: (p: string) => set({ minPrice: p }),
  maxPrice: '',
  setMaxPrice: (p: string) => set({ maxPrice: p }),
}));
