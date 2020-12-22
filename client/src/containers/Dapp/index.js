import { connect } from 'react-redux';
import { fetchFidelityContract } from '../../actions/fidelity';
import Dapp from '../../components/Dapp';

const mapStateToProps = (state) => ({
  currentAccount: state.fidelity.account,
  });

const mapDispatchToProps = (dispatch) => ({
  fetchFidelityContract: (contract) => {
    dispatch(fetchFidelityContract(contract));
},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dapp);