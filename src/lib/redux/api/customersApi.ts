import { baseApi } from './baseApi';

export const customersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCustomers: builder.query<any, Record<string, any>>({
      query: (filters) => ({ url: '/admin/customers', params: filters }),
      providesTags: (result) => result 
        ? [...result.map(({ id }: { id: string }) => ({ type: 'Customer' as const, id })), { type: 'Customer', id: 'LIST' }]
        : [{ type: 'Customer', id: 'LIST' }],
    }),
    getCustomerById: builder.query<any, string>({
      query: (id) => `/admin/customers/${id}`,
      providesTags: (result, error, id) => [{ type: 'Customer', id }],
    }),
    updateCustomerNotes: builder.mutation<any, { id: string; notes: string }>({
      query: ({ id, notes }) => ({
        url: `/admin/customers/${id}/notes`,
        method: 'PATCH',
        body: { notes },
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Customer', id }],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useGetCustomerByIdQuery,
  useUpdateCustomerNotesMutation,
} = customersApi;
