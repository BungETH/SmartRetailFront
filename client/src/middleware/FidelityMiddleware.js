import {
  FETCH_FIDELITY_TOKENS,
  storeFidelityTokens
} from '../actions/fidelity';

const FidelityMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
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
		next(action);
		break;
		}
		default: next(action);
	}
};
export default FidelityMiddleware;