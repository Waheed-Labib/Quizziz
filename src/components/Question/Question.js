import React from 'react';
import './Question.css';

import Option from '../Option/Option';

const Question = ({ serial, question }) => {
    const { options, correctAnswer } = question;


    return (
        <div className='mb-5 text-start ms-5'>
            <h1><span>{serial}. </span>{question.question}</h1>
            {
                options.map(option => <Option key={options.indexOf(option)} optionIndex={options.indexOf(option)} option={option} options={options} correctAnswer={correctAnswer}></Option>)
            }

        </div>
    );
};

export default Question;