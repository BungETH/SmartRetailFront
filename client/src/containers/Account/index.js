import { connect } from 'react-redux';
import { fetchUserBalance, claimTokens, resetBalance } from '../../actions/fidelity';
import { fetchOrders } from '../../actions/orders';

import Account from '../../components/Account';

const mapStateToProps = (state) => ({
  balance: state.fidelity.userBalance,
  tokenAddress: state.fidelity.tokenAddress,
  orders: state.escrow.orders,
});

const mapDispatchToProps = (dispatch) => ({

  fetchUserBalance: () => {
    dispatch(fetchUserBalance());
  },
  claimTokens: () => {
    dispatch(claimTokens());
  },
  resetBalance: (id) => {
    dispatch(resetBalance(id));
  },
  fetchOrders: () => {
    dispatch(fetchOrders());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
