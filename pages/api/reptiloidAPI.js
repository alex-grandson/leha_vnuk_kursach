import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reptiloidAPI = createApi({
  reducerPath: 'reptiloidAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getProfileById: builder.query({
      query: (id) => `profile/${id}`,
    }),
    getEconomicsByCountyId: builder.query({
      query: countryId => 
        `economics?${countryId && `countryId=${countryId}`}`
    }),
    getScienceByCountyId: builder.query({
      query: countryId => 
        `science?${countryId && `countryId=${countryId}`}`
    }),
    getMediaByCountyId: builder.query({
      query: countryId => 
        `media?${countryId && `countryId=${countryId}`}`
    })
  }),
})

export const { 
    useGetEconomicsByCountyIdQuery,
    useGetScienceByCountyIdQuery,
    useGetMediaByCountyIdQuery
 } = reptiloidAPI