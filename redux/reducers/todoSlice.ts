import { createSlice } from "@reduxjs/toolkit"
import { todoApi } from "../../services/todoApi"
import { PaginatedTodoResponse } from "../../utils/types"

interface Todos {
    todos:PaginatedTodoResponse[]
}

const initialState:Todos = {
    todos:[]
}

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addMatcher(todoApi.endpoints.getTodos.matchFulfilled, (state, {payload}) => ({
            todos:payload
        }))
    }
})

export default todoSlice.reducer