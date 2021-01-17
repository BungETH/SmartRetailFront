//npm import
import { connect } from 'react-redux';

//local import
import AppNav from "../../components/AppNav/AppNav";
import { fetchOrders } from '../../actions/orders';

const mapStateToProps = (state) => ({
  pendingDeliveryCount: 3/*state.escrow.orders.filter(x => x.status == "Awaiting payment").length*/
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => {
    dispatch(fetchOrders())
  },
})

const NavApp = connect(mapStateToProps, mapDispatchToProps)(AppNav);

export default NavApp;