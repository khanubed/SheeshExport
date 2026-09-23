import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'admin' | 'staff';
  companyName?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  accessTokenExpiresAt: number | null;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  accessTokenExpiresAt: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; accessTokenExpiresAt?: number }>
    ) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.accessTokenExpiresAt = action.payload.accessTokenExpiresAt || null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.accessTokenExpiresAt = null;
    },
    updateUserProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
});

export const { setCredentials, logout, updateUserProfile } = authSlice.actions;
export default authSlice.reducer;
