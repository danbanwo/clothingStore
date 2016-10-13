import {connect} from 'react-redux';
import Cart from './cart.jsx'

const mapStoreToProps = store => (
  {cart: store.cart}
)


export default connect(mapStoreToProps)(Cart);
