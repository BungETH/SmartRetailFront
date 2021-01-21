import { connect } from 'react-redux';
import { sendConfirmationDelivery } from '../../actions/escrow';
import { deleteOrder, fetchOrders } from '../../actions/orders';
import OrdersFiltered from '../../components/Account/OrdersFiltered';

const mapStateToProps = (state) => ({
  orders: state.escrow.orders,
  status: state.escrow.status,
});

const mapDispatchToProps = (dispatch) => ({

  sendConfirmationDelivery: (referenceId, orderId) => {
    dispatch(sendConfirmationDelivery(referenceId, orderId));
  },
  deleteOrder: ( orderId) => {
    dispatch(deleteOrder(orderId));
  },
  fetchOrders: () => {
    dispatch(fetchOrders());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrdersFiltered);
