/*global google*/
import React from 'react';
import logo from './logo.svg';
// import Map from './components/Map.js'
import InputBox from './components/InputBox.js'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import FormControl from 'react-bootstrap/lib/FormControl';
// import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';

import {Form, FormGroup, ControlLabel, FormControl,Button} from 'react-bootstrap';


const { compose, withProps } = require("recompose");

const google=window.google;

const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  StreetViewPanorama,
  OverlayView
} = require("react-google-maps");

const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");

// const { StreetViewPanormaWithAnOverlayView } = require("react-google-maps/lib/components/drawing/StreetViewPanormaWithAnOverlayView");

// const getPixelPositionOffset = (width, height) => ({
//   x: -(width / 2),
//   y: -(height / 2),
// })


function Map() {
  return (
  <GoogleMap 
  defaultZoom = {10}  
  defaultCenter={{ lat: 33.7490, lng: -84.3880 }}


  
  
    
 >
  <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.POLYLINE,
            google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        circleOptions: {
          fillColor: `#ffff00`,
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />
    </GoogleMap>
 
  );
}

const WrappedCircle = withScriptjs(withGoogleMap(Map));


export default function App() {
  return (
    <div className="App-header">
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedCircle
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkcLnJRWmnplhaoKJZJj4lbT1iNNvkxos&v=3.exp&libraries=geometry,drawing,places"       
       loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
    </div>
  );
}








/*** */
// function App() {

  // return (

    // <div className="App">
    //   <header className="App-header">
    //   <div style= {{width: '100vw', veight:'100vh'}} >
    //   <WrappedCircle GoogleMapURL= {"https://maps.googleapis.com/maps/api/js?key=AIzaSyAkcLnJRWmnplhaoKJZJj4lbT1iNNvkxos&v=3.exp&libraries=geometry,drawing,places"}
    //   loadingElement={<div style={{height:"100%"}} />}
    //    containerElement= {<div style={{ height: `400px` }} />}
    //     mapElement = {<div style={{ height: `100%` }} />}
    //   />
    //   </div>
    //   <InputBox/>

    
        
      /* { <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter number of steps" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */

      
    
    //   </header>
    // </div>
//   );
// }

// export default App;
