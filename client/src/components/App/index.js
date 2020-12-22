import React, { useEffect, useState } from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from '@drizzle/store';
import store from '../../store';
import drizzleOptions from '../../drizzleOptions';
import Dapp from '../../containers/Dapp';
import './app.scss';

// It instanciate new drizzle object with our drizzleOptions

const drizzle = new Drizzle(drizzleOptions, store);

const App = ({ fetchCurrentAccount, currentAccount }) => {
  
  
  async function getAccount() {
    const accounts = await window.ethereum.enable();
    fetchCurrentAccount(accounts[0]);
  }
  window.ethereum.on('accountsChanged', () => {
    getAccount();
  });

  // We use another react hook in order to make a new component render each time the currentAccount
  // variable change his value, learn more at https://fr.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    getAccount();
  }, [currentAccount]);

  
  return (
    // Here is native drizzle components who helps to Dapp initialisation
    <DrizzleContext.Provider drizzle={drizzle}>
        <DrizzleContext.Consumer>
          {(drizzleContext) => {
            const { drizzleState, initialized } = drizzleContext;
            if (!initialized) {
              return 'Loading...';
            }
            
            return (
              <div className="app">
                <Dapp
                  drizzle={drizzle}
                />
              </div>
            );
          }}
        </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
};

export default App;
