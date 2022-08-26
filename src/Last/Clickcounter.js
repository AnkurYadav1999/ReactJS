import React, { Component } from 'react'
import withCounter from './withCounter'


class Clickcounter extends Component {

  render() {
    const {count,IncrementCount}=this.props
    return (
      <div>
      <button onClick={IncrementCount}>{this.props.name} Clicked {count} times</button>
      </div>
    )
  }
}

export default withCounter(Clickcounter,5) 