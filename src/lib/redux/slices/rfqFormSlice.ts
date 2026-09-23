import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RfqFormState {
  currentStep: number;
  productSelections: string[];
  packagingPreference: string;
  destinationPort: string;
  incoterm: string;
  targetDeliveryDate: string;
  companyDetails: {
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
  };
}

const initialState: RfqFormState = {
  currentStep: 1,
  productSelections: [],
  packagingPreference: '',
  destinationPort: '',
  incoterm: 'CIF',
  targetDeliveryDate: '',
  companyDetails: {
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
  },
};

const rfqFormSlice = createSlice({
  name: 'rfqForm',
  initialState,
  reducers: {
    setStepData: (state, action: PayloadAction<Partial<Omit<RfqFormState, 'currentStep'>>>) => {
      return { ...state, ...action.payload };
    },
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep = Math.max(1, state.currentStep - 1);
    },
    resetRfqForm: () => initialState,
    prefillFromProduct: (state, action: PayloadAction<string>) => {
      state.productSelections = [action.payload];
    },
  },
});

export const { setStepData, nextStep, prevStep, resetRfqForm, prefillFromProduct } = rfqFormSlice.actions;
export default rfqFormSlice.reducer;
