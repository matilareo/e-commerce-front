/**
 * App Reducers
 */
import { combineReducers } from "redux";
import api from "./ApiReducer";
import cart from "./CartReducer";
const reducers = combineReducers({
    api: api,
    cart: cart,
});

export default reducers;
