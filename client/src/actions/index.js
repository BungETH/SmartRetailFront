//npm import


//loocal import


//plain object Actions
export const getFidelityTokens = (fidelityPoints) => {
    return {
      type: 'GET_FIDELITY_TOKENS',
      fidelityPoints
    }
  };

  export const requestTokens = (amount) => {
    return {
      type: 'REQUEST_TOKENS',
      amount
    }
  }

//asynchronous Actions
export const claimToken = async (price, contract, account, dispatch) => {
  dispatch(requestTokens(price));
  const getToken = await contract.methods.claim(price*0.05).send({gas: 900000, from: account });
  return (dispatch) => {
    dispatch(getFidelityTokens(getToken.events.Transfer.returnValues.value))
  }
}
