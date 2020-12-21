import { generateStore } from '@drizzle/store';
import drizzleOptions from '../drizzleOptions';
import FidelityMiddleware from '../middleware/FidelityMiddleware';
import fidelityReducer from '../reducers/fidelityReducer';

// const appMiddlewares = [ FidelityMiddleware ];
const appReducers = { fidelity: fidelityReducer.getState() }
// console.log(fidelityReducer.getState());
// create the store
const store = generateStore({
 drizzleOptions,
 appReducers,
 disableReduxDevTools: false  // enable ReduxDevTools!
});
// console.log(store.getState());

export default store;