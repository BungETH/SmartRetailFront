export const FETCH_FIDELITY_CONTRACT = 'FETCH_FIDELITY_CONTRACT';
export const FETCH_CURRENT_ACCOUNT = 'FETCH_CURRENT_ACCOUNT';
export const FETCH_PRICE = 'FETCH_PRICE';
export const FETCH_FIDELITY_TOKENS = 'FETCH_FIDELITY_TOKENS';
export const STORE_FIDELITY_TOKENS = 'STORE_FIDELITY_TOKENS';


//Plain object actions
export const fetchFidelityContract = (contract) => ({
  type: FETCH_FIDELITY_CONTRACT,
  contract,
});

export const fetchCurrentAccount = (account) => ({
  type: FETCH_CURRENT_ACCOUNT,
  account,
});

export const fetchPrice = (productPrice) => ({
  type: FETCH_PRICE,
  productPrice,
});

export const fetchFidelityTokens = () => ({
  type: FETCH_FIDELITY_TOKENS,
});

export const storeFidelityTokens = (amount) => ({
    type: STORE_FIDELITY_TOKENS,
    amount,
  });


  
  
  