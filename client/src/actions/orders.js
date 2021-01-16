import axios from 'axios';

export const ORDERS_PENDING = 'ORDERS_PENDING';
export const STORE_USER_ORDERS = 'STORE_USER_ORDERS';


const ordersPending = () => ({
  type: ORDERS_PENDING,
});

export const storeUserOrders = (orders) => ({
  type: STORE_USER_ORDERS,
  orders,
});

export const fetchOrders = () => (dispatch) => {
  dispatch(ordersPending());
  return axios.get('https://salty-citadel-63624.herokuapp.com/api/orders')
    .then(
      (response) => {
        dispatch(storeUserOrders(response.data['hydra:member']));
      },
    );
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
