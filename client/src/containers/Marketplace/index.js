import { connect } from 'react-redux';
import { getFidelityTokens } from '../../actions/fidelity';
import Marketplace from '../../components/Dapp/Marketplace';

const mapStateToProps = (state) => ({
    tokenAmount: state.fidelity.fidelityTokenAmount,
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