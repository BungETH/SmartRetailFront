import { GET_FIDELITY_TOKENS } from '../actions/fidelity';
import { generateStore } from '@drizzle/store'
import drizzleOptions from '../drizzleOptions'


const initialState = {
  fidelityTokenAmount:0,
};

const fidelityReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_FIDELITY_TOKENS:
      return {
        ...state,
        fidelityTokenAmount: action.price,
			};
		default: return state;
	};
};

const appReducers = { fidelity: fidelityReducer }


const store = generateStore({
 drizzleOptions,
 appReducers,
})

export default store;