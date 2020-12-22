import { generateStore } from '@drizzle/store';
import drizzleOptions from '../drizzleOptions';
import FidelityMiddleware from '../middleware/FidelityMiddleware';
import fidelityReducer from '../reducers/fidelityReducer';

const appMiddlewares = [ FidelityMiddleware ];

const appReducers = { fidelity: fidelityReducer }

// create the store
const store = generateStore({
 drizzleOptions,
 appReducers,
 appMiddlewares,
 disableReduxDevTools: false  // enable ReduxDevTools!
});

export default store;