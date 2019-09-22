import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { DistanceSelector } from './distanceSelector';


export class ElevationGraph extends React.Component {
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
      let ele = 0;
      let distance = this.props.data.splits[this.state.selection].distance
      let formattedData = this.props.data.splits[this.state.selection].splits.map(function(obj, index) {
          ele += obj.elevationChange;
        return {
            name: ((index + 1) * distance) / 1000,
            value: ele
        }
      })
    return (
      <div className="splitVarGraph">
        <h3>Elevation Chart for {distance / 1000}km splits</h3>
        <LineChart
        width={800}
        height={300}
        data={formattedData}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" unit="km" />
        <YAxis unit="m" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>

      <DistanceSelector onClick={this.setDistance}></DistanceSelector>

      </div>
    )
  }
}