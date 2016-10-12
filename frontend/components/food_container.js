import {connect} from 'react-redux';
import Food from './food.jsx'

const mapStoreToProps = store => (
  {foods: store.foods}
)

export default connect(mapStoreToProps)(Food);
