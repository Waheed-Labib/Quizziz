import axios from 'axios';
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import './Statistics.css'

const Statistics = () => {

    const [topics, setTopics] = useState([]);

    axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            const topicsData = data.data.data;
            const finalTopics = topicsData.map(topic => {
                const singleTopic = {
                    name: topic.name,
                    total: topic.total
                }
                return singleTopic
            })
            setTopics(finalTopics);
        })

    return (
        <div className='mt-5 p-5 bg-warning'>
            <div className=''>
                <h1 className='text-center'>Statistics</h1>
                <hr></hr>
                <div className='d-flex justify-content-around align-items-center stat'>
                    <div className=''>
                        <BarChart width={330} height={330} data={topics}>
                            <Bar dataKey="total" fill="#8884d8" />
                            <XAxis dataKey="name"></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                        </BarChart>
                    </div>
                    <div className='vl'></div>
                    <h5 className='graph-caption text-center'>This graph shows the number of questions on each topic</h5>
                </div>




            </div>
        </div>
    );
};

export default Statistics;