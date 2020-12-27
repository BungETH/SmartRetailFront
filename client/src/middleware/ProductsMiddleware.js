//npm import
import axios from 'axios'
// import { trackPromise } from 'react-promise-tracker';

//local import
import {
  // FETCH_PRODUCTS_SUCCES,
  // fetchProductsPending,
  // fetchProductsSucces,
  // fetchProductsError,
  // FETCH_PRODUCTS_PENDING
} from '../actions/fidelity'

export const productsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // case FETCH_PRODUCTS_PENDING: {

    //   async  function fetchProducts() {
    //     await axios.get(`https://cors-anywhere.herokuapp.com/https://salty-citadel-63624.herokuapp.com/api/products?page=${1}`)
    //       .then((
    //         json) => {
    //           const { data } = json;
    //           const products = data["hydra:member"];
    //           store.dispatch(fetchProductsSucces(products))
    //           console.log(products) 
    //         }
    //       )
    //       .catch( error => {
    //         store.dispatch(fetchProductsError(error))
    //         console.log(error)
    //       })
    //   }
    //   fetchProducts();
		// next(action);
		// break;
		// }
		// default: next(action);
	}
}

export default productsMiddleware;