import {
  FETCH_FIDELITY_CONTRACT,
  FETCH_CURRENT_ACCOUNT,
  STORE_TOKEN_AMOUNT,
} from '../actions/fidelity';

const initialState = {
  contract:{},
  account:'',
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
       
    case STORE_TOKEN_AMOUNT:
      return {
        ...state,
        fidelityTokenAmount: state.fidelityTokenAmount+action.amount,
			};
		default: return state;
	};
};



export default fidelityReducer;