/**
 * Redux Store
 */
 import { createStore, applyMiddleware} from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import createSagaMiddleware from 'redux-saga';
 import reducers from '../reducers';
 import RootSaga from '../sagas';
 
 // create the saga middleware
 const sagaMiddleware = createSagaMiddleware();
 
 const middlewares = [sagaMiddleware];
 
 function configureStore(initialState) {
   const store = createStore(
     reducers,
     initialState,
     // compose(applyMiddleware(...middlewares))
     composeWithDevTools(applyMiddleware(...middlewares)),
   );
 
   sagaMiddleware.run(RootSaga);
 
   return store;
 }
 
 // eslint-disable-next-line import/prefer-default-export
 export const configuredStore = configureStore();