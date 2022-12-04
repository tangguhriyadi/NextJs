import { combineReducers } from '@reduxjs/toolkit';
import { todoApi } from '../../services/todoApi';
import todos from "./todoSlice"

const reducers = combineReducers({
    todos:todos,
    [todoApi.reducerPath]: todoApi.reducer
})

export default reducers