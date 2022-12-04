import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '../utils/constant'
import { PaginatedTodoResponse } from '../utils/types'

export const todoApi = createApi({
    reducerPath:'todoApi',
    baseQuery:baseQuery,
    tagTypes:['Todos'],
    endpoints:(builder) => ({
        getTodos:builder.query<PaginatedTodoResponse[], number | void>({
            query: (param) => ({
                url:`/todos`
            }) 
        })
    })
    
})

export const { useGetTodosQuery } = todoApi