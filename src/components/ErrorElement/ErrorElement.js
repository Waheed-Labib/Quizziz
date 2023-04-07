import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className='mt-5 d-flex flex-column align-items-center'>
            <h1 className=''>404</h1>
            <hr className='w-75'></hr>
            <p className='w-50 mt-3'>Page not Found. Go to <Link to='/home'>Home</Link></p>
        </div>
    );
};

export default ErrorElement;