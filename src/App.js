import React from 'react';
import logo from './logo.svg';
// import Map from './components/Map.js'
import InputBox from './components/InputBox.js'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

// import FormControl from 'react-bootstrap/lib/FormControl';
// import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';

import {Form, FormGroup, ControlLabel, FormControl,Button} from 'react-bootstrap'
import {GoogleMap,withScriptjs,withGoogleMap,Circle} from "react-google-maps";
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");



function Map() {
  return (
  <GoogleMap 
  defaultZoom = {10}  
  defaultCenter={{ lat: 33.7490, lng: 150.644 }}
    
 >
 <Circle
    radius ={100}
    visible = {true}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
	
      // position={{ lat: -34.397, lng: 150.644 }}
      // labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
    >
      {/* <div>Hello There!</div> */}
    </Circle> </GoogleMap>
 
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
