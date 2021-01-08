import {
  STORE_TRANSACTION_PARAMS,
  FETCH_ESCROW_CONTRACT,
  STORE_ORDERS,
} from '../actions/escrow';
import {
  STORE_PRODUCT_PRICE_IN_WEI,
} from '../actions/fidelity';

const initialState = {
  contract: {},
  sellerAddress: '',
  amountInWei: 0,
  userOrder: [{
    orderId: 0,
    seller: '',
    amount: 0,
    state: 0,
  }],
};
const escrowReducer = (state = initialState, action = {}) => {
  switch (action.type) {
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

    case STORE_ORDERS:
      if (state.userOrder[0].orderId === 0) {
        return {
          ...state,
          userOrder: [{
            orderId: action.orderId,
            seller: action.seller,
            amount: action.amount,
            state: action.state,
          }],
        };
      }
      return {
        ...state,
        userOrder: [...state.userOrder, {
          orderId: action.orderId,
          buyer: action.buyer,
          seller: action.seller,
          amount: action.amount,
          state: action.state,
        }],
      };
    default: return state;
  }
};
export default escrowReducer;
