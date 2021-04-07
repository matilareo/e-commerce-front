import {
  GET_SOMETHING,
  GET_SOMETHING_SUCCESS,
  GET_SOMETHING_FAIL,
} from 'Actions/types';

const INIT_STATE = {
  data:null,
  fetchingSomething:false,
  errorFetchingSomething:false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_SOMETHING:
      return { ...state, fetchingSomething: true };
    case GET_SOMETHING_SUCCESS:
      return { ...state, fetchingSomething: false, data: action.payload };
    case GET_SOMETHING_FAIL:
      return { ...state, fetchingSomething: false, errorFetchingSomething: true };
    default:
      return {...state};
  }
};
