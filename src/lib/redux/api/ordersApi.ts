import { baseApi } from './baseApi';
import { MOCK_ORDERS, Order } from '@/lib/data/mockOrders';

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyOrders: builder.query<{ data: Order[]; total: number }, void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 400));
        return { data: { data: MOCK_ORDERS, total: MOCK_ORDERS.length } };
      },
      providesTags: (result) => result?.data
        ? [...result.data.map(({ id }) => ({ type: 'Order' as const, id })), { type: 'Order', id: 'LIST' }]
        : [{ type: 'Order', id: 'LIST' }],
    }),
    getOrderById: builder.query<Order, string>({
      queryFn: async (id) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        const order = MOCK_ORDERS.find(o => o.id === id);
        if (order) return { data: order };
        return { error: { status: 404, data: "Not found" } };
      },
      providesTags: (result, error, id) => [{ type: 'Order', id }],
    }),
    getAdminOrders: builder.query<{ data: Order[]; total: number }, Record<string, any>>({
      queryFn: async (filters) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        let result = [...MOCK_ORDERS];
        
        if (filters?.status) {
          result = result.filter(o => o.status === filters.status);
        }

        return { data: { data: result, total: result.length } };
      },
      providesTags: (result) => result?.data
        ? [...result.data.map(({ id }) => ({ type: 'Order' as const, id })), { type: 'Order', id: 'LIST' }]
        : [{ type: 'Order', id: 'LIST' }],
    }),
    createOrder: builder.mutation<any, any>({
      query: (body) => ({ url: '/orders', method: 'POST', body }),
      invalidatesTags: [{ type: 'Order', id: 'LIST' }],
    }),
    updateOrderStatus: builder.mutation<any, { id: string; status: string }>({
      query: ({ id, status }) => ({ url: `/admin/orders/${id}/status`, method: 'PATCH', body: { status } }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Order', id }, { type: 'Order', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetMyOrdersQuery,
  useGetOrderByIdQuery,
  useGetAdminOrdersQuery,
  useCreateOrderMutation,
  useUpdateOrderStatusMutation,
} = ordersApi;
