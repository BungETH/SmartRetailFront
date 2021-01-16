import {
  FETCH_ESCROW_CONTRACT,
} from '../actions/escrow';
import {
  STORE_PRODUCT_PRICE_IN_WEI,
  STORE_TRANSACTION_PARAMS,
} from '../actions/fidelity';
import {
  STORE_USER_ORDERS,
} from '../actions/orders';

const initialState = {
  contract: {},
  sellerAddress: '',
  amountInWei: 0,
  status: '',
  orders: null,
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

    case STORE_USER_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    default: return state;
  }
};
export default escrowReducer;
