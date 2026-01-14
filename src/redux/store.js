import { configureStore } from "@reduxjs/toolkit";
import isUserReducer from "./isUser/isUserSlice";

export const store = configureStore({
    reducer: {
        isUser: isUserReducer,
    },
});