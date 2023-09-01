import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {productsold,productreturn} from './dataslice';
import {data}  from './data';

import { addtocart ,removecart,removebuttonhome} from './cartSlice';

function Home() {
  const dispatch=useDispatch();
  const product=useSelector(state=>state.product_data);
  const cart=useSelector(state=>state.cart)
 
   
//add product to cart
const handleaddtocart=(productid)=>{
 let avoidduplicate=cart.products.every((e)=>e.payload.id!==productid);
 if(avoidduplicate==true){
  const filterdata=data.products.filter((e)=>e.id===productid);
 dispatch(addtocart(...filterdata));
 dispatch(productsold({productid}));
 console.log(product)
 
 }else{
  alert("already added in the cart!!")
 }
}
//remove product from cart
const handleremovecart=(productid)=>{
  
  dispatch( removebuttonhome({productid}));
  dispatch(productreturn({productid}));
  console.log(cart)

}

  return (
    <div className='home-product container'>
        {product.products.map((e)=>
        <div className="card" key={e.id} >
            <div className='product-image'>
        <img src={e.thumbnail} className="card-img-top img-thumbnail" alt="..."/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{e.title}</h5>
          <p className="card-text">{e.description.slice(0,50)}...</p>
         <p className="card-text">Price: ${e.price}.00</p> 

       {cart.products?.every((ele)=>ele.payload.id!=e.id)?<a href="#" className="btn btn-primary" onClick={()=>{handleaddtocart(e.id)}}>Add to Cart</a>:
        <a href='#' className='btn btn-danger'onClick={()=>
          {handleremovecart(e.id)}            
                }>Remove from cart</a>
                }
           
         
           </div>
      </div>
        
        )}
       
<footer className='footer text-white'>
  <h6>@2023 Designed & Created by Sathish</h6>
</footer>
    </div>
  )
}

export default Home