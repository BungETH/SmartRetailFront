import {
  FETCH_FIDELITY_CONTRACT,
  FETCH_CURRENT_ACCOUNT,
  STORE_TOKEN_AMOUNT_IN_WEI,
  STORE_USER_BALANCE,
} from '../actions/fidelity';

const initialState = {
  contract:{},
  account:'',
  tokenEarnedInWei:0,
  userBalance:0,
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
       
    case STORE_TOKEN_AMOUNT_IN_WEI:
      return {
        ...state,
        tokenEarnedInWei: action.amount,
      };
      case STORE_USER_BALANCE:
      return {
        ...state,
        userBalance: action.balance,
			};
		default: return state;
	};
};



export default fidelityReducer;