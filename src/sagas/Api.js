/* eslint-disable no-console */
/**
 * Auth Sagas
 */
 import {
  all, call, fork, put, takeEvery,
} from 'redux-saga/effects';

import api from 'Api';

import {
  GET_SOMETHING,
} from 'Actions/types';

import {
  getSomethingSuccess,
  getSomethingFail,
} from 'Actions';

const getSomethingRequest = (params) => api.getSomething(params);

/// //////////////////////////////////////////////
function* getSomething({ payload }) {
  const { onComplete, onError, params } = payload || {};
  try {
    const result = yield call(getSomethingRequest, params);
    if (result instanceof Error) throw new Error(result.message);
    yield put(getSomethingSuccess(result.data));
    if (onComplete) onComplete(result.data);
  } catch (error) {
    if (onError) onError(error);
    yield put(getSomethingFail(error));
  }
}
export function* getSomethingSaga() {
  yield takeEvery(GET_SOMETHING, getSomething);
}

export default function* rootSaga() {
  yield all([
    fork(getSomethingSaga),
  ]);
}
