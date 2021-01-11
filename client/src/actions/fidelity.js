import axios from 'axios';

// local import
export const FETCH_FIDELITY_CONTRACT = 'FETCH_FIDELITY_CONTRACT';
export const FETCH_CURRENT_ACCOUNT = 'FETCH_CURRENT_ACCOUNT';
export const PENDING = 'PENDING';
export const STORE_TOKEN_AMOUNT_IN_WEI = 'STORE_TOKEN_AMOUNT_IN_WEI';
export const STORE_PRODUCT_PRICE_IN_WEI = 'STORE_PRODUCT_PRICE_IN_WEI';
export const STORE_USER_BALANCE = 'STORE_USER_BALANCE';
export const STORE_TOKEN_ADDRESS = 'STORE_TOKEN_ADDRESS';
export const CLAIM_TOKENS = 'CLAIM_TOKENS';
export const RESET_BALANCE = 'RESET_BALANCE';
export const ERROR = 'ERROR';

// Action creator
export const fetchFidelityContract = (contract) => ({
  type: FETCH_FIDELITY_CONTRACT,
  contract,
});

export const fetchCurrentAccount = (account) => ({
  type: FETCH_CURRENT_ACCOUNT,
  account,
});

const pending = () => ({
  type: PENDING,
});

export const storeTokenAmountInWei = (amount) => ({
  type: STORE_TOKEN_AMOUNT_IN_WEI,
  amount,
});

export const storeProductPriceInWei = (price) => ({
  type: STORE_PRODUCT_PRICE_IN_WEI,
  price,
});
export const storeUserBalance = (balance) => ({
  type: STORE_USER_BALANCE,
  balance,
});
export const storeTokenAddress = (address) => ({
  type: STORE_TOKEN_ADDRESS,
  address,
});
export const claimTokens = () => ({
  type: CLAIM_TOKENS,
});
export const resetBalance = () => ({
  type: RESET_BALANCE,
});

export const error = (errorLog) => ({
  type: ERROR,
  errorLog,
});

// Plain object actions
export const sendProduct = (productId) => (dispatch) => {
  dispatch(pending());
  return axios.get(`https://salty-citadel-63624.herokuapp.com/base?idProduct=${productId}`)
    .then(
      (response) => {
        const ethAmountInWei = response.data.weiEth;
        const tokenAmountInWei = response.data.weiToken;
        dispatch(storeTokenAmountInWei(tokenAmountInWei));
        dispatch(storeProductPriceInWei(ethAmountInWei));
      },
    )
    .catch(
      (sendProductError) => {
        dispatch(error(sendProductError));
      },
    );
};

export const fetchUserBalance = () => (dispatch) => axios.get('https://salty-citadel-63624.herokuapp.com/api/users/35')
  .then(
    (response) => {
      const userBalance = response.data.balance;
      dispatch(storeUserBalance(userBalance));
    },
  )
  .catch(
    (fetchUserBalanceError) => {
      dispatch(error(fetchUserBalanceError));
    },
  );

export const sendBalance = (id) => (dispatch, getState) => {
  dispatch(fetchUserBalance(id));
  const { tokenEarnedInWei } = getState().fidelity;
  const newBalance = Math.round(tokenEarnedInWei*10**-18);
  dispatch(pending());
  return axios.put(`https://salty-citadel-63624.herokuapp.com/api/users/${id}`, { balance: newBalance })
    .catch(
      (sendBalanceError) => {
        dispatch(error(sendBalanceError));
      },
    );
};
