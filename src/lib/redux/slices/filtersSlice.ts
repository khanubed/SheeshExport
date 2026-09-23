import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  search: string;
  categories: string[];
  certifications: string[];
  exportMarkets: string[];
  packagingTypes: string[];
  sort: string;
}

const initialState: FiltersState = {
  search: '',
  categories: [],
  certifications: [],
  exportMarkets: [],
  packagingTypes: [],
  sort: 'relevance',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ key: keyof FiltersState; value: string | string[] }>
    ) => {
      (state as any)[action.payload.key] = action.payload.value;
    },
    resetFilters: (state) => {
      return initialState;
    },
    hydrateFromUrl: (state, action: PayloadAction<Partial<FiltersState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilter, resetFilters, hydrateFromUrl } = filtersSlice.actions;
export default filtersSlice.reducer;
