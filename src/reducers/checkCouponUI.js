import {
  CHECKING_COUPON,
  CHECK_COUPON_FAILED,
  CHECK_COUPON_SUCCESS,
} from "../actions/types";

const initState = {
  loading: false,
  fail: false,
  sucess: false,
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHECKING_COUPON:
      return {
        loading: true,
        fail: false,
        sucess: false,
        error: null,
      };

    case CHECK_COUPON_FAILED:
      return {
        loading: false,
        fail: true,
        sucess: false,
        error: action.payload,
      };

    case CHECK_COUPON_SUCCESS:
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
