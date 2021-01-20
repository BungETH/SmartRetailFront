// npm import
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

// local import
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCES = 'FETCH_PRODUCTS_SUCCES';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const FETCH_ITEM_PENDING = 'FETCH_ITEM_PENDING';
export const FETCH_ITEM_SUCCES = 'FETCH_ITEM_SUCCES';
export const FETCH_ITEM_ERROR = 'FETCH_ITEM_ERROR';

const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING,
});

const fetchItemPending = () => ({
  type: FETCH_ITEM_PENDING,
});

const fetchProductsSucces = (products) => ({
  type: FETCH_PRODUCTS_SUCCES,
  products,
});

const fetchItemSucces = (product) => ({
  type: FETCH_ITEM_SUCCES,
  product,
});

const fetchProductsError = (error) => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
});

const fetchItemError = (error) => ({
  type: FETCH_ITEM_ERROR,
  error,
});

// Asynchronous actions

// Asynchronous Action to retrieve products list
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    return trackPromise(
      axios
        .get(
          `https://salty-citadel-63624.herokuapp.com/api/products?page=${1}`,
        )
        .then((json) => {
          const { data } = json;
          const products = data['hydra:member'];
          dispatch(fetchProductsSucces(products));
        })
        .catch((error) => {
          dispatch(fetchProductsError(error));
        }),
    );
  };
};

//Asynchronous Action to retrieve product according to product Id 
export const fetchItem = (id) => {
  return (dispatch) => {
    dispatch(fetchItemPending());
    return trackPromise(
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://salty-citadel-63624.herokuapp.com/api/products/${id}`,
        )
        .then((json) => {
          const { data } = json;
          const product = data;
          dispatch(fetchItemSucces(product));
          //console.log(data)
        })
        .catch((error) => {
          dispatch(fetchItemError(error));
        }),
    );
  };
};
