import React from 'react';
import PropTypes from 'prop-types';
import { PaceGraph } from './PaceGraph';
import { ElevationGraph } from './ElevationGraph';
import { PaceElevationGraph } from './PaceElevationGraph';
import { Help } from './Help';
import './BasicInformation.css';
import { DetailsView } from './DetailsView';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import red from '@material-ui/core/colors/red';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ "padding": "0px 30px 0px 30px" }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    palette: {
      primary: deepOrange,
      secondary: red,
    },
    backgroundColor: theme.palette.background.paper,
  },
});



export class BasicInformation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: 0,
      };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
 
  render() {
    const { value } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} variant="fullWidth">
            <Tab label="Analysis" />
            <Tab label="Pace" />
            <Tab label="Elevation" />
            <Tab label="Other" />
            <Tab label="Help" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><DetailsView data={this.props.data}/></TabContainer>}
        {value === 1 && <TabContainer><PaceGraph className="graph" data={this.props.data}></PaceGraph></TabContainer>}
        {value === 2 && <TabContainer><ElevationGraph className="graph" data={this.props.data}></ElevationGraph></TabContainer>}
        {value === 3 && <TabContainer><PaceElevationGraph className="graph" data={this.props.data}></PaceElevationGraph></TabContainer>}
        {value === 4 && <TabContainer><Help/></TabContainer>}
        <div className="header">
        <div classname="map-wrapper">
        </div>
        <div classname="details-view-wrapper">
        </div>
        </div>
        <div>
        </div>
        <br/>
        <br/>
      </div>
    )
  }
}

export default withStyles(styles)(BasicInformation);