import {
    CLAIM_TOKENS,
} from '../actions/fidelity';
  
  
  const FidelityMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case CLAIM_TOKENS: {
        const fidelityState = store.getState().fidelity;
        console.log(fidelityState);
        async function claimTokens() {
          const transaction = await fidelityState.contract.methods.claim().send({ gas: 3000000, from: fidelityState.account });
          console.log(transaction);
        }
        claimTokens();
      };
  
          default: next(action);
      }
  };
  export default FidelityMiddleware;