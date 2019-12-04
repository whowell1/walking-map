import React from "react"
const { compose, withProps, withStateHandlers } = require("recompose");
const FaAnchor = require("react-icons/lib/fa/anchor");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const MapWithAMakredInfoWindow = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        <FaAnchor />
      </InfoWindow>}
    </Marker>
  </GoogleMap>
);

<MapWithAMakredInfoWindow
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkcLnJRWmnplhaoKJZJj4lbT1iNNvkxos&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>


// class Map extends React.PureComponent {
//   componentWillMount() {
//     this.setState({ markers: [] })
//   }

//   componentDidMount() {
//     const url = [
//       // Length issue
//       `https://gist.githubusercontent.com`,
//       `/farrrr/dfda7dd7fccfec5474d3`,
//       `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
//     ].join("")

//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         this.setState({ markers: data.photos });
//       });
//   }

//   render() {
//     return (
//       <div>
//         <p> hi</p>
//       </div>
//     )
//   }
// }



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
  
