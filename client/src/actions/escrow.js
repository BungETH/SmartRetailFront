export const FETCH_ESCROW_CONTRACT = 'FETCH_ESCROW_CONTRACT';
export const STORE_TRANSACTION_PARAMS = 'STORE_TRANSACTION_PARAMS';
export const SEND_TRANSACTION = 'SEND_TRANSACTION';

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

export const fetchTransactionParams = (seller, value) => {
  return (dispatch, getState) => {
    dispatch(storeTransactionParams(seller,value))
    dispatch(sendTransaction());
  }
}