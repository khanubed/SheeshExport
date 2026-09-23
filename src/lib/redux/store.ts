import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseApi } from './api/baseApi';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import uiReducer from './slices/uiSlice';
import filtersReducer from './slices/filtersSlice';
import rfqFormReducer from './slices/rfqFormSlice';
import adminUiReducer from './slices/adminUiSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    cart: cartReducer,
    ui: uiReducer,
    filters: filtersReducer,
    rfqForm: rfqFormReducer,
    adminUi: adminUiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
