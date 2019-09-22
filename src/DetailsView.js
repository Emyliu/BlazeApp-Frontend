import React from 'react';
import { SimpleMap } from './Map';
import MaterialTable from 'material-table'
import './DetailsView.css';


export class DetailsView extends React.Component {
  render() {
    console.log(this.props.data);
    return (
    <div class="details-view">
    <h2>{this.props.data.name}: {this.props.data.startTime}</h2>
        <SimpleMap data={this.props.data}/>
        <h3>Total Time: {this.props.data.totalTime}</h3>
        <h3>Distance: {(this.props.data.totalDistance / 1000).toFixed(2)} km</h3>
        <h3>Pace: {this.props.data.pace} min/km</h3>
      <MaterialTable
      columns={[
        {title: "Distance (m)", field: 'splitDistance'},
        {title: "Best Time", field:'minSplitDistanceTime'},
        {title: "Best Time Starting At", field:'minSplitDistanceTimeOccuredAt'},
        {title: "Worst Time", field:'maxSplitDistanceTime'},
        {title: "Worst Time Starting At", field:'maxSplitDistanceTimeOccuredAt'}
      ]}
      title="Split Analysis"
      options={{search: false, paging: false}
      }

      data={this.props.data.bestSplitTimes} />

    </div>

    )
  }
}