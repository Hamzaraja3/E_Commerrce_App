

import { combineReducers } from 'redux';
import CounterReducer from './CounterReducer'; 
import CartReducer from './CartReducer';
import Productdata from './Productdata';
const rootReducer = combineReducers({
  counter: CounterReducer,
  CartItems: CartReducer, 
  productData: Productdata,
  
});

export default rootReducer;