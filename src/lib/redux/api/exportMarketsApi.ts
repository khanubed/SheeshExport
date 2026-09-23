import { baseApi } from './baseApi';

export const exportMarketsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getExportMarkets: builder.query<any, void>({
      query: () => '/export-markets',
      providesTags: (result) => result 
        ? [...result.map(({ id }: { id: string }) => ({ type: 'ExportMarket' as const, id })), { type: 'ExportMarket', id: 'LIST' }]
        : [{ type: 'ExportMarket', id: 'LIST' }],
    }),
    getExportMarketBySlug: builder.query<any, string>({
      query: (slug) => `/export-markets/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'ExportMarket', id: slug }],
    }),
    createExportMarket: builder.mutation<any, any>({
      query: (body) => ({ url: '/export-markets', method: 'POST', body }),
      invalidatesTags: [{ type: 'ExportMarket', id: 'LIST' }],
    }),
    updateExportMarket: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({ url: `/export-markets/${id}`, method: 'PUT', body }),
      invalidatesTags: (result, error, { id }) => [{ type: 'ExportMarket', id }, { type: 'ExportMarket', id: 'LIST' }],
    }),
    deleteExportMarket: builder.mutation<any, string>({
      query: (id) => ({ url: `/export-markets/${id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, id) => [{ type: 'ExportMarket', id }, { type: 'ExportMarket', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetExportMarketsQuery,
  useGetExportMarketBySlugQuery,
  useCreateExportMarketMutation,
  useUpdateExportMarketMutation,
  useDeleteExportMarketMutation,
} = exportMarketsApi;
