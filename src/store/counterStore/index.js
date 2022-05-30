import { createSlice } from "@reduxjs/toolkit";

const _increase = (state, action) => {
    state.total++;
}

const _decrease = (state, action) => {
    state.total--;
}

const _reset = (state, action) => {
    state.total = 0;
    window.alert("sıfırladınız");
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        total: 0,
        test: "test",
        user: {
            name: "Süleyman"
        }
    },
    reducers: {
        increase : _increase,
        decrease : _decrease,
        reset: _reset
        //increase: (state, action) => {state.total++}
    },
});

export const { increase, decrease, reset } = counterSlice.actions;

export default counterSlice.reducer;

