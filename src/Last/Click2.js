import React, { Component } from 'react'

 class Click2 extends Component {
    

  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default Click2