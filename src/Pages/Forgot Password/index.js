import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Images/logo';
import RegistrationLayout from '../../Components/Registration'

const ForgotPasswordPage = () => {
  const [email, setemail] = useState(
    {
      email: '',
    }
  ); const navigate = useNavigate();
  const [loading, setloading] = useState(true);

  console.log(email)
  const API_URI = 'http://localhost:4000/resetPassWithOTP';
  const resetPassword = async () => {
    try {
      setloading(false)
      const fetchData = await axios.post(API_URI, email)
      console.log(fetchData)
      localStorage.clear();
      localStorage.setItem("forgot_password", JSON.stringify(email));
      setTimeout(() => {
        navigate('/changepasswordotp');
      }, 500);

    }
    catch (error) {
      console.log(error)
      setloading(true);
      alert('Unable to login. Please try after some time.');
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();
    resetPassword();

  }
  return (
    <>
      <RegistrationLayout>
        {!loading &&
          <div className='loader-main'>
            <div className="loader"><div></div><div></div><div></div><div></div></div>
          </div>
        }
        <div className='register-sub'>
          <div className='logo font-36 font-weight-800 text-gray-900'><Logo /></div>
          <h1 className='font-40 font-weight-800 text-blue mb-3 letter-spacing'>Forgot Password?</h1>
          <p className='font-18 font-weight-400 mb-5 letter-spacing'>Reset your password</p>

          <form onSubmit={(e) => { submitHandler(e) }}>
            <div className='form-control mb-5'>
              <label>Email</label>
              <input type='email' required placeholder='Enter your email' className='form-input' onChange={(e) => setemail({ email: e.target.value })} />
            </div>
            <div>
              <button type='submit' className='register-btn w-100'>Recover</button>
            </div>
          </form>
        </div>
      </RegistrationLayout>
    </>
  )
}

export default ForgotPasswordPage