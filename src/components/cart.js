import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './cartItem'
import Total from "./total"

function Cart() {
const cart = useSelector((state) => state.cart)
  return (
    <div>
<div className="cart__left">
  <div>
    <h3>Shopping Cart</h3>
    {cart?.map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price} 
        quantity={item.quantity}
      />
    ))}
  </div>
</div>
    <div>
        <Total/>
    </div>
    </div>
  )
}

export default Cart