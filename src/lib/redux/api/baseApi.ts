import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
    credentials: 'include',
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: [
    'Product',
    'Category',
    'RFQ',
    'Order',
    'User',
    'Blog',
    'Certification',
    'ExportMarket',
    'Customer',
    'Invoice'
  ],
  endpoints: () => ({}),
});
