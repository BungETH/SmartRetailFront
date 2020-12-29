//npm import
import { generateStore } from '@drizzle/store';
import drizzleOptions from '../drizzleOptions';
<<<<<<< HEAD
import thunk from 'redux-thunk'
=======
import ReduxThunk from 'redux-thunk';

>>>>>>> a7bb1db378f4e18fa3f29ad4df1e6e817346687b

//local import
import FidelityMiddleware from '../middleware/FidelityMiddleware';
import ProductsMiddleware from '../middleware/ProductsMiddleware';
import fidelityReducer from '../reducers/fidelityReducer';
import productsReducer from '../reducers/productsReducer';

<<<<<<< HEAD
const appMiddlewares = [ FidelityMiddleware, thunk ];
=======
const appMiddlewares = [ FidelityMiddleware, ReduxThunk ];
>>>>>>> a7bb1db378f4e18fa3f29ad4df1e6e817346687b

const appReducers = { fidelity: fidelityReducer, products: productsReducer  }

// create the store
const store = generateStore({
 drizzleOptions,
 appReducers,
 appMiddlewares,
 disableReduxDevTools: false  // enable ReduxDevTools!
});

export default store;