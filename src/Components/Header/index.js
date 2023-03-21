import React, { useEffect, useState } from 'react'
import LocationIcon from '../../Assets/Images/locationIcon'
import Logo from '../../Assets/Images/logo'
import MenuIcon from '../../Assets/Images/menuIcon'
import SearchIcon from '../../Assets/Images/searchIcon'
import UserIcon from '../../Assets/Images/userIcon'

const Header = (props) => {
    const { isOpen, setIsOpen } = props;
    const [userData, setuserData] = useState()
    useEffect(() => {
        
        const currentUser = localStorage.getItem("userdata");
        setuserData(JSON.parse(currentUser));

    }, [])

    console.log(userData);


    return (
        <div className='app-header'>
            <div className='header-logo'>
                <button className='d-lg-none menu-btn' onClick={() => { setIsOpen(!isOpen) }}>
                    <MenuIcon />
                </button>
                <div className='font-36-48 font-weight-800 d-sm-block d-none app-logo'>
                    <Logo />
                </div>
            </div>
            <div className='d-flex gap-16px align-items-center'>
                <div className='search-input d-sm-flex d-none'>
                    <SearchIcon />
                    <input placeholder='Search' />
                </div>
                <div className='d-lg-flex d-none align-items-center '>
                    <LocationIcon />
                    <div className='pl-2'>
                        <p className='font-14-100 font-weight-500 text-grey mb-1'>Location:</p>
                        <p className='font-18-100 font-weight-600'>East Aurora High school</p>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center gap-16px'>

                <div>
                    <p className='font-18-100 font-weight-600 mb-1'>{userData?.email}</p>
                    <p className='font-14-100 font-weight-500 text-grey'>{userData?.name}</p>

                </div>
                <UserIcon />
            </div>
        </div>
    )
}

export default Header