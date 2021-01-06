import { connect } from 'react-redux';
import { requestTokens, claimToken } from '../../actions/index';
import Marketplace from '../../components/Dapp/Marketplace.jsx';
//import store from '../../store';

const mapStateToProps = (state) => (console.log(state.contracts.FidelityToken),{
    tokenAmount: state.fidelity.fidelityTokenAmount,
  });

const mapDispatchToProps = (dispatch) => {
	return {
    handleBuy: (contract, account, price) => {
      dispatch(requestTokens(price))
      dispatch(claimToken(contract, account, price))
      console.log(contract, account, price)
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Marketplace);