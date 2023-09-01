import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "./cartSlice";
import  dataSlice  from "./dataslice";

export default configureStore({
    reducer:{
     cart:cartSlice,
     product_data:dataSlice,
    }

});