import React from 'react'
import "./Chart.scss"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Chart = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 8000,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 8000,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
  return (
    <div className='chart'>
        <div className='container'>
          <span className='action'>Activites</span>
          <span className='data'>May-June 2023</span>
        </div>
         <ResponsiveContainer className="containerLine" width="100%" height="75%">
        <LineChart
        className='line'
          width={100}
          height={300}
          data={data}
          margin={{
            top:0,
            right:0,
            left:0,
            bottom:0,
          }}
        >
           <CartesianGrid strokeDasharray="3 3" /> 
          <XAxis dataKey="name" />
          <YAxis axisLine={{stroke:'transparent'}} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#f32008" activeDot={{ r: 8 }} strokeWidth={3} />
          <Line type="monotone" dataKey="uv" stroke="#0ce760"  strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
