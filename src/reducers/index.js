import { combineReducers } from "redux";
import auth from "./auth";
import couponUI from "./couponUI";
import checkCouponUI from "./checkCouponUI";

export default combineReducers({ auth, couponUI, checkCouponUI });
