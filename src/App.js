import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.css';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Field required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Username should be an email';
    }

    if (!values.password) {
      errors.password = 'Field required';
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    alert('Login Successful');
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="emailField">Email</label>
            <Field type="email" name="email" id="emailField" />
            <ErrorMessage name="email">
              {(msg) => <div id="emailError">{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <label htmlFor="pswField">Password</label>
            <Field type="password" name="password" id="pswField" />
            <ErrorMessage name="password">
              {(msg) => <div id="pswError">{msg}</div>}
            </ErrorMessage>
          </div>
          <div>
            <button type="submit" id="submitBtn" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Login Form</h1>
      <LoginForm />
    </div>
  );
}

export default App;
