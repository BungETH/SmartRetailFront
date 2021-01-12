import { connect } from 'react-redux';
<<<<<<< HEAD
import { requestTokens, claimToken } from '../../actions/index';
<<<<<<< HEAD:client/src/containers/Marketplace/PlaceMarket.js
import Marketplace from '../../components/Dapp/Marketplace.jsx';
//import store from '../../store';
=======
=======
>>>>>>> 17a7874dfe2e4999f2723f961f225b66bced77b0
import Marketplace from '../../components/Dapp/Marketplace';
>>>>>>> e874ea771d8c4c138f2fe8a354014dcefbc89579:client/src/containers/Marketplace/Marketplace.js

const mapStateToProps = (state) => ({
  tokenAmount: state.fidelity.fidelityTokenAmount,
});

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Marketplace);
