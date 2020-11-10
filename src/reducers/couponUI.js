import {
  CREATING_COUPON,
  CREATE_COUPON_FAILD,
  CREATE_COUPON_SUCCESS,
} from "../actions/types";

const initState = {
  loading: false,
  fail: false,
  sucess: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case CREATING_COUPON:
      return {
        loading: true,
        fail: false,
        sucess: false,
        error: null,
      };

    case CREATE_COUPON_FAILD:
      return {
        loading: false,
        fail: true,
        sucess: false,
        error: action.payload,
      };

    case CREATE_COUPON_SUCCESS:
      return {
        loading: false,
        fail: false,
        sucess: true,
        error: null,
      };

    default:
      return state;
  }
};
