
import {
    STORE_TRANSACTION_PARAMS,
    FETCH_ESCROW_CONTRACT,
} from '../actions/escrow';
import {
  STORE_PRODUCT_PRICE_IN_WEI,
} from '../actions/fidelity';
  const initialState = {
    contract:{},
    sellerAddress:'',
    amountInWei: 0,
  };
  
  const escrowReducer = (state = initialState, action = {}) => {
    switch(action.type) {
      case STORE_TRANSACTION_PARAMS:
        return {
          ...state,
          sellerAddress: action.seller,
          amount: action.value,
        };

      case STORE_PRODUCT_PRICE_IN_WEI:
        return {
          ...state,
          amountInWei: action.price,
        };

      case FETCH_ESCROW_CONTRACT:
        return {
          ...state,
          contract: action.contract,
        };
        default: return state;
    }
   
  }
  
  export default escrowReducer;