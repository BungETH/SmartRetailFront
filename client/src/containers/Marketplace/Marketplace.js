import { connect } from 'react-redux';
import { requestTokens, claimToken } from '../../actions/index';
<<<<<<< HEAD:client/src/containers/Marketplace/PlaceMarket.js
import Marketplace from '../../components/Dapp/Marketplace.jsx';
//import store from '../../store';
=======
import Marketplace from '../../components/Dapp/Marketplace';
>>>>>>> e874ea771d8c4c138f2fe8a354014dcefbc89579:client/src/containers/Marketplace/Marketplace.js

const mapStateToProps = (state) => (console.log(state.contracts.FidelityToken),{
    tokenAmount: state.fidelity.fidelityTokenAmount,
  });

const mapDispatchToProps = (dispatch) => {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Marketplace);