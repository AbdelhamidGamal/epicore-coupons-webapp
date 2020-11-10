import "./styles.scss";
import React from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { store } from "../../index";
import { handleCreateCoupon } from "../../actions/coupons";

import { useFormik } from "formik";

import { createCouponSchema as validationSchema } from "./validation";

function CreateCoupon() {
  const state = useSelector((state) => state.couponUI);

  const formik = useFormik({
    initialValues: {
      name: "",
      code: "",
      amount: "",
    },
    onSubmit: (values) => {
      store.dispatch(handleCreateCoupon(values));
    },
    validationSchema,
  });

  if (state.loading) {
    return <h1>Sending request</h1>;
  }

  return (
    <div id="create-coupon">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            id="name"
            type="text"
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label>Code</label>
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
        <div className="form-control">
          <label>Amount</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.amount}
            name="amount"
            id="amount"
            type="text"
          />
          {formik.touched.amount && formik.errors.amount ? (
            <div>{formik.errors.amount}</div>
          ) : null}
        </div>
        <div>{state.fail && state.error && <p>{state.error}</p>}</div>
        <div>{state.sucess && <p>Code Added Successfully</p>}</div>
        <button type="submit">Submit</button>
      </form>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default CreateCoupon;
