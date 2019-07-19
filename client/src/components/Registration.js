import React from "react";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const Registration = ({ touched, errors }) => {
  return (
    <div>
      <h1>Registration</h1>
      <Form>
        <label>Email</label>
        <Field type="text" name="email" />
        <p>{touched.email && errors.email}</p>
        <label>Password</label>
        <Field type="text" name="password" />
        <p>{touched.password && errors.password}</p>
        <button>Register</button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(4)
      .required()
  })
})(Registration);
