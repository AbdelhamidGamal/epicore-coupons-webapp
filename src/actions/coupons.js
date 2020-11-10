import {
  CREATING_COUPON,
  CREATE_COUPON_FAILD,
  CREATE_COUPON_SUCCESS,
  CHECKING_COUPON,
  CHECK_COUPON_FAILED,
  CHECK_COUPON_SUCCESS,
} from "./types";

import axios from "axios";
axios.defaults.withCredentials = true;

const API = process.env.REACT_APP_API;

const createingCoupon = () => ({
  type: CREATING_COUPON,
});

const createCouponFailed = (error) => ({
  type: CREATE_COUPON_FAILD,
  payload: error,
});

const createCouponSuccess = () => ({
  type: CREATE_COUPON_SUCCESS,
});

const checkingCoupon = () => ({
  type: CHECKING_COUPON,
});

const checkCouponFailed = (error) => ({
  type: CHECK_COUPON_FAILED,
  payload: error,
});

const checkCouponSuccess = () => ({
  type: CHECK_COUPON_SUCCESS,
});

export const handleCreateCoupon = (data) => async (dispatch) => {
  dispatch(createingCoupon());
  try {
    const res = await axios.post(`${API}/api/coupons`, data);

    if (res.data.error) {
      dispatch(createCouponFailed(res.data.error));
      return;
    }

    dispatch(createCouponSuccess());
  } catch (e) {
    dispatch(createCouponFailed(e));
  }
};

export const handleCheckCoupon = (code) => async (dispatch) => {
  dispatch(checkingCoupon());
  try {
    const res = await axios.get(`${API}/api/coupons/${code}`);
    console.log(res);
    if (res.data.error) {
      dispatch(checkCouponFailed(res.data.error));
      return;
    }

    dispatch(checkCouponSuccess());
  } catch (e) {
    dispatch(checkCouponFailed(e));
  }
};
