import { baseApi } from './baseApi';

export const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardKpis: builder.query<any, void>({
      query: () => '/admin/analytics/kpis',
    }),
    getRevenueTimeseries: builder.query<any, { range: string }>({
      query: (params) => ({ url: '/admin/analytics/revenue', params }),
    }),
    getRfqFunnel: builder.query<any, void>({
      query: () => '/admin/analytics/rfq-funnel',
    }),
    getTopProducts: builder.query<any, void>({
      query: () => '/admin/analytics/top-products',
    }),
  }),
});

export const {
  useGetDashboardKpisQuery,
  useGetRevenueTimeseriesQuery,
  useGetRfqFunnelQuery,
  useGetTopProductsQuery,
} = analyticsApi;
