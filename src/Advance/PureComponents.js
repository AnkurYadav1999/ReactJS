import React, { PureComponent } from 'react'

 class Purecomponents extends PureComponent {
  render() {
    console.log("Pure component Rendered")
    return (
      <div>
        <h1>Pure Components {this.props.name}</h1>
      </div>
    )
  }
}

export default Purecomponents