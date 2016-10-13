import React from 'react';
import store from '../store'
import { addItem } from '../actions.js'
import {Link} from 'react-router'

var Clothing = React.createClass({
  render: function() {
    return (<div>
      <Link to="/cart">Shopping Cart</Link>
      {['👕','👖', '👗', '👠', '👓'].map(function(clothing, idx) {
        return (
          <div key={idx}>
            {clothing}
            <button onClick={store.dispatch.bind(this, addItem(clothing))}>add to cart</button>
          </div>)
      })}
    </div>)
  }
})

export default Clothing;
