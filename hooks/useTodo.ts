import { PaginatedTodoResponse, ParamProps } from "../utils/types";
import React, { useState, useEffect, useMemo } from "react";
import { useGetTodosQuery } from "../services/todoApi";
import { useAppSelector } from "../redux/store";

export const useTodo = ({ start, limit }: ParamProps) => {
  const [datas, setDatas] = useState<PaginatedTodoResponse[]>([]);

  const { data: data } = useGetTodosQuery({ start, limit });

  const totalCount = useAppSelector((state) => state.todos.todos.totalCount);

  const pageCount = useMemo(() => {
    if (!data) return 1;
    return totalCount / limit;
  }, [totalCount, data, limit]);

  useEffect(() => {
    if (data) setDatas(data.apiResponse);
  }, [data]);

  return {
    datas,
    pageCount,
  };
};
