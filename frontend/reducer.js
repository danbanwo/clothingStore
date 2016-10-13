import { ADD_ITEM } from "./actions";

const _defaultState = {
  cart: []
}


const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return ({
        cart: [
          ...oldState.cart,
          action.item
        ]
      })
    default:
      return oldState;
  }
}

export default reducer;
