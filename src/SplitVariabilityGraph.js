import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { DistanceSelector } from './distanceSelector';


export class SplitVariabilityGraph extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          selection: 2
      }
      this.setDistance = this.setDistance.bind(this);
  }

  setDistance(n) {
    this.setState({selection: n});
}
 
  render() {
      let avg = 0;
      for (let obj of this.props.data.splits[this.state.selection].splits) {
          avg += obj.time;
      }
      avg = avg / this.props.data.splits[this.state.selection].splits.length;
      let distance = this.props.data.splits[this.state.selection].distance;
      let formattedData = this.props.data.splits[this.state.selection].splits.map(function(obj, index) {
        return {
            name: ((index + 1) * distance) / 1000,
            value: obj.time - avg
        }
      })
    return (
      <div className="splitVarGraph">
        <h3>Split Variability Chart</h3>
        <LineChart
        width={500}
        height={300}
        data={formattedData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>

      <DistanceSelector onClick={this.setDistance}></DistanceSelector>

      </div>
    )
  }
}