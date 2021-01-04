import {
  SEND_TRANSACTION,
} from '../actions/escrow';

const BigNumber = require('bignumber.js');

const EscrowMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case SEND_TRANSACTION: {
          const { account } = store.getState().fidelity;
          const escrowState = store.getState().escrow;
          const seller = escrowState.sellerAddress;
          const amountInWei = new BigNumber(escrowState.amount*0.01*10**18);
          const valueToEth = (amountInWei);
          console.log(amountInWei);
          console.log(valueToEth);
          
          async function escrowInteraction() {
            console.log('here');
            const transaction = await escrowState.contract.methods.sendPayment(seller, amountInWei).send({ gas: 900000, from: account, value: amountInWei });
            console.log(transaction);
          }
          escrowInteraction();
      };
      default: next(action);
	}
};
export default EscrowMiddleware;