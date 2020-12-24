//npm import
import { generateStore } from '@drizzle/store';
import drizzleOptions from '../drizzleOptions';

//local import
import FidelityMiddleware from '../middleware/FidelityMiddleware';
import ProductsMiddleware from '../middleware/ProductsMiddleware';
import fidelityReducer from '../reducers/fidelityReducer';
import productsReducer from '../reducers/productsReducer';

const appMiddlewares = [ FidelityMiddleware, ProductsMiddleware ];

const appReducers = { fidelity: fidelityReducer, products: productsReducer  }

// create the store
const store = generateStore({
 drizzleOptions,
 appReducers,
 appMiddlewares,
 disableReduxDevTools: false  // enable ReduxDevTools!
});

export default store;