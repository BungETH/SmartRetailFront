import {
  FETCH_FIDELITY_CONTRACT,
  FETCH_CURRENT_ACCOUNT,
  // STORE_FIDELITY_TOKENS,
  FETCH_PRODUCT_PRICE,
} from '../actions/fidelity';

const initialState = {
  contract:{},
  account:'',
  productPrice:0,
  fidelityTokenAmount:0,
};

const fidelityReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_FIDELITY_CONTRACT:
      return {
        ...state,
        contract: action.contract,
      };

      case FETCH_CURRENT_ACCOUNT:
      return {
        ...state,
        account: action.account,
      };
      
    case FETCH_PRODUCT_PRICE:
      return {
        ...state,
        productPrice: action.productPrice,
      };
      
    // case STORE_FIDELITY_TOKENS:
    //   return {
    //     ...state,
    //     fidelityTokenAmount: action.amount,
		// 	};
		default: return state;
	};
};



export default fidelityReducer;