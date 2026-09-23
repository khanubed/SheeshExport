import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isMobileMenuOpen: boolean;
  isSearchOpen: boolean;
  activeModal: string | null;
  themeFlag: 'light' | 'dark' | 'system';
}

const initialState: UiState = {
  isMobileMenuOpen: false,
  isSearchOpen: false,
  activeModal: null,
  themeFlag: 'system',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state, action: PayloadAction<boolean | undefined>) => {
      state.isMobileMenuOpen = action.payload !== undefined ? action.payload : !state.isMobileMenuOpen;
    },
    toggleSearch: (state, action: PayloadAction<boolean | undefined>) => {
      state.isSearchOpen = action.payload !== undefined ? action.payload : !state.isSearchOpen;
    },
    openModal: (state, action: PayloadAction<string>) => {
      state.activeModal = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = null;
    },
    setThemeFlag: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
      state.themeFlag = action.payload;
    }
  },
});

export const { toggleMobileMenu, toggleSearch, openModal, closeModal, setThemeFlag } = uiSlice.actions;
export default uiSlice.reducer;
