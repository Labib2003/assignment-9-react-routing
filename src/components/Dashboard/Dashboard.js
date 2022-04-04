import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    return (
        <div>
            <h1 className='text-3xl font-semibold my-5'>Charts made from provided data using recharts</h1>
            <div className='w-full md:w-3/4 mx-auto md:flex justify-around'>
                <BarChart
                    width={350}
                    height={200}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="month" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#82ca9d" />
                </BarChart>
                <LineChart
                    width={350}
                    height={200}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;