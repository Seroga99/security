import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 50.342377,
      lng: 30.422763
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '80vh', width: '100%',}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAdB3H3PfT9UYIsPta8lJvWO1H-aBHEoB0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={50.342377}
            lng={30.422763}
            text={'Альянс Контроль'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMaps;