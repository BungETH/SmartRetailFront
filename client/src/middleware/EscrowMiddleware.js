import axios from 'axios';
import {
  SEND_CONFIRMATION_DELIVERY,
} from '../actions/escrow';
import {
  SEND_TRANSACTION,
  sendBalance,
} from '../actions/fidelity';
import { fetchOrders } from '../actions/orders';

const EscrowMiddleware = (store) => (next) => (action) => {

  const BigNumber = require('bignumber.js');
  const { account, productPriceInDollars } = store.getState().fidelity;
  const escrowState = store.getState().escrow;

  switch (action.type) {
    case SEND_TRANSACTION: {
      const seller = escrowState.sellerAddress;
      const amount = new BigNumber(escrowState.amountInWei);
      const payment = async function sendPaymentToEscrow() {
        const transaction = await escrowState.contract.methods.sendPayment(seller, amount).send({
          from: account,
          value: amount,
        });
        const values = transaction.events.FundSendToContract.returnValues;
        axios.post('https://salty-citadel-63624.herokuapp.com/api/orders', {
          referenceId: parseInt(values.orderId, 10),
          price: productPriceInDollars,
          status: 'Awaiting payment',
          miniature: 'https://ksr-ugc.imgix.net/assets/030/946/610/ee323b090b2017a9445a728ec08883ad_original.jpg?ixlib=rb-2.1.0&w=680&fit=max&v=1602307434&auto=format&frame=1&q=92&s=2aebaa3c5ac552d945ba59049c369ab7',
          userId: '/api/users/3',
        })
          .then(
            (response) => {
              store.dispatch(fetchOrders());
              store.dispatch(sendBalance());
            },
          )
          .catch(
            (error) => {
              console.log(error);
            },
          );
      };
      payment();
      next(action);
      break;
    }

    case SEND_CONFIRMATION_DELIVERY: {
      const confirmation = async function sendConfirmation() {
        const transaction = await escrowState.contract.methods.confirmDelivery(action.referenceId).send({ from: account });
        console.log(transaction);
        axios.put(`https://salty-citadel-63624.herokuapp.com/api/orders/${action.orderId}`, {
          status: 'Paied',
        })
          .then(
            (response) => {
              store.dispatch(fetchOrders());
            },
          )
          .catch(
            (error) => {
              console.log(error);
            },
          );
      };
      confirmation();
      next(action);
      break;
    }
    default: next(action);
  }
};
export default EscrowMiddleware;
