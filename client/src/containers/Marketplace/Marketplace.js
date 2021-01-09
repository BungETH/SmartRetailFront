import { connect } from 'react-redux';
import { requestTokens, claimToken } from '../../actions/index';
import Marketplace from '../../components/Dapp/Marketplace';

const mapStateToProps = (state) => (console.log(state.contracts.FidelityToken),{
    tokenAmount: state.fidelity.fidelityTokenAmount,
  });

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Marketplace);