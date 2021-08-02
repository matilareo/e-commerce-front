import { ADD_PRODUCT } from "Actions/types";

const INIT_STATE = {
    products: [],
    count: 0,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            state.products.push(action.payload);
            state.count++;
            return { ...state };
        default:
            return state;
    }
};
