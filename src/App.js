/*global google*/
import React from 'react';
import logo from './logo.svg';
// import Map from './components/Map.js'
import InputBox from './components/InputBox.js'
import './App.css';
import { Circle, GoogleMap } from '@react-google-maps/api';

const { LoadScript } = require("./LoadScript");
const ScriptLoaded = require("./docs/ScriptLoaded").default;

const mapContainerStyle = {
  height: "400px",
  width: "800px"
}

const center = {
  lat: -3.745,
  lng: -38.523
}

const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
}

const onLoad = circle => {
  console.log('Circle onLoad circle: ', circle)
}

const onUnmount = circle => {
  console.log('Circle onUnmount circle: ', circle)
}




export default function App() {
  return (
    <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyAkcLnJRWmnplhaoKJZJj4lbT1iNNvkxos&v=3.exp&libraries=geometry,drawing,places"
      >
        <GoogleMap
          id='example-map'
        >
        </GoogleMap>
      </LoadScript>
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
