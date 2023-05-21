import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    products:[]
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addProduct: (state, action) =>{
            const {id, name, quantity, price} = action.payload;
            state.products.push({
                id: id,
                name: name.toUpperCase(),
                quantity: quantity,
                value: price
            })
        },
        removeProduct: (state, action) =>{
            const {id} = action.payload;
            const newProductsList = state.products.filter(product => product.id !== id);
            state.products = newProductsList;
        },
        addProductQuantity: (state, action) =>{
            const {id} = action.payload;
            state.products.forEach((product, index) =>{
                if(product.id === id){
                    state.products[index].quantity = state.products[index].quantity + 1;
                }
            })           
        },
        removeProductQuantity: (state, action) =>{
            const {id} = action.payload;
            state.products.forEach((product, index) =>{
                if(product.id === id){
                    state.products[index].quantity = state.products[index].quantity - 1;
                }
            })  
        },
        emptyCart: (state, action) =>{
            state.products = [];
        }
        
    }
});

export const { addProduct, removeProduct, addProductQuantity, removeProductQuantity, emptyCart} = cartSlice.actions;
export default cartSlice.reducer;