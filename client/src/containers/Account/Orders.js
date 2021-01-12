import { connect } from 'react-redux';
import { sendConfirmationDelivery } from '../../actions/escrow';
import Orders from '../../components/Account/Orders';

const mapStateToProps = (state) => ({
  orders: state.escrow.userOrders,
<<<<<<< HEAD
  status: state.escrow.status,
=======
>>>>>>> 605ee880fa9dc29577edc1c6dea9cb9e4671e89c
});

const mapDispatchToProps = (dispatch) => ({

  sendConfirmationDelivery: (orderId) => {
    dispatch(sendConfirmationDelivery(orderId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
