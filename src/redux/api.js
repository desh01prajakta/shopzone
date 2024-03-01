import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  // The "endpoints" represent operations and requests for this server
  //   endpoint for register
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (registerUser) => ({
        url: "/auth/register",
        method: "POST",
        body: registerUser,
      }),
    }),
    login: builder.mutation({
      query: (loginUser) => ({
        url: "/auth/login",
        method: "POST",
        body: loginUser,
      }),
    }),
    account: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
     productList: builder.query({
        query:() => ({
           url: "/products",
           method: "GET",
        })
    }),
    productDetails: builder.query({
       query:(id) => ({
        url: `/products/${id}`,
        method: "GET",
       }) 
    }),
    cart: builder.query({
        query:() => ({
         url: "/carts",
         method: "GET",
        }) 
     })
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useRegisterMutation, useLoginMutation, useAccountQuery, useProductListQuery, useProductDetailsQuery, useCartsQuery } =
  apiSlice;
