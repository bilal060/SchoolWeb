import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Images/logo";
import ShowPassword from "../../Assets/Images/showPassword";
import RegistrationLayout from "../../Components/Registration";

const SignupPage = () => {
  const [loading, setloading] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [passwordCheck, setpasswordCheck] = useState(false);
  const [signinDetails, setSigninDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const API_URI = `${process.env.REACT_APP_API_URI}/signup`;
  const postSigninData = async () => {
    try {
      setloading(false);
      const fetchData = await axios.post(API_URI, signinDetails);
      console.log(fetchData);

      localStorage.clear();
      localStorage.setItem("userdata", JSON.stringify(fetchData?.data.users));
      setTimeout(() => {
        navigate("/verifyuser");
      }, 500);
    } catch (error) {
      console.log(error);
      localStorage.clear();
      setloading(true);
      alert("Unable to Sign in. Please try after some time.");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setpasswordCheck(true);
    if (
      signinDetails.password?.length < 16 &&
      signinDetails.password?.length >= 8
    ) {
      postSigninData();
      console.log("sds");
    } else console.log("sdaassas");

    return;
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setSigninDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      {!loading && (
        <div className="loader-main">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div className="">
        <RegistrationLayout>
          <div className="register-sub">
            <div className="logo font-36 font-weight-800 text-gray-900">
              <Logo />
            </div>
            <h1 className="font-40 font-weight-800 text-blue mb-3 letter-spacing">
              Register Yourself.
            </h1>
            <p className="font-18 font-weight-400 mb-5 letter-spacing">
              Create your new account
            </p>

            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="form-control mb-4">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter name"
                  className="form-input"
                  onChange={(e) => formHandler(e)}
                />
              </div>
              <div className="form-control mb-4">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter email"
                  className="form-input"
                  onChange={(e) => formHandler(e)}
                />
              </div>
              <div className="form-control mb-32px">
                <label>Password</label>
                <div className="form-input pl-0 py-0 d-flex align-items-center justify-content-between">
                  <input
                    name="password"
                    required
                    // minLength={8}
                    // maxLength={16}
                    type={passwordShown ? "text" : "password"}
                    placeholder="Enter password"
                    className="form-input w-75 font-weight-800"
                    onChange={(e) => formHandler(e)}
                  />
                  <span
                    onClick={() => {
                      setPasswordShown(!passwordShown);
                    }}
                    className="see-pswd-btn cr-p"
                  >
                    <ShowPassword />
                  </span>
                </div>
                {passwordCheck && (
                  <div>
                    {signinDetails.password?.length > 16 ||
                    signinDetails.password?.length < 8 ? (
                      <div className="d-flex justify-content-start align-items-center">
                        <p className="text-danger">
                          Password must contain at least 8 to 16 characters.{" "}
                        </p>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-end align-items-center">
                        <p className="text-green font-weight-600">Good</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="d-flex align-items-start mb-5 gap-8px">
                <input
                  type="checkbox"
                  id="remember"
                  className="mt-5px"
                  onChange={() => setTermsCheck(!termsCheck)}
                />
                <label
                  htmlFor="remember"
                  className="font-16 font-weight-700 letter-spacing"
                >
                  By signing up, you’re agree to our,{" "}
                  <span className="text-blue"> Terms & Condition </span>
                  and <span className="text-blue"> Privacy Policy</span>
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="register-btn w-100"
                  disabled={termsCheck ? false : true}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </RegistrationLayout>
      </div>
    </>
  );
};

export default SignupPage;
