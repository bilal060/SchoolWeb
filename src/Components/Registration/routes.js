import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../../Pages/Login'
import ForgotPasswordPage from '../../Pages/Forgot Password'
import OtpPage from '../../Pages/Otp Page'
import ResetPasswordPage from '../../Pages/ResetPassword'
import RegisterPage from '../../Pages/Register'
import ChangePasswordOtpPage from '../../Pages/Otp Page/changePasswordOtp'

const RegistrationRoutes = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
                <Route path="/verifyuser" element={<OtpPage />} />
                <Route path="/changepasswordotp" element={<ChangePasswordOtpPage />} />
                <Route path="/resetpassword" element={<ResetPasswordPage />} />
                <Route path="/register" element={<RegisterPage />} />




            </Routes>
        </>
    )
}

export default RegistrationRoutes