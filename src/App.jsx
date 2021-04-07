import React from "react";
// import {ApolloProvider} from '@apollo/client';
// import client from './Apollo';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContainer from 'Containers/App';
import { configuredStore } from 'Store';

const App = () => (
  // <ApolloProvider client={client}>
  <Provider store={configuredStore}>
      <Router >
        <AppContainer/>
      </Router>
  </Provider>
  // </ApolloProvider>  
);

export default App;