import { baseApi } from './baseApi';

export const categoriesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<any, void>({
      query: () => '/categories',
      providesTags: (result) => result 
        ? [...result.map(({ id }: { id: string }) => ({ type: 'Category' as const, id })), { type: 'Category', id: 'LIST' }]
        : [{ type: 'Category', id: 'LIST' }],
    }),
    getCategoryBySlug: builder.query<any, string>({
      query: (slug) => `/categories/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Category', id: slug }],
    }),
    createCategory: builder.mutation<any, any>({
      query: (body) => ({ url: '/categories', method: 'POST', body }),
      invalidatesTags: [{ type: 'Category', id: 'LIST' }],
    }),
    updateCategory: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({ url: `/categories/${id}`, method: 'PUT', body }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Category', id }, { type: 'Category', id: 'LIST' }],
    }),
    deleteCategory: builder.mutation<any, string>({
      query: (id) => ({ url: `/categories/${id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, id) => [{ type: 'Category', id }, { type: 'Category', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryBySlugQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoriesApi;
