import React, { Component } from 'react'
import withCounter from './withCounter'

 class Hovercounter extends Component {

  render() {
    const{count,IncrementCount}=this.props
    return (
      <div>
        <h1 onMouseOver={IncrementCount}>{this.props.name} Hovercounter hovered {count} times</h1>
      </div>
    )
  }
}

export default withCounter(Hovercounter,10)