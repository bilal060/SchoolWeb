import React, { useEffect, useState } from 'react'
import RegistrationLayout from '../../Components/Registration'
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Images/logo';
import axios from 'axios';

const ChangePasswordOtpPage = () => {
    const navigate = useNavigate();
    const [otp, setotp] = useState();
    const [userData, setuserData] = useState()
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const currentUser = localStorage.getItem("forgot_password");
        setuserData(JSON.parse(currentUser));
    }, [])
    const otpDetails = {
        email: userData?.email,
        otp: otp
    }
    const handleChange = (otp) => {
        setotp(otp)
    };
    console.log(otp)

    const API_URI = `${process.env.REACT_APP_API_URI}/otpverify`;
    const verifyOtp = async () => {
        try {
            setloading(false)
            const fetchData = await axios.post(API_URI, otpDetails)
            localStorage.setItem("forgot_password_detail", JSON.stringify(otpDetails));
            console.log(fetchData)
            setTimeout(() => {
                navigate('/resetpassword');
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
        if (otp.length === 4) {
            verifyOtp();
        }

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
                    <h1 className='font-40 font-weight-800 text-blue mb-3 letter-spacing'>Enter Code.</h1>
                    <p className='font-18 font-weight-400 mb-5 letter-spacing'>Please enter code sent your email<br />
                        code will expire in <span className='text-blue font-weight-700'>29s</span></p>

                    <form onSubmit={(e) => { submitHandler(e) }}>
                        <OtpInput
                            value={otp}
                            onChange={(otp) => { handleChange(otp) }}
                            numInputs={4}
                            containerStyle="justify-content-between align-itemms-center gap-18px"
                            inputStyle=" otp-input"
                            shouldAutoFocus={true}
                        />

                        <div className='mt-5'>
                            <button type='submit' className='register-btn w-100'>Confirm</button>
                        </div>
                        <p className='font-16 font-weight-400 text-center mt-32px'>Did’t get the code?</p>
                        <div className='d-flex justify-content-center align-itemms-center'>
                            <button to='/forgotpassword' className='cr-p optional-btn text-blue'>
                                Resend Code
                            </button>
                        </div>
                    </form>
                </div>
            </RegistrationLayout>
        </>
    )
}

export default ChangePasswordOtpPage