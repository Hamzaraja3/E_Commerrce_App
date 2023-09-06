// CartReducer.js
import { ADD_TO_CART, REMOVE_TO_CART } from "./Action";

const CartReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.payload]: true,
      };
    case REMOVE_TO_CART:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default CartReducer;
