import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell,
} from 'recharts';
import { isEmptyOrNil } from 'core/helpers/util';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SERIALIZE_KEYS = {
  stocks: 'stock',
  currency: 'currency',
  inflation: 'country',
  commodities: 'commoditie',
  'interest-rate': 'country',
  'sales-tax-rate': 'country',
  'corruption-rank': 'country',
  'corporate-tax-rate': 'country',
  'government-debt-to-GDP': 'country',
  'personal-income-tax-rate': 'country',
};

const data02 = [
  { pupa: 'A1', value: 100 },
  { pupa: 'A2', value: 300 },
  { pupa: 'B1', value: 100 },
  { pupa: 'B2', value: 80 },
  { pupa: 'B3', value: 40 },
  { pupa: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];

const data01 = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

export const Charts = (props) => {
  const {
    economicData: { data, indicator },
  } = props;

  const serializeKey = SERIALIZE_KEYS[indicator];
  const testData = data && data.map(obj => ({ name: obj[serializeKey], value: Number(obj.value) }));
  console.log(testData, 'testData');

  console.log(props, 'props');

  return isEmptyOrNil(data)
    ? null
    : (
      <NoSsr>
        {/* <LineChart width={1600} height={1200} data={data.slice(0, 100)} margin={{ top: 30 }}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <XAxis dataKey={currentKey} />
          <YAxis />
        </LineChart> */}

        <PieChart width={730} height={400}>
          <Pie
            data={testData}
            dataKey="value"
            nameKey="name"
            // cx={200}
            // cy={200}
            outerRadius={120}
            fill="#8884d8"
            isAnimationActive={false}
            label
          >
            {
              testData.map((item, index) => <Cell key={item} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          {/* <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label /> */}
          <Tooltip />
          <Legend margin={{ top: 50 }} />
        </PieChart>
      </NoSsr>
    );
};
