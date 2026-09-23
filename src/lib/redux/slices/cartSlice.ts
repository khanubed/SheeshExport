import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  productId: string;
  grade?: string;
  packagingType?: string;
  packagingSize?: string;
  quantity: number;
  unitPrice?: number;
}

interface CartState {
  items: CartItem[];
  promoCode: string | null;
  isCartOpen: boolean;
}

const initialState: CartState = {
  items: [],
  promoCode: null,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => 
          item.productId === action.payload.productId &&
          item.grade === action.payload.grade &&
          item.packagingType === action.payload.packagingType
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<{ productId: string; grade?: string; packagingType?: string }>) => {
      state.items = state.items.filter(
        (item) => 
          !(item.productId === action.payload.productId && 
            item.grade === action.payload.grade && 
            item.packagingType === action.payload.packagingType)
      );
    },
    updateQuantity: (state, action: PayloadAction<{ productId: string; grade?: string; packagingType?: string; quantity: number }>) => {
      const existingItem = state.items.find(
        (item) => 
          item.productId === action.payload.productId &&
          item.grade === action.payload.grade &&
          item.packagingType === action.payload.packagingType
      );
      if (existingItem) {
        existingItem.quantity = Math.max(0, action.payload.quantity);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.promoCode = null;
    },
    applyPromoCode: (state, action: PayloadAction<string>) => {
      state.promoCode = action.payload;
    },
    toggleCartDrawer: (state, action: PayloadAction<boolean | undefined>) => {
      state.isCartOpen = action.payload !== undefined ? action.payload : !state.isCartOpen;
    }
  },
});

export const { addItem, removeItem, updateQuantity, clearCart, applyPromoCode, toggleCartDrawer } = cartSlice.actions;
export default cartSlice.reducer;
