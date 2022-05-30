import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: "",
        },
    },
    reducers: {
        setUserName : (state, action) => {
            state.user.name = action.payload;
        },
    },
});

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;

