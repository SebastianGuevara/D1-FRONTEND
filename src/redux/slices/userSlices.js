import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name:null,
    id:null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        handleUserLogin: (state, action) =>{
            const {id,name} = action.payload;
            state.name = name;
            state.id = id;
        }
    }
})

export const {handleUserLogin} = userSlice.actions;
export default userSlice.reducer;