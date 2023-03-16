import React, { useState } from 'react'
import { Navigate, NavLink } from 'react-router-dom';
import ShowPassword from '../../Assets/Images/showPassword';
import RegistrationLayout from '../../Components/Registration'

const LoginPage = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [isloggedin, setisloggedin] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setisloggedin(true);

    }
    return (
        <>
            <RegistrationLayout>
                {isloggedin &&
                    <Navigate to="/dashboard" replace={true} />
                }
                <div className='register-sub'>
                    <div className='logo font-36 font-weight-800 text-gray-900'>Logo</div>
                    <h1 className='font-40 font-weight-800 text-blue mb-3 letter-spacing'>Admin Login.</h1>
                    <p className='font-18 font-weight-400 mb-5 letter-spacing'>Login to your account</p>

                    <form onSubmit={(e) => { submitHandler(e) }}>
                        <div className='form-control mb-4'>
                            <label>Email</label>
                            <input type='email' required placeholder='Enter your email' className='form-input' />
                        </div>
                        <div className='form-control mb-3'>
                            <label>Password</label>
                            <div className='form-input pl-0 py-0 d-flex align-items-center justify-content-between' >
                                <input required type={passwordShown ? "text" : "password"} placeholder='Enter your password' className='form-input w-75 font-weight-800' />
                                <span
                                    onClick={() => { setPasswordShown(!passwordShown) }}
                                    className='see-pswd-btn cr-p'>
                                    <ShowPassword />
                                </span>
                            </div>


                        </div>
                        <div className='d-flex align-items-center mb-5'>
                            <input type='checkbox' id='remember' className='mr-2' />
                            <label htmlFor='remember' className='font-16 font-weight-400 letter-spacing'>
                                Remember me
                            </label>
                        </div>
                        <div>
                            <button type='submit' className='register-btn w-100'>Login</button>
                        </div>
                        <div className='d-flex justify-content-center align-itemms-center'>
                            <NavLink to='/forgotpassword' className='cr-p optional-btn text-dark letter-spacing'>
                                Forgot Password?
                            </NavLink>
                        </div>
                    </form>
                </div>
            </RegistrationLayout>
        </>
    )
}

export default LoginPage