import {
  GET_SOMETHING,
  GET_SOMETHING_SUCCESS,
  GET_SOMETHING_FAIL,
} from './types';

export function getSomething(payload) {
  return {
    type: GET_SOMETHING,
    payload,
  };
}

export function getSomethingSuccess(results) {
  return {
    type: GET_SOMETHING_SUCCESS,
    payload: results,
  };
}

export function getSomethingFail() {
  return {
    type: GET_SOMETHING_FAIL,
  };
}