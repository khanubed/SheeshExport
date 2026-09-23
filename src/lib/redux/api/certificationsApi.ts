import { baseApi } from './baseApi';

export const certificationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCertifications: builder.query<any, void>({
      query: () => '/certifications',
      providesTags: (result) => result 
        ? [...result.map(({ id }: { id: string }) => ({ type: 'Certification' as const, id })), { type: 'Certification', id: 'LIST' }]
        : [{ type: 'Certification', id: 'LIST' }],
    }),
    getCertificationBySlug: builder.query<any, string>({
      query: (slug) => `/certifications/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Certification', id: slug }],
    }),
    createCertification: builder.mutation<any, any>({
      query: (body) => ({ url: '/certifications', method: 'POST', body }),
      invalidatesTags: [{ type: 'Certification', id: 'LIST' }],
    }),
    updateCertification: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({ url: `/certifications/${id}`, method: 'PUT', body }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Certification', id }, { type: 'Certification', id: 'LIST' }],
    }),
    deleteCertification: builder.mutation<any, string>({
      query: (id) => ({ url: `/certifications/${id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, id) => [{ type: 'Certification', id }, { type: 'Certification', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetCertificationsQuery,
  useGetCertificationBySlugQuery,
  useCreateCertificationMutation,
  useUpdateCertificationMutation,
  useDeleteCertificationMutation,
} = certificationsApi;
