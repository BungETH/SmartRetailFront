import {
    CLAIM_TOKENS,
} from '../actions/fidelity';
  
  
  const FidelityMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case CLAIM_TOKENS: {
        const escrowState = store.getState().escrow;
        async function claimTokens() {
          const transaction = await escrowState.contract.methods.claimFDLTToken().send({ gas: 3000000, from: escrowState.account });
          console.log(transaction);
        }
        claimTokens();
      };
          default: next(action);
      }
  };
  export default FidelityMiddleware;