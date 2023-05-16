import React from 'react'
import '../Components.css'
import Registration2 from '../../Assets/Images/registration2.svg'
const RegistrationLayout = (props) => {
    const { children } = props;
    return (
        <div className='d-flex'>
            <div className='registration-first'>
                {children}
                <div className='text-center'>
                    © Copyright 2023 Company Name. All rights reserved.
                </div>
            </div>
            <div className='registration-second'>
                <div className='registration-second-content d-lg-block d-none'>
                    <h1 className='font-36-48 font-weight-700 mb-4'>
                        Lorem ipsum dolor consectetur. Velit maecenas congue lectus platea.
                    </h1>
                    <p className='font-18 font-weight-400'>Lorem ipsum dolor sit amet consectetur. Velit maecenas congue lectus platea.
                        Laoreet at eu massa blandit convallis enim blandit. Ipsum nunc vulputate pellentesque neque eu tincidunt nibh.
                        Tellus cursus risus donec praesent.
                    </p>
                </div>
                <div className='h-100'>
                    <img src={Registration2} alt='Overview' className='w-100' />
                </div>
            </div>

        </div>
    )
}

export default RegistrationLayout