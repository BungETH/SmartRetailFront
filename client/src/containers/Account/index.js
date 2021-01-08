import { connect } from 'react-redux';
import { sendConfirmationDelivery } from '../../actions/escrow';
import { fetchUserBalance, claimTokens } from '../../actions/fidelity';

import Account from '../../components/Account';

const mapStateToProps = (state) => ({
  orders: state.escrow.userOrder,
  balance: state.fidelity.userBalance,
});

const mapDispatchToProps = (dispatch) => ({
  sendConfirmationDelivery: () => {
    dispatch(sendConfirmationDelivery());
  },

  fetchUserBalance: (id) => {
    dispatch(fetchUserBalance(id));
  },

  claimTokens: () => {
    dispatch(claimTokens());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);
