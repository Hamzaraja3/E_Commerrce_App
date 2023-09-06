import {ProductData} from './Action'
const initialState = [];

const Productdata = (state = initialState, action) => {
  switch (action.type) {
    case ProductData:
      return action.payload;
    default:
      return state;
  }
};

export default Productdata;
