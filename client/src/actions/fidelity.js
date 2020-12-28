import axios from 'axios';

export const FETCH_FIDELITY_CONTRACT = 'FETCH_FIDELITY_CONTRACT';
export const FETCH_CURRENT_ACCOUNT = 'FETCH_CURRENT_ACCOUNT';
export const FETCH_PRODUCT_PRICE = 'FETCH_PRODUCT_PRICE';
export const SEND_PRODUCT_PRICE_PENDING = 'SEND_PRODUCT_PRICE_PENDING';
export const STORE_TOKEN_AMOUNT = 'STORE_TOKEN_AMOUNT';
export const SEND_PRICE_ERROR = 'SEND_PRICE_ERROR';


//Plain object actions
export const fetchFidelityContract = (contract) => ({
  type: FETCH_FIDELITY_CONTRACT,
  contract,
});

export const fetchCurrentAccount = (account) => ({
  type: FETCH_CURRENT_ACCOUNT,
  account,
});

export const fetchProductPrice = (productPrice) => ({
  type: FETCH_PRODUCT_PRICE,
  productPrice,
});

export const sendProductPricePending = () => ({
  type: SEND_PRODUCT_PRICE_PENDING,
});

export const storeTokenAmount = (amount) => ({
    type: STORE_TOKEN_AMOUNT,
    amount,
  });

export const sendPriceError = (error) => ({
  type: SEND_PRICE_ERROR,
  error,
});

  export const sendProductPrice = (productPrice) => {
    return (dispatch) => {
        dispatch(sendProductPricePending());
        dispatch(fetchProductPrice(productPrice));
        // const price = getState().fidelity.productPrice;
        console.log(productPrice);
        return axios.put(`https://cors-anywhere.herokuapp.com/https://salty-citadel-63624.herokuapp.com/api/users/33`,{
          "balance": productPrice,
        })
        .then(
            json => {
              console.log(json.data);
              const tokenAmount=json.data;
              dispatch(storeTokenAmount(tokenAmount))
            
            }
        )
        .catch(
        error => {
            dispatch(sendPriceError(error))
            console.log(error)
        })}
    }

  
  
  