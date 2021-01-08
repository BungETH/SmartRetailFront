export const FETCH_ESCROW_CONTRACT = 'FETCH_ESCROW_CONTRACT';
export const STORE_TRANSACTION_PARAMS = 'STORE_TRANSACTION_PARAMS';
export const SEND_TRANSACTION = 'SEND_TRANSACTION';
export const SEND_CONFIRMATION_DELIVERY = 'SEND_CONFIRMATION_DELIVERY';
export const STORE_ORDERS = 'STORE_ORDERS';

export const fetchEscrowContract = (contract) => ({
  type: FETCH_ESCROW_CONTRACT,
  contract,
});

export const storeTransactionParams = (seller, value) => ({
  type: STORE_TRANSACTION_PARAMS,
  seller,
  value,
});

export const sendTransaction = () => ({
  type: SEND_TRANSACTION,
});

export const sendConfirmationDelivery = (amount) => ({
  type: SEND_CONFIRMATION_DELIVERY,
  amount,
});

export const storeOrders = (orderId, seller, amount, state) => ({
  type: STORE_ORDERS,
  orderId,
  seller,
  amount,
  state,
});

export const fetchTransactionParams = (seller, value) => {
  return (dispatch) => {
    dispatch(storeTransactionParams(seller,value));
    dispatch(sendTransaction());
  };
};
