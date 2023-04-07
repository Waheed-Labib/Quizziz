import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GoToHome = () => {
    return (
        <div>
            {
                <p className='d-sm-none mt-5 p-3'> Go To <Link to="/">Home</Link></p>
            }
        </div>
    )
}

export default GoToHome;