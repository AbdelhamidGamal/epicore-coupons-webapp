import "./styles.scss";
import React from "react";
import * as Yup from "yup";

import { useFormik } from "formik";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { store } from "../../index";
import { handleCheckCoupon } from "../../actions/coupons";

function CheckACoupon() {
  const state = useSelector((state) => state.checkCouponUI);

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    onSubmit: (values) => {
      store.dispatch(handleCheckCoupon(values.code));
    },
    validationSchema: Yup.object({
      code: Yup.number().min(1111).max(9999).required("Required"),
    }),
  });

  if (state.loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div id="check-coupon">
      <form onSubmit={formik.handleSubmit}>
        <h1>Please Enter the Coupon Code</h1>
        <div className="form-control">
          <input
            onChange={formik.handleChange}
            value={formik.values.code}
            name="code"
            id="code"
            type="text"
          />
          {formik.touched.code && formik.errors.code ? (
            <div>{formik.errors.code}</div>
          ) : null}
        </div>
        <div>{state.fail && state.error && <p>{state.error}</p>}</div>
        <div>{state.sucess && <p>Code Is Valid</p>}</div>
        <button type="submit">Check Code</button>
      </form>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default CheckACoupon;
