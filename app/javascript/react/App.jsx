import React from 'react';
import { GlobalStyled } from "./GlobalStyled";

import { CreateContext } from './context/CreateContext';
import AuthContext from './context/AuthContext';
import Router from './router/Router';

function App() {

  const authContext = AuthContext();

  return (
    <>
      <GlobalStyled />
      <CreateContext.Provider value={authContext}>
        <Router />
      </CreateContext.Provider>
    </>
  )
}

export default App;