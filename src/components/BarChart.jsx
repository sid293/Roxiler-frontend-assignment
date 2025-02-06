import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

export default function BarChartComponent({ selectedMonth, data }) {
    
  return (
    <div style={{ height: '100vh', width: '100%', overflow: 'scroll' }}>
      <h1>Bar Chart Stats - {selectedMonth}</h1>
      <BarChart width={900} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="range" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#00bcd4" />
      </BarChart>
    </div>
  );
}



