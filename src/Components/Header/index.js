import React, { useEffect, useState } from 'react'
import LocationIcon from '../../Assets/Images/locationIcon'
import Logo from '../../Assets/Images/logo'
import MenuIcon from '../../Assets/Images/menuIcon'
import SearchIcon from '../../Assets/Images/searchIcon'

import { Dropdown } from 'react-bootstrap'

const Header = (props) => {
    const { isOpen, setIsOpen } = props;
    const [userData, setuserData] = useState()
    useEffect(() => {
        const currentUser = localStorage.getItem("userdata");
        setuserData(JSON.parse(currentUser));

    }, [])

    return (
        <div className='app-header'>
            <div className='header-logo'>
                <button className='d-lg-none menu-btn' onClick={() => { setIsOpen(!isOpen) }}>
                    <MenuIcon />
                </button>
                <div className='font-36-48 font-weight-800 app-logo'>
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
            <div className='d-md-flex d-none align-items-center gap-16px'>
                <div className='d-md-block d-none'>
                    <p className='font-18-100 font-weight-600 mb-1'>{userData?.email}</p>
                    <p className='font-14-100 font-weight-500 text-grey text-capitalize'>{userData?.name}</p>
                </div>
                <img src={userData?.image} alt='' className='w-100 h-100 user-icon-header' />
            </div>
            <Dropdown className='d-md-none d-block'>
                <Dropdown.Toggle className='user-dropdown h-100' id="dropdown-basic">
                    <img src={userData?.image} alt='' className='w-100 h-100 user-icon-header' />
                </Dropdown.Toggle>

                <Dropdown.Menu className='user-dropdown-menu'>
                    <Dropdown.Item className='border-bottom'>
                        <p className='font-18 font-weight-500 text-grey text-capitalize'>{userData?.name}</p>
                    </Dropdown.Item>
                    <Dropdown.Item className='pt-3'>
                        <p className='font-14-100 font-weight-500 text-grey'>{userData?.email}</p>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Header