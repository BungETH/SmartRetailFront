import axios from 'axios';
//local import
export const FETCH_FIDELITY_CONTRACT = 'FETCH_FIDELITY_CONTRACT';
export const FETCH_CURRENT_ACCOUNT = 'FETCH_CURRENT_ACCOUNT';
export const PENDING = 'PENDING';
export const STORE_TOKEN_AMOUNT = 'STORE_TOKEN_AMOUNT';
export const ERROR = 'ERROR';
//Plain object actions
export const fetchFidelityContract = (contract) => ({
  type: FETCH_FIDELITY_CONTRACT,
  contract,
});

export const fetchCurrentAccount = (account) => ({
  type: FETCH_CURRENT_ACCOUNT,
  account,
});


export const pending = () => ({
  type: PENDING,
});

export const storeTokenAmount = (amount) => ({
  type: STORE_TOKEN_AMOUNT,
  amount,
});

export const error = (error) => ({
  type: ERROR,
  error,
});

  export const sendProduct = (productId) => {
    return (dispatch) => {
      dispatch(pending());
      console.log(productId);
      return axios.get(`https://cors-anywhere.herokuapp.com/https://salty-citadel-63624.herokuapp.com/base?idProduct=${productId}`)
      .then(
        response => {
          console.log(response);
          const tokenAmount=response.data.result;
          dispatch(storeTokenAmount(tokenAmount))
        
        }
      )
      .catch(
      error => {
          dispatch(error(error))
          console.log(error)
      })}
    }

    export const sendBalance = (id) => {
      return (dispatch, getState) => {
        const { fidelityTokenAmount } = getState().fidelity;
        dispatch(pending());
        console.log(fidelityTokenAmount);
        return axios.put(`https://cors-anywhere.herokuapp.com/https://salty-citadel-63624.herokuapp.com/api/users/${id}`, {balance: fidelityTokenAmount})
        .then(
          response => {
            console.log(response);
            // const tokenAmount=response.data.result;
            // dispatch(storeTokenAmount(tokenAmount))
          }
        )
        .catch(
        error => {
            dispatch(error(error))
            console.log(error)
        })}
      }

  
  
  
