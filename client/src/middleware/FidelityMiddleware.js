import {
    CLAIM_TOKENS,
    storeTokenAddress,
    resetBalance,
    fetchUserBalance,
} from '../actions/fidelity';
  
  
  const FidelityMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case CLAIM_TOKENS: {
        const escrowState = store.getState().escrow;
        async function claimTokens() {
          const transaction = await escrowState.contract.methods.claimFDLTToken().send({ gas: 3000000, from: escrowState.account })
          .then(
            (response) => {
              console.log(response);
              store.dispatch(storeTokenAddress(response.events[0].address));
              store.dispatch(resetBalance());
            },
          )
          
        }
        claimTokens();

        
      };
          default: next(action);
      }
  };
  export default FidelityMiddleware;