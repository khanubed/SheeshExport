import { baseApi } from './baseApi';

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRazorpayOrder: builder.mutation<any, { orderId: string; amount: number }>({
      query: (body) => ({
        url: '/payments/razorpay/create',
        method: 'POST',
        body,
      }),
    }),
    verifyRazorpayPayment: builder.mutation<any, { razorpayPaymentId: string; razorpayOrderId: string; razorpaySignature: string }>({
      query: (body) => ({
        url: '/payments/razorpay/verify',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Order', id: 'LIST' }],
    }),
  }),
});

export const {
  useCreateRazorpayOrderMutation,
  useVerifyRazorpayPaymentMutation,
} = paymentApi;
