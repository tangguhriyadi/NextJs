import { createSlice } from "@reduxjs/toolkit"
import { todoApi } from "../../services/todoApi"
import { Todos } from "../../utils/types"



const initialState:Todos = {
    todos:{
        apiResponse:[],
        totalCount:0
    }
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