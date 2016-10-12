import { ADD_FOOD, CLEAR } from "./actions";

const _defaultState = {
  foods: []
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case ADD_FOOD:
      return ({
        foods: [
          ...oldState.foods,
          action.food
        ]
      })
    default:
      return oldState;
  }
}

export default reducer;
