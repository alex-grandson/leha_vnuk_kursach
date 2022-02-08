import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reptiloidAPI = createApi({
  reducerPath: 'reptiloidAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getProfileById: builder.query({
      query: (id) => `profile/${id}`,
    }),
  }),
})

export const { 
    useGetProfileByIdQuery
 } = reptiloidAPI