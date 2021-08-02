import React from "react";
// import {ApolloProvider} from '@apollo/client';
// import client from './Apollo';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppContainer from "Containers/App";
import { configuredStore } from "Store";
import { SnackbarProvider } from "notistack";
import { PersistGate } from "redux-persist/integration/react";
const App = () => (
    // <ApolloProvider client={client}>
    <Provider store={configuredStore.store}>
        <PersistGate loading={null} persistor={configuredStore.persistor}>
            <Router>
                <SnackbarProvider>
                    <AppContainer />
                </SnackbarProvider>
            </Router>
        </PersistGate>
    </Provider>
    // </ApolloProvider>
);

export default App;
