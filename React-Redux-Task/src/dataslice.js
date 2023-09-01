import { createSlice } from "@reduxjs/toolkit";
import {data}  from './data';

//creating dataslice for product availble

export const dataSlice=createSlice({
    name:"product_data",
    initialState:data,
    reducers:{
        productsold:(state,id)=>{
            state,
            
           state.products[id.payload.productid-1].stock= state.products[id.payload.productid-1].stock-1;           
        },
        productreturn:(state,id)=>{
            state.products[id.payload.productid-1].stock= state.products[id.payload.productid+1].stock-1; 
           
        },
    
    },
});
export const {productsold,productreturn}=dataSlice.actions;
export default dataSlice.reducer;