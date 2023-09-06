// CounterReducer.js

import { INCREMENT, DECREMENT,ADD_TO_CART,REMOVE_TO_CART } from './Action';

const initialState = {};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        [action.payload]: (state[action.payload] || 0) + 1,
      };
    case DECREMENT:
      return {
        ...state,
        [action.payload]: Math.max((state[action.payload] || 0) - 1, 0),
      };
    default:
      return state;
  }
};

export default CounterReducer;
  