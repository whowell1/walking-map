import React, { Component } from 'react';

class InputBox extends Component {


    handle()
    {
        console.log("hello");
    }
    render(){
      return(
        <div>
            
            <input type="text" onChange={this.handle.bind(this)} />
            
            </div>
      );
    }
  };
  
  export default InputBox;