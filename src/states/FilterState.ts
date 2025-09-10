import { create } from "zustand";
import type { FiltersState } from "../utils/interfaces/state-interfaces/FilterState.interface";

export const useFilters = create<FiltersState>((set, get) => ({
  selectedTypes: [],
  selectedSpecs: [],
  selectedManufacturers: [],

  // Toggle functions
  setSelectedTypes: (type: string) => {
    const { selectedTypes } = get();
    set({
      selectedTypes: selectedTypes.includes(type)
        ? selectedTypes.filter(t => t !== type)
        : [...selectedTypes, type],
    });
  },

  setSelectedSpecs: (spec: string) => {
    const { selectedSpecs } = get();
    set({
      selectedSpecs: selectedSpecs.includes(spec)
        ? selectedSpecs.filter(s => s !== spec)
        : [...selectedSpecs, spec],
    });
  },

  setSelectedManufacturers: (manufacturer: string) => {
    const { selectedManufacturers } = get();
    set({
      selectedManufacturers: selectedManufacturers.includes(manufacturer)
        ? selectedManufacturers.filter(m => m !== manufacturer)
        : [...selectedManufacturers, manufacturer],
    });
  },

  resetSelectedSpecsExcept: (keepSpec: string) =>
    set({ selectedSpecs: [keepSpec] }),

  resetSelectedTypesExcept: (keepType: string) =>
    set({ selectedTypes: [keepType] }),

  resetSelectedManufacturersExcept: (keepManufacturer: string) =>
    set({ selectedManufacturers: [keepManufacturer] }),

  setSelectedManufacturerArray: (manufacturers: string[]) =>
    set({ selectedManufacturers: manufacturers }),

  setSelectedSpecsArray: (specs: string[]) =>
    set({ selectedSpecs: specs }),

  setSelectedTypesArray: (types: string[]) =>
    set({ selectedTypes: types }),

  minPrice: '0',
  setMinPrice: (p) => set({minPrice: p}),
  maxPrice: '0',
  setMaxPrice: (p) => set({maxPrice: p}),
}));
