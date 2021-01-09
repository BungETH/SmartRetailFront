import { connect } from 'react-redux';
import { fetchUserBalance, claimTokens } from '../../actions/fidelity';

import Account from '../../components/Account';

const mapStateToProps = (state) => ({
  balance: state.fidelity.userBalance,
});

const mapDispatchToProps = (dispatch) => ({
  
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
