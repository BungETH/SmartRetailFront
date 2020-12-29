import { connect } from 'react-redux';
import {
  fetchPrice,
  fetchFidelityTokens,
} from '../../actions/fidelity';
import Marketplace from '../../components/Dapp/Marketplace';

const mapStateToProps = (state) => ({
    tokenAmount: state.fidelity.fidelityTokenAmount,
  });

const mapDispatchToProps = (dispatch) => ({
  fetchPrice: (productPrice) => {
    dispatch(fetchPrice(productPrice));
  },

  fetchFidelityTokens: () => {
    dispatch(fetchFidelityTokens());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Marketplace);