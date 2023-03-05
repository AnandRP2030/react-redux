import { ActionTypes } from "../constants/action-type";
import { setProducts } from "../Action/productAction";
const intialState = {
  products: [],
};

export const productReducer = (state = intialState, action) => {
  // if (action.payload){
  //   console.log(action.payload, 'act')

  // }
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case ActionTypes.SELECT_PRODUCTS:
      return state;
    default:
      return state;
  }
};
