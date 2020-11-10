import * as Yup from "yup";

const name = Yup.string().required("Required");

const code = Yup.number().min(1111).max(9999).required("Required");

const amount = Yup.number().required("Required");

export const createCouponSchema = Yup.object({
  name,
  code,
  amount,
});
