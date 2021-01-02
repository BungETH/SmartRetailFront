import SmartRetailEscrow from './contracts/SmartRetailEscrow.json';
import FidelityToken from './contracts/FidelityToken.json';

// Here you can add data usefull for drizzle object initialisation
// like contracts, events, or provider
const options = {
  web3: {
    fallback: {
      type: 'ws',
      url: 'ws://127.0.0.1:7545',
    },
  },
  contracts: [SmartRetailEscrow, FidelityToken],
  events: {
    SmartRetailEscrow: ['FundSendToContract','FundSendToSeller'],
  },
  // syncAlways:true,
};

export default options;
