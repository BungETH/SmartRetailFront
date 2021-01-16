//npm import

//local import
import { FETCH_ITEM_SUCCES } from '../actions/products';

const initialState = [];

const itemReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ITEM_SUCCES:
      return action.product;
    
    default:
      return state;
  }
}

export default itemReducer;