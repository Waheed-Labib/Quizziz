import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center'>

            <h1>Quizziz</h1>
            <nav>
                <NavLink to={'/topics'} className={'me-3'}>Topics</NavLink>
                <NavLink to={'/statistics'} className={'me-3'}>Statistics</NavLink>
                <NavLink to={'/blogs'} className={'me-3'}>Blogs</NavLink>
            </nav>

        </div>
    );
};

export default Header;