import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SideBarRoutes from './sidebarRoutes';
import './sidebar.css'
import Logout from '../../Assets/Images/logout';

const Sidebar = (props) => {
    const { isOpen } = props;
    const sidebar = SideBarRoutes()
    const Location = useLocation();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <>
            {
                isOpen && <div className="sidebar d-lg-none d-flex">
                    <div className="w-100 side-links">
                        {
                            sidebar.map((item, index) => {
                                if (item.visiblity === true) {
                                    return <Link key={index} to={`${item.link.toLowerCase()}`} className={`w-100  ${item.link.toLowerCase() === Location.pathname ? 'sidebar-item-active' : ''} sidebar-item`}>
                                        {item.icon} <span > {item.name} </span>
                                    </Link>;
                                }
                            })
                        }
                    </div>
                    <div className="sidebar-bottom w-100">
                        <Link to='/login'>
                            <Logout />
                            <span className='text-blue font-weight-600'>Log Out</span>
                        </Link>
                    </div>
                </div>
            }

            <div className="sidebar d-lg-flex d-none">
                <div className="w-100 side-links">
                    {
                        sidebar.map((item, index) => {
                            if (item.visiblity === true) {
                                return <Link key={index} to={`${item.link.toLowerCase()}`} className={`w-100  ${item.link.toLowerCase() === Location.pathname ? 'sidebar-item-active' : ''} sidebar-item`}>
                                    {item.icon} <span > {item.name} </span>
                                </Link>;
                            }
                        })
                    }
                </div>
                <div className="sidebar-bottom w-100">
                    <div onClick={() => logout()} className='logout cr-p'>
                        <Logout />
                        <span className='text-blue font-weight-600'>Log Out</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar