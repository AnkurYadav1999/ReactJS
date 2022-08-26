import React, { Component } from 'react'

 class Classclick extends Component {
  HandleClick() {
    console.log("Button Clicked from class")
} 
  render() {
    
    return (
      <div>
      <h1>Classclick</h1>
      <button onClick={this.HandleClick}>Click Me</button>
      </div>
    )
  }
}

export default Classclick