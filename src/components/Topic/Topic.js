import React from 'react';
import './Topic.css'

const Topic = ({ topic }) => {
    const { logo, name, total } = topic;

    return (
        <div className='topic'>
            <img src={logo} alt={name} className=''></img>
            <h3>{name}</h3>
            <p>{total} questions</p>
            <button className='btn btn-success text-white'>Get Started</button>
        </div>
    );
};


export default Topic