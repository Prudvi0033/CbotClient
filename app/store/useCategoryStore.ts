import { create } from "zustand";

interface CategoryState {
  selectedCategory: string | null;
  selectCategory: (cat: string) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  selectedCategory: null,
  selectCategory: (cat) => set({ selectedCategory: cat }),
}));
