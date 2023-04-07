import React from 'react';
import './Topic.css'
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;

    return (
        <div className='topic'>
            <img src={logo} alt={name} className=''></img>
            <h3>{name}</h3>
            <p className='mb-2'>{total} questions</p>
            <Link to={`/quiz/${id}`}>
                <button className='btn btn-success text-white'>Get Started</button>
            </Link>

        </div>
    );
};


export default Topic