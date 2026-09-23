import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AdminUiState {
  isSidebarCollapsed: boolean;
  activeRfqView: 'table' | 'kanban';
  selectedTableRows: string[];
  dateRangeFilter: {
    start: string | null;
    end: string | null;
  };
}

const initialState: AdminUiState = {
  isSidebarCollapsed: false,
  activeRfqView: 'table',
  selectedTableRows: [],
  dateRangeFilter: {
    start: null,
    end: null,
  },
};

const adminUiSlice = createSlice({
  name: 'adminUi',
  initialState,
  reducers: {
    toggleSidebar: (state, action: PayloadAction<boolean | undefined>) => {
      state.isSidebarCollapsed = action.payload !== undefined ? action.payload : !state.isSidebarCollapsed;
    },
    setRfqView: (state, action: PayloadAction<'table' | 'kanban'>) => {
      state.activeRfqView = action.payload;
    },
    setSelectedRows: (state, action: PayloadAction<string[]>) => {
      state.selectedTableRows = action.payload;
    },
    setDateRange: (state, action: PayloadAction<{ start: string | null; end: string | null }>) => {
      state.dateRangeFilter = action.payload;
    },
  },
});

export const { toggleSidebar, setRfqView, setSelectedRows, setDateRange } = adminUiSlice.actions;
export default adminUiSlice.reducer;
