import React, { createContext, useReducer } from 'react';

//import the Reducer
import AppReducer from './AppReducer';

//create the initial state
const initialState = {
  transactions: [],
};

//create the global context
export const GlobalContext = createContext(initialState);

//create a provider for the global context
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //Actions for transactions

  //Delete Existing Transaction Action
  function delTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  //Add new Transaction Action
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
