import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { middlewares } from "./middlewares/middleware";
import reducers from "./reducers/rootReducers";

export const store = configureStore({
    reducer:reducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
})

export default store 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();