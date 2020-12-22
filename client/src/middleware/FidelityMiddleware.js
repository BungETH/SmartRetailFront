
/*import { getFidelityTokens } from '../actions/fidelity';

const FidelityMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case 'GET_FIDELITY_TOKENS': {
      const price = store.getState().fidelity;
   
      // interact with your service
    console.log(price);
		next(action);
		break;
		}
		default: next(action);
	}
};
export default FidelityMiddleware;*/