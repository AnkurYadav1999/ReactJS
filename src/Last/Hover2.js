import React, { Component } from 'react'

 class Hover2 extends Component {
  
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
      </div>
    )
  }
}

export default Hover2