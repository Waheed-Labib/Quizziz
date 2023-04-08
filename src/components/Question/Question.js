import React, { useState } from 'react';
import './Question.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import Option from '../Option/Option';

const Question = ({ serial, question }) => {
    const { options, correctAnswer } = question;
    const [showCorrectAns, setShowCorrectAns] = useState(false);

    const handleEyeClick = () => {
        setShowCorrectAns(!showCorrectAns);
    }

    return (
        <div className='m-5 text-start'>
            <div className='d-flex justify-content-between mb-2 w-75'>
                <h1 className=''><span>{serial}. </span>{question.question}</h1>
                <FontAwesomeIcon onClick={handleEyeClick} className='eye-icon fs-3 mt-3' icon={faEye}></FontAwesomeIcon>
            </div>

            {
                showCorrectAns && <div className='mb-3 w-75'>
                    <h6 className='fw-bold'>Correct Answer : <span className='text-primary'>{correctAnswer}</span></h6>
                </div>
            }

            {
                options.map(option => <Option key={options.indexOf(option)} optionIndex={options.indexOf(option)} option={option} options={options} correctAnswer={correctAnswer}></Option>)
            }

        </div >


    );
};

export default Question;