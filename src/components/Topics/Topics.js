import React from 'react';
import './Topics.css'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData().data;

    return (
        <div className='mt-5 bg-warning'>
            <div className='topics'>
                <h1 className='text-center'>Topics</h1>
                <hr></hr>
                <div className='topic-list'>
                    {
                        topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                    }
                </div>

            </div>
        </div>

    );
};

export default Topics;