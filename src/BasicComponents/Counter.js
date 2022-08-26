import React, { Component } from 'react'

 class Counter extends Component {
    constructor(){
        super();
        this.state={
            data:0
        }
    }

    increment(){
        this.setState({
            data:this.state.data+5
        })
    }

   
  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter