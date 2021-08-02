import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    REMOVE_PRODUCT,
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_FAIL,
} from "./types";

export function addProduct(payload) {
    return {
        type: ADD_PRODUCT,
        payload,
    };
}

// export function removeProduct(payload) {
//     return {
//         type: REMOVE_PRODUCT,
//         payload,
//     };
// }

// export function removeProductSuccess(results) {
//     return {
//         type: REMOVE_PRODUCT_SUCCESS,
//         payload: results,
//     };
// }

// export function removeProductFail() {
//     return {
//         type: REMOVE_PRODUCT_FAIL,
//     };
// }
