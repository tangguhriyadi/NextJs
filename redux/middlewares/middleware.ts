import { todoApi } from "../../services/todoApi";

export const middlewares = [
    todoApi.middleware
]