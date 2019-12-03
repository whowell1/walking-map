import React from "react"




const fetch = require("isomorphic-fetch");
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAkcLnJRWmnplhaoKJZJj4lbT1iNNvkxos&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `1000px`, width: `1000px`}} />,
    containerElement: <div style={{ height: `1000px`, width: `1000px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withHandlers({
    onMarkerClustererClick: () => (markerClusterer) => {
      const clickedMarkers = markerClusterer.getMarkers()
      console.log(`Current clicked markers length: ${clickedMarkers.length}`)
      console.log(clickedMarkers)
    },
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 33.7490, lng: -84.3880 }}
  >
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

class Map extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] })
  }

  componentDidMount() {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    ].join("")

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data.photos });
      });
  }

  render() {
    return (
      <MapWithAMarkerClusterer markers={this.state.markers} />
    )
  }
}



export default Map;

// const Map = compose(
//   withProps({


//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBarUJrKBgVTQotf_M3rEAiTHaCqkL3364_HERE&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: -34.397, lng: 150.644 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
//   </GoogleMap>
// )

// export default Map;

// import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap,LoadScript } from 'react-google-maps';

// class Map extends Component {
//     render(){

//       return(

//       <LoadScript
//       id="script-loader"
//       googleMapsApiKey="YOUR_API_KEY"
//     >
//       <GoogleMap
//         id='example-map'
//       >
//       </GoogleMap>
//     </LoadScript>
//    )
//     }

//   //       const GoogleMapExample = withGoogleMap(props => (
//   //           <GoogleMap
//   //             defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
//   //             defaultZoom = { 13 }
//   //           >
//   //           </GoogleMap>
//   //        ));


//   //     return(
//   //       <div>
//   //       <GoogleMapExample
//   //         containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
//   //         mapElement={ <div style={{ height: `100%` }} /> }
//   //       />
//   //     </div>
//   //  );   }
// };
  
