import axios from 'axios';

export const FETCH_ORDERS_PENDING = 'FETCH_ORDERS_PENDING';

const fetchOrdersPending = () => ({
  type: FETCH_ORDERS_PENDING,
});

export const fetchOrders = () => (dispatch) => {
  dispatch(fetchOrdersPending());
  return axios.get('https://salty-citadel-63624.herokuapp.com/api/orders')
    .then(
      (response) => {
        console.log(response);
      },
    );
};
