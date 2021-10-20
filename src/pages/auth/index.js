import LoginForm from "../../components/forms/LoginForm";
import SignupForm from "../../components/forms/SignupForm";
import AuthLayout from "../../layouts/auth/AuthLayout";
import { useState } from "react";

const AuthPage = () => {
  const [form, setForm] = useState("login");

  const handleFormChange = (_form) => {
    setForm(_form);
  };
  return (
    <AuthLayout>
      {form === "login" ? (
        <LoginForm handleFormChange={handleFormChange} />
      ) : (
        <SignupForm handleFormChange={handleFormChange} />
      )}
    </AuthLayout>
  );
};

export default AuthPage;
