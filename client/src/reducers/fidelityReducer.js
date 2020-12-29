<<<<<<< HEAD
import { getFidelityTokens } from '../actions';
import { generateStore } from '@drizzle/store'
import drizzleOptions from '../drizzleOptions'

=======
import {
  FETCH_FIDELITY_CONTRACT,
  FETCH_CURRENT_ACCOUNT,
  STORE_FIDELITY_TOKENS,
  FETCH_PRICE,
} from '../actions/fidelity';
>>>>>>> dev

const initialState = {
  contract:{},
  account:'',
  productPrice:0,
  fidelityTokenAmount:0,
};

const fidelityReducer = (state = initialState, action = {}) => {
  switch (action.type) {
<<<<<<< HEAD
    case 'GET_FIDELITY_TOKENS':
=======
    case FETCH_FIDELITY_CONTRACT:
>>>>>>> dev
      return {
        ...state,
        contract: action.contract,
      };

      case FETCH_CURRENT_ACCOUNT:
      return {
        ...state,
        account: action.account,
      };
      
    case FETCH_PRICE:
      return {
        ...state,
        productPrice: action.productPrice,
      };
      
    case STORE_FIDELITY_TOKENS:
      return {
        ...state,
        fidelityTokenAmount: action.amount,
			};
		default: return state;
	};
};



export default fidelityReducer;