import React, { Component } from 'react';

class InputBox extends Component {
    constructor()
    {
        super();
        this.state= {
            data: ''
        }
    

    }
    handle(event)
    {
        this.setState({
            data:event.target.value
        })
    }
    render(){
      return(
        <div>
            
            <input 
            type="text" 
            placeholder="Enter number of steps here"
            onChange={this.handle.bind(this)} />
            
            </div>
      );
    }
  };
  
  export default InputBox;