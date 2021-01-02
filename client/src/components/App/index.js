import React, { useEffect } from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import { DrizzleContext } from '@drizzle/react-plugin';
import { Drizzle } from '@drizzle/store';
import store from '../../store';
import drizzleOptions from '../../drizzleOptions';
import DappRouter from '../../utils/DappRouter';
import Loading from "../ReactLoading";
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

  const { promiseInProgress } = usePromiseTracker();
  return (
    // Here is native drizzle components who helps to Dapp initialisation
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {(drizzleContext) => {
          const { drizzleState, initialized } = drizzleContext;
          return initialized ? (
            <div className="app">
              <DappRouter drizzle={drizzle} />
            </div>
          ) : (
            <Loading type={"cylon"} color={"#357EDD"} />
          );
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
};

export default App;
