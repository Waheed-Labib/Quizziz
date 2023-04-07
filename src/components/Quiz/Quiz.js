import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'

const Quiz = () => {

    const quiz = useLoaderData().data;
    const { name, questions, total } = quiz;

    return (
        <div className='mt-5'>
            <h2>Quiz Topic : <span className='topic-name py-1 px-2 rounded'>{name}</span></h2>
            <h6 className='mt-4'>No. of Questions : <span className=''>{total}</span></h6>
            <div className='mt-5'>
                {
                    questions.map(question => <Question key={question.id} serial={questions.indexOf(question) + 1} question={question}></Question>)
                }
            </div>

        </div>
    );
};

export default Quiz;