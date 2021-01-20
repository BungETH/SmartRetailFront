import axios from 'axios';

export const ORDERS_PENDING = 'ORDERS_PENDING';
export const STORE_USER_ORDERS = 'STORE_USER_ORDERS';
export const FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR';

const ordersPending = () => ({
  type: ORDERS_PENDING,
});

export const storeUserOrders = (orders) => ({
  type: STORE_USER_ORDERS,
  orders,
});

const fetchOrdersError = (error) => ({
  type: FETCH_ORDERS_ERROR,
  error,
});

export const fetchOrders = () => (dispatch) => {
  dispatch(ordersPending());
  return axios.get('https://salty-citadel-63624.herokuapp.com/api/orders')
    .then(
      (response) => {
        console.log(response.data['hydra:member']);
        dispatch(storeUserOrders(response.data['hydra:member']));
      },
    )
    .catch((error) => {
      dispatch(fetchOrdersError(error));
    });
};

export const deleteOrder = (orderId) => (dispatch) => {
  dispatch(ordersPending());
  return axios.delete(`https://salty-citadel-63624.herokuapp.com/api/orders/${orderId}`)
    .then(
      (response) => {
        dispatch(fetchOrders());
      },
    );
};
