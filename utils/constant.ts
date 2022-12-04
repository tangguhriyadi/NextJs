import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const baseQuery = fetchBaseQuery({
    baseUrl:process.env.BASE_URL,
    // no headers
})