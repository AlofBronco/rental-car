import { Filters } from "@/types/filters";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  filters: Filters | null;
  setFilters: (filters: Filters | null) => void;
  favorites: string[];
  updateFavorites: (id: string) => void;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => {
      return {
        filters: {
          brand: "",
          price: "",
          from: "",
          to: "",
        },
        setFilters: (filters) =>
          set((state) => ({ filters: { ...state.filters, ...filters } })),
        favorites: [],
        updateFavorites: (id) => {
          const current = get().favorites;
          const exists = current?.includes(id);

          set({
            favorites: exists
              ? current?.filter((fav) => fav !== id)
              : [...current, id],
          });
        },
      };
    },
    {
      name: "store",
      partialize: (state) => ({
        filters: state.filters,
        favorites: state.favorites,
      }),
    },
  ),
);
