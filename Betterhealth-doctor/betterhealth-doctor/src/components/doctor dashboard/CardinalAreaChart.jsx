import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { curveCardinal } from 'd3-shape';

// Set static values for each month
const data = [
  { month: 'Jan', value: 28 },
  { month: 'Feb', value: 39 },
  { month: 'Mar', value: 23 },
  { month: 'Apr', value: 36 },
  { month: 'May', value: 45 },
  { month: 'Jun', value: 32 },
  { month: 'Jul', value: 43 },
];

const cardinal = curveCardinal.tension(0.2);
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
          <p style={{ margin: 0 }}>{`Growth: ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };
   

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="0 3" vertical={false} />
          <XAxis dataKey="month" interval={0} /> {/* Set interval to 0 to show all labels */}
          <YAxis ticks={[18, 24, 30, 36, 42, 48,]} domain={[0, 50]}
            padding={{ top: 10 }}  axisLine={false} tickLine={false}/>
        <Tooltip content={<CustomTooltip />} />
        <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
          <Area
            type={cardinal}
            dataKey="value"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
