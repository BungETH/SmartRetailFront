import { connect } from 'react-redux';
import { getFidelityTokens } from '../../actions/fidelity';
import Marketplace from '../../components/Dapp/Marketplace';
import store from '../../store';

const mapStateToProps = (state) => (console.log(state.contracts.FidelityToken),{
    // tokenAmount: state.fidelity.fidelityTokenAmount,
  });

const mapDispatchToProps = (dispatch) => ({
	getFidelityTokens: (price) => {
			dispatch(getFidelityTokens(price));
	},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Marketplace);