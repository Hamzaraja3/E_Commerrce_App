
export const ProductData='ProductData'
export const INCREMENT='INCREMENT';
export const DECREMENT='DECREMENT';
export const ADD_TO_CART='ADD_TO_CART';
export const REMOVE_TO_CART='REMOVE_TO_CART';
export const increment = (productId) => {
  console.log('Dispatching increment action for productId:', productId);
  return {
    type: INCREMENT,
    payload:productId,
  };
};

export const decrement = (productId) => {
  console.log('Dispatching decrement action for productId:', productId);
  return {
    type: DECREMENT,
    payload:productId,
  };
}; 
export const addtoCart=(productId)=>{
  return{
    type:ADD_TO_CART,
    payload:productId
  }
}
export const removetoCart=(productId)=>{
  return{
    type:REMOVE_TO_CART,
    payload:productId
  }
}
export const setProductData = (Data) => {
  console.log("productData",Data)
  return {
    type: ProductData, 
    payload: Data,
   
  };
}