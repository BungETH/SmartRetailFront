export const FETCH_ESCROW_CONTRACT = 'FETCH_ESCROW_CONTRACT';
export const SEND_CONFIRMATION_DELIVERY = 'SEND_CONFIRMATION_DELIVERY';

export const fetchEscrowContract = (contract) => ({
  type: FETCH_ESCROW_CONTRACT,
  contract,
});

export const sendConfirmationDelivery = (referenceId, orderId) => ({
  type: SEND_CONFIRMATION_DELIVERY,
  referenceId,
  orderId,
});
