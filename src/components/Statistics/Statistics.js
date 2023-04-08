import axios from 'axios';
import React, { useState, PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='w-50 p-5 d-flex justify-content-center align-items-center'>
                        <BarChart width={400} height={250} data={topics}>
                            <Bar dataKey="total" fill="#8884d8" />
                            <XAxis dataKey="name"></XAxis>
                            <YAxis></YAxis>
                            <Tooltip></Tooltip>
                        </BarChart>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Statistics;