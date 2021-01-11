import {
  SEND_TRANSACTION,
  SEND_CONFIRMATION_DELIVERY,
  storeOrders,
} from '../actions/escrow';

const BigNumber = require('bignumber.js');

const EscrowMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_TRANSACTION: {
      const { account } = store.getState().fidelity;
      const escrowState = store.getState().escrow;
      const seller = escrowState.sellerAddress;
      const amount = new BigNumber(escrowState.amountInWei);
      const payment = async function sendPaymentToEscrow() {
        const transaction = await escrowState.contract.methods.sendPayment(seller, amount).send({
          gas: 900000,
          from: account,
          value: amount,
        });
        const values = transaction.events.FundSendToContract.returnValues;
        store.dispatch(storeOrders(values.orderId, values.seller, values.amount, values.state));
      };
      payment();
      next(action);
      break;
    }

    case SEND_CONFIRMATION_DELIVERY: {
      const escrowState = store.getState().escrow;
      const { account } = store.getState().fidelity;
      const confirm = async function sendConfirmationToEscrow() {
        const transaction = await escrowState.contract.methods.confirmDelivery(action.orderId).send({
          gas: 900000,
          from: account,
        });
        // console.log(transaction);
        // appeller token manager
      };
      confirm();
      break;
    }
    default: next(action);
  }
};
export default EscrowMiddleware;
