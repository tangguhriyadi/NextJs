import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';

export const baseQuery = fetchBaseQuery({
    baseUrl:process.env.BASE_URL,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})