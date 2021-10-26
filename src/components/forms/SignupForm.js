import { Formik } from "formik";
import { Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import "./styles.scss";

const SignupForm = ({ handleFormChange }) => {
  const history = useHistory();

  return (
    <div className="form-container">
      <Formik
        initialValues={{ username: "", password: "", terms: false }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Username is required";
          } else if (values.username.length < 6) {
            errors.username = "Must be between 6 and 10 characters";
          } else if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 8) {
            errors.password = "Must be atleast 8 characters";
          } else if (!values.terms) {
            errors.terms =
              "You need to agree to terms and conditions to continue";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="auth-form">
            <h1 className="txt-violet text-center">Create Account</h1>

            <Row className="form-row">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                className="form-input bd-radius-5"
              />
              <span className="error-text">{errors.username}</span>
            </Row>
            <Row className="form-row">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="form-input bd-radius-5"
              />
              <span className="error-text">
                {errors.password && touched.password && errors.password}
              </span>
            </Row>
            <Row className="form-row">
              <Col lg={1}>
                <input
                  type="checkbox"
                  name="terms"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.terms}
                />
              </Col>
              <Col>
                <span>
                  Agree to{" "}
                  <span className="txt-violet txt-fontweight-700 cursor-pointer">
                    Terms
                  </span>{" "}
                  and{" "}
                  <span className="txt-violet cursor-pointer"> Conditions</span>
                </span>
              </Col>

              <span className="error-text">{errors.terms}</span>
            </Row>

            <Row className="form-footer">
              <Col>
                <button
                  className="bg-violet txt-white form-btn bd-radius-5"
                  type="button"
                  onClick={() => handleFormChange("login")}
                >
                  LOGIN
                </button>
              </Col>
              <Col>
                <button
                  className="bg-violet txt-white form-btn bd-radius-5 txt-fontweight-700"
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => history.push("/play")}
                >
                  SIGNUP
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
