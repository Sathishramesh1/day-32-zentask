import React, {  useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';

import { addtocart,total ,removecart} from './cartSlice';

function Cart() {
  
  const dispatch=useDispatch();
  const product=useSelector(state=>state.product_data);
  const cart=useSelector(state=>state.cart)

  useEffect(()=>{
    subtotal();
    
  },)

  //total price of products in cart
  const subtotal=(id)=>{

const quantity=document.querySelectorAll("select");
let tot= [...quantity]?.map((e)=>+e.value);
let obj={tot}

dispatch(total(obj));

    
  }

  //remove product from cart
  const handleremove=(id)=>{
    const quantity=document.querySelectorAll("select");
let tot= [...quantity]?.map((e)=>+e.value);

    dispatch(removecart({id,tot}));

  }
  
  return (
    <div >
          <div className='cart' id='cart'>
        {cart.products.map((e)=>
        
        <div className='product ' key={e.payload.id} >
          
          <div className='p-image'>
            <img src={e.payload.thumbnail}/>
          </div>
          <div className='p-details'>
            <div className='p-flex d-flex'>
            <div className='p-stock mx-1 flex-fill' >
            <h3>{e.payload.title}</h3>
            </div>
            
            
              <div className='qty-layout'>
            <select onChange={()=>{subtotal(e.payload.id)}} id={e.payload.id} className='flex mx-5' >
            {[...Array(e.payload.stock).keys()].map((x)=>(
                    <option key={x+1} value={x+1}>{x+1}</option>
                  ))}
            </select>
            
            
            <div className='flex-fill mx--5'>
              <h4  className='p-price' ><span>$</span>{e.payload.price}.00</h4>
            </div>
            </div>
            
            </div>
           
            <div className='button'>
            <button  onClick={()=>{handleremove(e.payload.id)}}>Remove</button>
            </div>
           <div className='p-text'>
            <p>{e.payload.description}</p>
            </div>
          </div>
          
        </div>
        
        )}
        
        <hr/>
        <div className='price-layout container'>
        <div className='d-flex flex-column'>
          <div className='subtotal'>
            
          <h6 className='subtotal-type'>SUBTOTAL:</h6>
          <h6 className='subtotal-cost'>${cart?.total}</h6>
          
          </div>
          <div className='shipping'>
          <h6 className='shipping-type'>SHIPPING:</h6>
          <h6 className='shipping-cost'>FREE</h6>
          
          </div>
          <hr/>
          <div className='total'>
            <h6 className='total-type'>TOTAL:</h6>
            <h6 className='total-cost'>${cart?.total}
            </h6>
          </div>
          <p className='promo'>get Dailycashwith Nespola Card</p>
        </div>
        </div>
        
      </div>

      
      
      

    </div>
  )
}

export default Cart