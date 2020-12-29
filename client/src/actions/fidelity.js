//npm import
import axios from 'axios';
//local import

export const FETCH_FIDELITY_CONTRACT = 'FETCH_FIDELITY_CONTRACT';
export const FETCH_CURRENT_ACCOUNT = 'FETCH_CURRENT_ACCOUNT';
export const FETCH_PRICE = 'FETCH_PRICE';
export const FETCH_FIDELITY_TOKENS = 'FETCH_FIDELITY_TOKENS';
export const STORE_FIDELITY_TOKENS = 'STORE_FIDELITY_TOKENS';
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCES = 'FETCH_PRODUCTS_SUCCES';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

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

export const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING
});

export const fetchProductsSucces = (products) => ({
  type: FETCH_PRODUCTS_SUCCES,
  products
});

export const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  error
})

//Asynchronous actions
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsPending())
    return axios.get(`https://cors-anywhere.herokuapp.com/https://salty-citadel-63624.herokuapp.com/api/products?page=${1}`)
      .then(
        json => {
          const { data } = json;
          const products = data["hydra:member"];
          dispatch(fetchProductsSucces(products))
          console.log(products)
        }
      )
    .catch(
      error => {
        dispatch(fetchProductsError(error))
        console.log(error)
    })}
  }
  
  
  