// npm import
import { connect } from 'react-redux';

// local import
import AppNav from "../../components/AppNav/AppNav";
import { fetchOrders } from '../../actions/orders';
import { fetchCurrentAccount } from '../../actions/fidelity';

const mapStateToProps = (state) => ({
  pendingDeliveryCount: 3,
  currentAccount: state.fidelity.account,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => {
    dispatch(fetchOrders());
  },
  fetchCurrentAccount: (account) => {
    dispatch(fetchCurrentAccount(account));
  },
});

const NavApp = connect(mapStateToProps, mapDispatchToProps)(AppNav);

export default NavApp;
