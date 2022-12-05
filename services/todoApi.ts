import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../utils/constant";
import { PaginatedTodoResponse, ParamProps } from "../utils/types";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: baseQuery,
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getTodos: builder.query<{ apiResponse: PaginatedTodoResponse[]; totalCount: number },ParamProps>({
      query: (param) => ({
        url: `/todos?_start=${param.start}&_limit=${param.limit}`,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.apiResponse.map(
                ({ id }) => ({ type: "Todos", id } as const)
              ),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
      transformResponse(apiResponse, meta) {
        return {
          apiResponse,
          totalCount: Number(meta?.response?.headers.get("X-Total-Count")),
        };
      },
    }),
    createTodo: builder.mutation<Partial<PaginatedTodoResponse>, any>({
      query: (param) => ({
        url: `/todos`,
        method: "POST",
        body: param,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation } = todoApi;
