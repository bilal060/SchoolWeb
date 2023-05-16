import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Logo from "../../Assets/Images/logo";
import ShowPassword from "../../Assets/Images/showPassword";
import RegistrationLayout from "../../Components/Registration";

const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
  });
  const [rememberCheck, setrememberCheck] = useState(false);
  const [rememberUser, setrememberUser] = useState([]);
  const [loading, setloading] = useState(true);
  const [login, setlogin] = useState([]);
  const navigate = useNavigate();
  const API_URI = `${process.env.REACT_APP_API_URI}/login`;

  console.log(process.env.REACT_APP_API_URI);

  const postLoginData = async () => {
    try {
      setloading(false);
      const fetchData = await axios.post(API_URI, loginDetails);
      setlogin(fetchData);

      localStorage.clear();
      localStorage.setItem(
        "remember-user",
        JSON.stringify(fetchData.data.userFetch)
      );
      localStorage.setItem("user-token", fetchData.data.userFetch.token);
      localStorage.setItem(
        "userdata",
        JSON.stringify(fetchData.data.userFetch)
      );

      setTimeout(() => {
        navigate("/dashboard");
      }, 500);
    } catch (error) {
      console.log(error);
      setloading(true);
      alert("Unable to login. Please try after some time.");
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    postLoginData();
  };
  console.log(login);

  const formHandler = (e) => {
    const { name, value } = e.target;
    setloginDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    setrememberUser(localStorage.getItem("remember-user"));
  }, [rememberCheck]);

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

      <RegistrationLayout>
        <div className="register-sub">
          <div className="logo font-36 font-weight-800 text-gray-900">
            <Logo />
          </div>
          <h1 className="font-40 font-weight-800 text-blue mb-3 letter-spacing">
            Admin Login.
          </h1>
          <p className="font-18 font-weight-400 mb-5 letter-spacing">
            Login to your account
          </p>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="form-control mb-4">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="form-input"
                onChange={(e) => formHandler(e)}
                value={rememberUser?.name}
              />
            </div>
            <div className="form-control mb-3">
              <label>Password</label>
              <div className="form-input pl-0 py-0 d-flex align-items-center justify-content-between">
                <input
                  name="password"
                  required
                  type={passwordShown ? "text" : "password"}
                  placeholder="Enter your password"
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
            </div>
            <div className="d-flex align-items-center mb-5">
              <input
                type="checkbox"
                id="remember"
                className="mr-2"
                onChange={() => setrememberCheck(!rememberCheck)}
              />
              <label
                htmlFor="remember"
                className="font-16 font-weight-400 letter-spacing"
              >
                Remember me
              </label>
            </div>
            <div>
              <button type="submit" className="register-btn w-100">
                Login
              </button>
            </div>
            <div className="d-flex justify-content-center align-itemms-center">
              <NavLink
                to="/forgotpassword"
                className="cr-p optional-btn text-dark letter-spacing"
              >
                Forgot Password?
              </NavLink>
            </div>
          </form>
        </div>
      </RegistrationLayout>
    </>
  );
};

export default LoginPage;
