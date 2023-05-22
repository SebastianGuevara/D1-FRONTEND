import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    scroll:'scroll'
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers:{
        handleScroll: (state, action) => {
            const {scroll} = action.payload;
            console.log(scroll);
            state.scroll = scroll;
        }
    }
})

export const {handleScroll} = menuSlice.actions;
export default menuSlice.reducer;