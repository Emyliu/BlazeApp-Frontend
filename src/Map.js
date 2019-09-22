import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './css/Map.css'

const Marker = () => <div><span class="dot"></span></div>;
 
export class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 20
  };
 
  render() {
    let center = {
      lat: this.props.data.averageLat,
      lng: this.props.data.averageLon
    }
    console.log(center);
    console.log(this.props);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyB10xeICogXpJo7JnWYoP9l5Ynwn720Ks8" }}
          defaultCenter={center}
          defaultZoom={14}
        >

          {this.props.data.segments.map((segment, index) => {
            return <Marker
            key={index}
            lat={segment.start.latitude}
            lng={segment.start.longitude}
          />
          })}
        </GoogleMapReact>
      </div>
    );
  }
}
 