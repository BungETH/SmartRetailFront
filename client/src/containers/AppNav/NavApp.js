//npm import
import { connect } from 'react-redux';

//local import
import AppNav from "../../components/AppNav/AppNav";
import { fetchOrders } from '../../actions/orders';

const mapStateToProps = (state) => ({
  pendingDeliveryCount: state.escrow.orders
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => {
    dispatch(fetchOrders())
  },
})

const NavApp = connect(mapStateToProps, mapDispatchToProps)(AppNav);

export default NavApp;