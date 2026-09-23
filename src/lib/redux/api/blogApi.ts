import { baseApi } from './baseApi';

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<any, Record<string, any>>({
      query: (filters) => ({ url: '/blog', params: filters }),
      providesTags: (result) => result 
        ? [...result.map(({ id }: { id: string }) => ({ type: 'Blog' as const, id })), { type: 'Blog', id: 'LIST' }]
        : [{ type: 'Blog', id: 'LIST' }],
    }),
    getPostBySlug: builder.query<any, string>({
      query: (slug) => `/blog/${slug}`,
      providesTags: (result, error, slug) => [{ type: 'Blog', id: slug }],
    }),
    createPost: builder.mutation<any, any>({
      query: (body) => ({ url: '/blog', method: 'POST', body }),
      invalidatesTags: [{ type: 'Blog', id: 'LIST' }],
    }),
    updatePost: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({ url: `/blog/${id}`, method: 'PUT', body }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Blog', id }, { type: 'Blog', id: 'LIST' }],
    }),
    deletePost: builder.mutation<any, string>({
      query: (id) => ({ url: `/blog/${id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, id) => [{ type: 'Blog', id }, { type: 'Blog', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostBySlugQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = blogApi;
