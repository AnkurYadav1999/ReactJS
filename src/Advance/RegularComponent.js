import React, { Component } from 'react'

 class RegularComponent extends Component {
  render() {
    console.log("Regular component rendered")
    return (
      <div>
      <h1>RegularComponent {this.props.name}</h1>
      </div>
    )
  }
}

export default RegularComponent