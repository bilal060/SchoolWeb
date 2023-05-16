import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Images/logo';
import ShowPassword from '../../Assets/Images/showPassword';
import RegistrationLayout from '../../Components/Registration'

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const [passwordShown1, setPasswordShown1] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);
    const [newPassword, setnewPassword] = useState('');
    const [retypePassword, setretypePassword] = useState('');
    const [passwordCheck, setpasswordCheck] = useState(false);
    const [userData, setuserData] = useState()

    const [loading, setloading] = useState(true);

    useEffect(() => {
        const currentUser = localStorage.getItem("forgot_password_detail");
        setuserData(JSON.parse(currentUser));
    }, [])
    const resetPasswordDetails = {
        email: userData?.email,
        otp: userData?.otp,
        newPass: retypePassword
    }

    const API_URI = `${process.env.REACT_APP_API_URI}/reset`;
    const ResetPassword = async () => {
        try {
            setloading(false)
            await axios.post(API_URI, resetPasswordDetails)
            setTimeout(() => {
                navigate('/login');
            }, 500);
            localStorage.clear();
        }
        catch (error) {
            console.log(error)
            setloading(true);
            alert('Unable to reset password. Please try after some time.');
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setpasswordCheck(true)
        if (newPassword?.length < 16 && newPassword?.length >= 8 && retypePassword === newPassword) {
            ResetPassword();
        }
        else
            return
    }


    return (
        <>
            {!loading &&
                <div className='loader-main'>
                    <div className="loader"><div></div><div></div><div></div><div></div></div>
                </div>
            }
            <RegistrationLayout>
                <div className='register-sub'>
                    <div className='logo font-36 font-weight-800 text-gray-900'><Logo /></div>
                    <h1 className='font-40 font-weight-800 text-blue mb-3 letter-spacing'>Reset Password.</h1>
                    <p className='font-18 font-weight-400 mb-5 letter-spacing'>Reset your new password</p>

                    <form onSubmit={(e) => submitHandler(e)}>
                        <div className='form-control mb-4'>
                            <label>New Password</label>
                            <div className='form-input pl-0 py-0 d-flex align-items-center justify-content-between' >
                                <input
                                    value={newPassword}
                                    onChange={(e) => setnewPassword(e.target.value)}
                                    type={passwordShown1 ? "text" : "password"}
                                    placeholder='Enter your password'
                                    className='form-input w-75 font-weight-800' />
                                <span
                                    onClick={() => { setPasswordShown1(!passwordShown1) }}
                                    className='see-pswd-btn'>
                                    <ShowPassword />
                                </span>
                            </div>
                            {passwordCheck &&
                                <div>
                                    {newPassword?.length > 16 || newPassword?.length < 8 ?
                                        <div className='d-flex justify-content-start align-items-center'>
                                            <p className='text-danger'>Password must contain at least 8 to 16 characters. </p>
                                        </div>
                                        :
                                        <div className='d-flex justify-content-end align-items-center'>
                                            <p className='text-green font-weight-600'>Good</p>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                        <div className='form-control mb-5'>
                            <label>Re-Type Password</label>
                            <div className='form-input pl-0 py-0 d-flex align-items-center justify-content-between' >
                                <input
                                    value={retypePassword}
                                    onChange={(e) => setretypePassword(e.target.value)}
                                    type={passwordShown2 ? "text" : "password"}
                                    placeholder='Enter your password'
                                    className='form-input w-75 font-weight-800' />
                                <span
                                    onClick={() => { setPasswordShown2(!passwordShown2) }}
                                    className='see-pswd-btn'>
                                    <ShowPassword />
                                </span>
                            </div>
                            {passwordCheck && retypePassword !== newPassword ? <p className='text-danger'>Passwords are not same. </p> : ''}
                        </div>
                        <div>
                            <button type='submit' className='register-btn w-100'>Save</button>
                        </div>
                    </form>
                </div>
            </RegistrationLayout>
        </>
    )
}

export default ResetPasswordPage