import React from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import FormControl from 'react-bootstrap/lib/FormControl';
// import {FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button} from 'react-bootstrap';

import {Form, FormGroup, ControlLabel, FormControl,Button} from 'react-bootstrap'
function App() {
  return (

    <div className="App">
      <header className="App-header">
        
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter number of steps" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

      
    
      </header>
    </div>
  );
}

export default App;