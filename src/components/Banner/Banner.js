import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner d-flex justify-content-center align-items-center'>
            <img className='w-50' src='https://th.bing.com/th/id/R.26d3ab822783d8ad47a3fd8b8d99da50?rik=%2b%2bhJTbYEnFYNoQ&pid=ImgRaw&r=0' alt='banner-pic'></img>

            <div className='banner-text m-5'>
                <p>Unlimited Quiz</p>
                <p>Best Mentors</p>
                <p>Contestants from all over the World</p>
                <p>Interview Preparations</p>
            </div>
        </div>


    );
};

export default Banner;