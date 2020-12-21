import ComplexStorage from './contracts/ComplexStorage.json';
import SimpleStorage from './contracts/SimpleStorage.json';
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
  contracts: [SimpleStorage, ComplexStorage, FidelityToken],
  events: {
    SimpleStorage: ['StorageSet'],
  },
  syncAlways:true,
};

export default options;
