// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const url='https://swapi.dev/api/';
// Define a service using a base URL and expected endpoints
export const starWarApi = createApi({
  reducerPath: 'starWarApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    getStarWarData: builder.query({
      query: (query) => `${query}`,
    }),
   
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStarWarDataQuery } = starWarApi