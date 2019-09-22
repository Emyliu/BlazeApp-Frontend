import React from 'react';
import Button from '@material-ui/core/Button';

let buttonStyle = {
  'margin-right': "10px"
}

export class DistanceSelector extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.onClick(e.currentTarget.id)
  }
 
  render() {
    return (
      <div className="distanceSelector">
        <Button style={buttonStyle} variant="outlined" color="primary" id="0" onClick={this.handleClick}>100m</Button>
        <Button style={buttonStyle} variant="outlined" color="primary" id="1" onClick={this.handleClick}>500m</Button>
        <Button style={buttonStyle} variant="outlined" color="primary" id="2" onClick={this.handleClick}>1km</Button>
        <Button style={buttonStyle} variant="outlined" color="primary" id="3" onClick={this.handleClick}>2km</Button>
        <Button style={buttonStyle} variant="outlined" color="primary" id="4" onClick={this.handleClick}>5km</Button>
      </div>
    )
  }
}

