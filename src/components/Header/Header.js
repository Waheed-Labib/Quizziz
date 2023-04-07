import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {

    return (

        <div className='header bg-white d-flex justify-content-between align-items-center'>

            <a className='site-name' href={'/'}>Quizziz</a>
            <nav>
                <NavLink to={'/home'} className={`nav-option me-3 ${(isActive) => isActive ? 'active' : ''} d-none d-sm-inline`}>Home</NavLink>
                <NavLink to={'/topics'} className={'nav-option me-3'}>Topics</NavLink>
                <NavLink to={'/statistics'} className={'nav-option me-3'}>Statistics</NavLink>
                <NavLink to={'/blogs'} className={'nav-option me-3'}>Blogs</NavLink>
            </nav>

        </div>




    );
};

export default Header;