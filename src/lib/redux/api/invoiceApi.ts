import { baseApi } from './baseApi';

export const invoiceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getInvoices: builder.query<any, Record<string, any>>({
      query: (filters) => ({ url: '/admin/invoices', params: filters }),
      providesTags: (result) => result 
        ? [...result.map(({ id }: { id: string }) => ({ type: 'Invoice' as const, id })), { type: 'Invoice', id: 'LIST' }]
        : [{ type: 'Invoice', id: 'LIST' }],
    }),
    getInvoiceById: builder.query<any, string>({
      query: (id) => `/admin/invoices/${id}`,
      providesTags: (result, error, id) => [{ type: 'Invoice', id }],
    }),
    generateInvoicePdf: builder.mutation<any, string>({
      query: (id) => ({
        url: `/admin/invoices/${id}/pdf`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useGetInvoicesQuery,
  useGetInvoiceByIdQuery,
  useGenerateInvoicePdfMutation,
} = invoiceApi;
