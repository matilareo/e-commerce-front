/**
 * Redux Store
 */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";
import RootSaga from "../sagas";
import { persistStore, persistReducer, autoRehydrate } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

function configureStore() {
    const store = createStore(
        persistedReducer,
        // compose(applyMiddleware(...middlewares))
        composeWithDevTools(applyMiddleware(...middlewares))
    );
    let persistor = persistStore(store);

    sagaMiddleware.run(RootSaga);

    return { store, persistor };
}

// eslint-disable-next-line import/prefer-default-export
export const configuredStore = configureStore();
