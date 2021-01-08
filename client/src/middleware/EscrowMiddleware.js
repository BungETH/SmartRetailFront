import {
  SEND_TRANSACTION,
  SEND_CONFIRMATION_DELIVERY,
} from '../actions/escrow';

const BigNumber = require('bignumber.js');


const EscrowMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_TRANSACTION: {
      const { account } = store.getState().fidelity;
      const escrowState = store.getState().escrow;
      const seller = escrowState.sellerAddress;
      const amount = new BigNumber(escrowState.amountInWei);
      console.log(escrowState);
      async function sendPaymentToEscrow() {
        const transaction = await escrowState.contract.methods.sendPayment(seller, amount).send({ gas: 900000, from: account, value: amount });
        console.log(transaction);
      }
      sendPaymentToEscrow();
      next(action);
		  break;
    };

    case SEND_CONFIRMATION_DELIVERY: {
      const escrowState = store.getState().escrow;
      const { account } = store.getState().fidelity;
      const amountInWei = new BigNumber(escrowState.amountInWei*10**18);
      console.log(amountInWei);
      async function sendConfirmationToEscrow() {
        const transaction = await escrowState.contract.methods.confirmDelivery(amountInWei).send({ gas: 900000, from: account });
        console.log(transaction);
      }
      sendConfirmationToEscrow();
    };
    default: next(action);
	}
};
export default EscrowMiddleware;