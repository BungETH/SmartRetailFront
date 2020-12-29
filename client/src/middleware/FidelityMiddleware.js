<<<<<<< HEAD

/*import { getFidelityTokens } from '../actions/fidelity';
=======
import {
  FETCH_FIDELITY_TOKENS,
  storeFidelityTokens
} from '../actions/fidelity';
>>>>>>> dev

const FidelityMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
<<<<<<< HEAD
    case 'GET_FIDELITY_TOKENS': {
      const price = store.getState().fidelity;
   
      // interact with your service
    console.log(price);
=======
    case FETCH_FIDELITY_TOKENS: {
      const fidelityState = store.getState().fidelity;
      console.log(fidelityState);

      // TODO : envoyer le prix en bdd

      async function claimInteraction(price) {
        const getToken = await fidelityState.contract.methods.claim(fidelityState.productPrice*0.05).send({gas: 900000, from: fidelityState.account });
        console.log(getToken.events.Transfer.returnValues.value);
        store.dispatch(storeFidelityTokens(getToken.events.Transfer.returnValues.value));
      }
      claimInteraction();
>>>>>>> dev
		next(action);
		break;
		}
		default: next(action);
	}
};
export default FidelityMiddleware;*/