import { baseApi } from './baseApi';
import { MOCK_RFQS, RFQ } from '@/lib/data/mockRfqs';

export const rfqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyRfqs: builder.query<{ data: RFQ[]; total: number }, void>({
      queryFn: async () => {
        await new Promise(resolve => setTimeout(resolve, 400));
        return { data: { data: MOCK_RFQS, total: MOCK_RFQS.length } };
      },
      providesTags: (result) => result?.data
        ? [...result.data.map(({ id }) => ({ type: 'RFQ' as const, id })), { type: 'RFQ', id: 'LIST' }]
        : [{ type: 'RFQ', id: 'LIST' }],
    }),
    getRfqById: builder.query<RFQ, string>({
      queryFn: async (id) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        const rfq = MOCK_RFQS.find(r => r.id === id);
        if (rfq) return { data: rfq };
        return { error: { status: 404, data: "Not found" } };
      },
      providesTags: (result, error, id) => [{ type: 'RFQ', id }],
    }),
    getAdminRfqs: builder.query<{ data: RFQ[]; total: number }, Record<string, any>>({
      queryFn: async (filters) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        let result = [...MOCK_RFQS];
        
        if (filters?.status) {
          result = result.filter(r => r.status === filters.status);
        }
        
        return { data: { data: result, total: result.length } };
      },
      providesTags: (result) => result?.data
        ? [...result.data.map(({ id }) => ({ type: 'RFQ' as const, id })), { type: 'RFQ', id: 'LIST' }]
        : [{ type: 'RFQ', id: 'LIST' }],
    }),
    submitRfq: builder.mutation<any, any>({
      query: (body) => ({ url: '/rfq', method: 'POST', body }),
      invalidatesTags: [{ type: 'RFQ', id: 'LIST' }],
    }),
    updateRfqStatus: builder.mutation<any, { id: string; status: string }>({
      query: ({ id, status }) => ({ url: `/admin/rfq/${id}/status`, method: 'PATCH', body: { status } }),
      invalidatesTags: (result, error, { id }) => [{ type: 'RFQ', id }, { type: 'RFQ', id: 'LIST' }],
    }),
    assignRfq: builder.mutation<any, { id: string; assignedTo: string }>({
      query: ({ id, assignedTo }) => ({ url: `/admin/rfq/${id}/assign`, method: 'PATCH', body: { assignedTo } }),
      invalidatesTags: (result, error, { id }) => [{ type: 'RFQ', id }],
    }),
    addRfqNote: builder.mutation<any, { id: string; note: string }>({
      query: ({ id, note }) => ({ url: `/admin/rfq/${id}/notes`, method: 'POST', body: { note } }),
      invalidatesTags: (result, error, { id }) => [{ type: 'RFQ', id }],
    }),
    generateQuote: builder.mutation<any, { id: string; quoteDetails: any }>({
      query: ({ id, quoteDetails }) => ({ url: `/admin/rfq/${id}/quote`, method: 'POST', body: quoteDetails }),
      invalidatesTags: (result, error, { id }) => [{ type: 'RFQ', id }],
    }),
    acceptQuote: builder.mutation<any, string>({
      query: (id) => ({ url: `/rfq/${id}/accept`, method: 'POST' }),
      invalidatesTags: (result, error, id) => [{ type: 'RFQ', id }, { type: 'RFQ', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetMyRfqsQuery,
  useGetRfqByIdQuery,
  useGetAdminRfqsQuery,
  useSubmitRfqMutation,
  useUpdateRfqStatusMutation,
  useAssignRfqMutation,
  useAddRfqNoteMutation,
  useGenerateQuoteMutation,
  useAcceptQuoteMutation,
} = rfqApi;
