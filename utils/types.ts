export interface PaginatedTodoResponse {
    userId:number
    id:number
    title:string
    completed:boolean
}

export interface ParamProps {
    start:number
    limit:number
}

export interface TodoResponse {
    apiResponse:PaginatedTodoResponse[]
    totalCount:number
}

export interface Todos {
    todos:TodoResponse
}