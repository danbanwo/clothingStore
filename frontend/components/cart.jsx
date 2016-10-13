import React from 'react';
import { Link } from 'react-router'

const Cart = (props) => (
  <div>
    SHOPPING CART
    <Link to="/">SHOP SOME MORE!!!</Link>
    {props.cart.map(function(item, idx) {
      return (<span key={idx}>{item}</span>)
    })}
  </div>
)

export default Cart
