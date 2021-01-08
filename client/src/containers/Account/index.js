import { connect } from 'react-redux';
import { sendConfirmationDelivery } from '../../actions/escrow';
import { fetchUserBalance, claimTokens} from '../../actions/fidelity';

import Account from '../../components/Account';

const mapStateToProps = (state) => ({
    tokenAmount: state.fidelity.tokenEarnedInWei,
    balance: state.fidelity.userBalance,
  });

const mapDispatchToProps = (dispatch) => ({
  sendConfirmationDelivery: () => {
    dispatch(sendConfirmationDelivery());
  },

  fetchUserBalance: (id) => {
    dispatch(fetchUserBalance(id));
  },

  claimTokens: (id) => {
    dispatch(claimTokens());
  },
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);