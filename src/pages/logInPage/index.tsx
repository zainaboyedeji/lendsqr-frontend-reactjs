import React from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CompanyLogo from "../../components/logo";
import Hero from "../../images/pablo-sign-in.svg";
import { InputField } from "../../components/input/input.tsx";
import { Link } from "react-router-dom";
import "./index.scss";
import AppButton from "../../components/appbutton/appbutton";

const LogInPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Button clicked!");
    navigate("/dashboard");
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().typeError("Phone must be a number").required(),
        password: Yup.string().typeError("Phone must be a number").required(),
      })}
      onSubmit={handleClick}
    >
      {({ values, errors }) => (
        <div className="flex w-full h-full logIn">
          <div className="w-6/12 bg-slate-50 px-28 py-32 heroSide">
            <CompanyLogo className=""/>
            <img src={Hero} alt="Hero" className="mt-36 manHero" />
          </div>
          <Form className="w-6/12 px-36 py-28">
          <CompanyLogo className="mobileLogo"/>
            <div className="logInForm mt-36">
              
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
              <div className="logInInput mt-6">
                <InputField
                  type="email"
                  name="email"
                  placeholder={`Email`}
                  className="rounded-md"
                />
                <br />
                <InputField
                  type="password"
                  name="password"
                  placeholder={`Password`}
                  className="rounded-md"
                />
              </div>
              <div className="mt-3.5 bottomDiv">
                <Link to="/">FORGOT PASSWORD?</Link>
                <br />
                <AppButton
                  onClick={handleClick}
                  text="LOG IN"
                  className="appButton mt-6"
                />
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default LogInPage;
