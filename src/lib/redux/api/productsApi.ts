import { baseApi } from './baseApi';
import { PRODUCTS_DATA } from '@/lib/data/products';
import { Product } from '@/lib/data/types';

export const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<{ data: Product[]; total: number }, any>({
      queryFn: async (filters) => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        let result = [...PRODUCTS_DATA];

        if (filters?.search) {
          const q = filters.search.toLowerCase();
          result = result.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.description.toLowerCase().includes(q)
          );
        }

        if (filters?.categories?.length > 0) {
          result = result.filter(p => filters.categories.includes(p.category));
        }

        if (filters?.certifications?.length > 0) {
          result = result.filter(p => 
            p.certifications.some(c => filters.certifications.includes(c))
          );
        }

        if (filters?.exportMarkets?.length > 0) {
          result = result.filter(p => 
            p.exportMarkets.some(m => filters.exportMarkets.includes(m))
          );
        }

        if (filters?.packagingTypes?.length > 0) {
          result = result.filter(p => 
            p.packagingOptions.some(pt => filters.packagingTypes.includes(pt.name))
          );
        }

        if (filters?.sort === 'name-asc') {
          result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (filters?.sort === 'name-desc') {
          result.sort((a, b) => b.name.localeCompare(a.name));
        }

        const page = filters?.page || 1;
        const limit = 6;
        const total = result.length;
        const paginatedResult = result.slice((page - 1) * limit, page * limit);

        return { data: { data: paginatedResult, total } };
      },
      providesTags: (result) => result?.data
        ? [...result.data.map(({ id }) => ({ type: 'Product' as const, id })), { type: 'Product', id: 'LIST' }]
        : [{ type: 'Product', id: 'LIST' }],
    }),
    getProductBySlug: builder.query<Product, string>({
      queryFn: async (slug) => {
        await new Promise(resolve => setTimeout(resolve, 300));
        const rawProduct = PRODUCTS_DATA.find(p => p.slug === slug);
        if (!rawProduct) return { error: { status: 404, data: "Not found" } };
        
        return { data: rawProduct };
      },
      providesTags: (result, error, slug) => [{ type: 'Product', id: slug }],
    }),
    createProduct: builder.mutation<any, any>({
      query: (body) => ({ url: '/products', method: 'POST', body }),
      invalidatesTags: [{ type: 'Product', id: 'LIST' }],
    }),
    updateProduct: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({ url: `/products/${id}`, method: 'PUT', body }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Product', id }, { type: 'Product', id: 'LIST' }],
    }),
    deleteProduct: builder.mutation<any, string>({
      query: (id) => ({ url: `/products/${id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, id) => [{ type: 'Product', id }, { type: 'Product', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductBySlugQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;

