export const FETCH_ESCROW_CONTRACT = 'FETCH_ESCROW_CONTRACT';

export const SEND_CONFIRMATION_DELIVERY = 'SEND_CONFIRMATION_DELIVERY';
export const STORE_ORDERS = 'STORE_ORDERS';

export const fetchEscrowContract = (contract) => ({
  type: FETCH_ESCROW_CONTRACT,
  contract,
});
<<<<<<< HEAD
=======

export const storeTransactionParams = (seller, value) => ({
  type: STORE_TRANSACTION_PARAMS,
  seller,
  value,
});

export const sendTransaction = () => ({
  type: SEND_TRANSACTION,
});
>>>>>>> 605ee880fa9dc29577edc1c6dea9cb9e4671e89c

export const sendConfirmationDelivery = (orderId) => ({
  type: SEND_CONFIRMATION_DELIVERY,
  orderId,
<<<<<<< HEAD
});

export const storeOrders = (orderId, seller, amount, state) => ({
  type: STORE_ORDERS,
  orderId,
  seller,
  amount,
  state,
});
=======
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
>>>>>>> 605ee880fa9dc29577edc1c6dea9cb9e4671e89c
