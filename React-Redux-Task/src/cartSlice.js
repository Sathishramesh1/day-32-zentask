import { createSlice } from "@reduxjs/toolkit";



//creating cartslice
export const cartSlice=createSlice({
    name:"cart",
    initialState:{total:0,products:[],quantity:0},
    reducers:{
          //method for add product to cart
        addtocart:(state,added)=>{
        
            state.quantity=state.quantity+1,
            state.products.push(added)
        },
 //method for remove product to cart
        removecart:(state,id)=>{
            state,
           state.quantity= state.quantity-1,
 state.products= state.products.filter((e)=>e.payload.id!=id.payload.id),
  state.total=state.products.map((e,index)=>e?.payload.price*id.payload.tot[index]).reduce((acc,curr)=>acc+curr,0);
    
        },

        total:(state,tot)=>{
            state,
            state.products.forEach((e,index)=>{e=e.payload.qty=tot.payload.tot[index]}),
         state.total=state.products.map((e)=>e?.payload.price*e.payload.qty).reduce((acc,curr)=>acc+curr,0);
        
            },
        //remove button fron homepage
         removebuttonhome:(state,id)=>{
                       state,
                       state.quantity=state.quantity-1,
                      state.products= state.products.filter((e)=>e.payload.id!==id.payload.productid),
                      console.log(state.products)

         }   

    },
});
export const  {addtocart,removecart,total,removebuttonhome} = cartSlice.actions;
export default cartSlice.reducer;