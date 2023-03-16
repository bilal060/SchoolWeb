import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../../Pages/Login'
import ForgotPasswordPage from '../../Pages/Forgot Password'
import OtpPage from '../../Pages/Otp Page'
import ResetPasswordPage from '../../Pages/ResetPassword'

const RegistrationRoutes = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
                <Route path="/otp" element={<OtpPage />} />
                <Route path="/resetpassword" element={<ResetPasswordPage />} />


            </Routes>
        </>
    )
}

export default RegistrationRoutes