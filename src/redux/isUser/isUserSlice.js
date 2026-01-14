import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: null,
};

export const isUserSlice = createSlice({
    name: "isUser",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload;
        },

        clearUser: (state) => {
            state.value = null;
        },
    },
});

export const { setUser, clearUser } = isUserSlice.actions;
export default isUserSlice.reducer;
