
import {
  FETCH_FIDELITY_TOKENS,
  storeFidelityTokens
} from '../actions/fidelity';
const BN = require('bn.js');

const FidelityMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case FETCH_FIDELITY_TOKENS: {
      const fidelityState = store.getState().fidelity;
      console.log((fidelityState.productPrice)*0.05);
      const tokenAmount = new BN(fidelityState.productPrice*0.05);
      console.log(tokenAmount);
      // TODO : envoyer le prix en bdd

      async function claimInteraction() {
        const getToken = await fidelityState.contract.methods.claim(tokenAmount).send({gas: 900000, from: fidelityState.account });
        console.log(getToken);
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