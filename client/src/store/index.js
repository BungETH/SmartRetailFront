//npm import
import { generateStore } from '@drizzle/store';
import drizzleOptions from '../drizzleOptions';
import ReduxThunk from 'redux-thunk';


//local import
import FidelityMiddleware from '../middleware/FidelityMiddleware';
import ProductsMiddleware from '../middleware/ProductsMiddleware';
import fidelityReducer from '../reducers/fidelityReducer';
import productsReducer from '../reducers/productsReducer';

const appMiddlewares = [ FidelityMiddleware, ReduxThunk ];

const appReducers = { fidelity: fidelityReducer, products: productsReducer  }

// create the store
const store = generateStore({
 drizzleOptions,
 appReducers,
 appMiddlewares,
 disableReduxDevTools: false  // enable ReduxDevTools!
});

export default store;