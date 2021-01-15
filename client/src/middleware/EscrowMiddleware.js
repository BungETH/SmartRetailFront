import axios from 'axios';
import {
  SEND_CONFIRMATION_DELIVERY,
} from '../actions/escrow';
import { SEND_TRANSACTION } from '../actions/fidelity';
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
          userId: '/api/users/3',
        })
          .then(
            (response) => {
              console.log(response);
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
          status: 'Payed',
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
