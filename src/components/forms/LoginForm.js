import { Formik } from "formik";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/actions/auth";
import { SimpleSpinner } from "../loaders";
import "./styles.scss";

const LoginForm = ({ handleFormChange }) => {
  const isLoading = useSelector((state) => state.loginReducer.isLoading);
  const dispatch = useDispatch();
  return (
    <div className="form-container">
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Username is required";
          } else if (!values.password) {
            errors.password = "Password is required";
          } else if (values.password.length < 8) {
            errors.password = "Must be atleast 8 characters";
          }
          return errors;
        }}
        onSubmit={(values) => {
          dispatch(loginRequest(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form
            onSubmit={handleSubmit}
            className="auth-form"
            autoComplete={false}
          >
            <h1 className="txt-violet text-center">SignIn</h1>
            <Row className="form-row">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                className="form-input bd-radius-5"
                placeholder="John96"
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
                placeholder="********"
              />
              <span className="error-text">
                {errors.password && touched.password && errors.password}
              </span>
            </Row>

            <Row className="form-footer">
              <Col>
                <button
                  className="bg-violet txt-white form-btn bd-radius-5"
                  type="button"
                  onClick={() => handleFormChange("signup")}
                >
                  SIGNUP
                </button>
              </Col>
              <Col>
                <button
                  className="bg-violet txt-white form-btn bd-radius-5 txt-fontweight-700"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading && <SimpleSpinner color="white" size={24} />} LOGIN
                </button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
