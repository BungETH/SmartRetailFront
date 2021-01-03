
import {
    STORE_TRANSACTION_PARAMS,
    FETCH_ESCROW_CONTRACT,
} from '../actions/escrow';
  const initialState = {
    contract:{},
    sellerAddress:'',
    amount:0,
  };
  
  const escrowReducer = (state = initialState, action = {}) => {
    switch(action.type) {
      case STORE_TRANSACTION_PARAMS:
        return {
          ...state,
          sellerAddress: action.seller,
          amount: action.value,
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