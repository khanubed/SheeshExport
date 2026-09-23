import { baseApi } from './baseApi';

export const uploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation<any, FormData>({
      query: (body) => ({
        url: '/admin/upload',
        method: 'POST',
        body,
      }),
    }),
    deleteImage: builder.mutation<any, string>({
      query: (fileId) => ({
        url: `/admin/upload/${fileId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useUploadImageMutation,
  useDeleteImageMutation,
} = uploadApi;
