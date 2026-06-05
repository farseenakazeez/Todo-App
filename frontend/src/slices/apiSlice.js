import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice =createApi({
    baseQuery : fetchBaseQuery({
        baseUrl: "https://todo-app-3w9t.onrender.com"

    }),
    tagTypes : [],
    endpoints : () => ({}),
});