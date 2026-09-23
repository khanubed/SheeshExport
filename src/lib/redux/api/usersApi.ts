import { baseApi } from './baseApi';

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStaffUsers: builder.query<any, void>({
      query: () => '/admin/users',
      providesTags: (result) => result 
        ? [...result.map(({ id }: { id: string }) => ({ type: 'User' as const, id })), { type: 'User', id: 'LIST' }]
        : [{ type: 'User', id: 'LIST' }],
    }),
    createStaffUser: builder.mutation<any, any>({
      query: (body) => ({
        url: '/admin/users',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'User', id: 'LIST' }],
    }),
    updateStaffUser: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `/admin/users/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'User', id }, { type: 'User', id: 'LIST' }],
    }),
    deactivateStaffUser: builder.mutation<any, string>({
      query: (id) => ({
        url: `/admin/users/${id}/deactivate`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'User', id }, { type: 'User', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetStaffUsersQuery,
  useCreateStaffUserMutation,
  useUpdateStaffUserMutation,
  useDeactivateStaffUserMutation,
} = usersApi;
