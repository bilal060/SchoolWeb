import React, { useState } from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';

const AppLayout = (props) => {
    const { children } = props;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='app-layout'>
            <Header setIsOpen={setIsOpen} isOpen={isOpen} />
            <div className='sidebar-content'>
                <Sidebar isOpen={isOpen} />
                <div className='content-div' onClick={() => setIsOpen(false)}>
                    <div>
                        {children}
                    </div>
                    <div className='d-flex justify-content-center align-items-center text-center font-14 font-weight-400 mt-32px'>
                        © Copyright 2023 Company Name. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppLayout