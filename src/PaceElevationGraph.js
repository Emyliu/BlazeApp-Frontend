import React from 'react';
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';
import { DistanceSelector } from './distanceSelector';


export class PaceElevationGraph extends React.Component {
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
      let distance = this.props.data.splits[this.state.selection].distance
      let formattedData = this.props.data.splits[this.state.selection].splits.map(function(obj, index) {
        return {
            elevationChange: obj.elevationChange,
            time: (obj.time * (1000 / distance)) / 60
        }
      })
    return (
      <div className="paceGraph">
        <h3>Time/Elevation graph for {distance / 1000}km splits</h3>

        <ScatterChart
        width={800}
        height={300}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="time" name="time" unit="min/km" domain={['auto', 'auto']}/>
        <YAxis type="number" dataKey="elevationChange" name="elevation" unit="m" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={formattedData} fill="#8884d8" />
      </ScatterChart>
      <DistanceSelector onClick={this.setDistance}></DistanceSelector>
      </div>
    )
  }
}