import axios from 'axios';
import {
  CLAIM_TOKENS,
  storeTokenAddress,
  resetBalance,
  storeUserBalance,
} from '../actions/fidelity';

const FidelityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CLAIM_TOKENS: {
      const escrowState = store.getState().escrow;
      const claimTokens = async function claimTokens() {
        const transaction = await escrowState.contract.methods.claimFDLTToken().send({
          from: escrowState.account,
        })
          .then(
            (response) => {
              // console.log(transaction);
              store.dispatch(storeTokenAddress(response.events[0].address));
              store.dispatch(resetBalance());
            },
          );
        axios.put(`https://salty-citadel-63624.herokuapp.com/api/users/${1}`, { balance: 0 })
          .then(
            (response) => {
              console.log(response);
              storeUserBalance(0);
            },
          );
      };
      claimTokens();
      break;
    }
    default: next(action);
  }
};
export default FidelityMiddleware;
