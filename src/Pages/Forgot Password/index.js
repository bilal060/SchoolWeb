import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import RegistrationLayout from '../../Components/Registration'

const ForgotPasswordPage = () => {
  const [isloggedin, setisloggedin] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setisloggedin(true);

  }
  return (
    <>
      <RegistrationLayout>
        {isloggedin &&
          <Navigate to="/otp" replace={true} />
        }
        <div className='register-sub'>
          <div className='logo font-36 font-weight-800 text-gray-900'>Logo</div>
          <h1 className='font-40 font-weight-800 text-blue mb-3 letter-spacing'>Forgot Password?</h1>
          <p className='font-18 font-weight-400 mb-5 letter-spacing'>Reset your password</p>

          <form onSubmit={(e) => { submitHandler(e) }}>
            <div className='form-control mb-5'>
              <label>Email</label>
              <input type='email' required placeholder='Enter your email' className='form-input' />
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