import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type FilterValue = string | number | boolean | string[] | null;

interface FilterState {
  filters: Record<string, Record<string, FilterValue>>;
  setFilter: (route: string, key: string, value: FilterValue) => void;
  resetFilters: (route: string) => void;
  getFilters: (route: string) => Record<string, FilterValue>;
}

export const useFilterStore = create<FilterState>()(
  persist(
    (set, get) => ({
      filters: {},
      
      setFilter: (route, key, value) => {
        set((state) => {
          const routeFilters = state.filters[route] || {};
          const updatedFilters = { ...routeFilters, [key]: value };
          
          // Simple URL syncing mechanism (shallow fingerprint)
          // We hash/count the active filters and put that in the URL as a "f_hash" parameter
          const activeCount = Object.values(updatedFilters).filter(v => v !== null && v !== '').length;
          const url = new URL(window.location.href);
          if (activeCount > 0) {
            url.searchParams.set('f_hash', activeCount.toString());
          } else {
            url.searchParams.delete('f_hash');
          }
          window.history.replaceState({}, '', url);

          return {
            filters: { ...state.filters, [route]: updatedFilters },
          };
        });
      },
      
      resetFilters: (route) => set((state) => {
        const newFilters = { ...state.filters };
        delete newFilters[route];
        return { filters: newFilters };
      }),
      
      getFilters: (route) => get().filters[route] || {},
    }),
    {
      name: 'flexprice-filters',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
