/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import api from './ApiReducer'
const reducers = combineReducers({
    api: api,
});
 
 export default reducers;
 