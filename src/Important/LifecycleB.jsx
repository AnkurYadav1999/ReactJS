import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(){
        super()
        this.state={
          name:"Ankur"
        }
        console.log("Lifecycle B constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle B getDerivedStatefromProps")
        return null
    }

    componentDidMount(){
        console.log("Lifecycle B ComponentDidMount")
    }

    shouldComponentUpdate(){
        console.log("Lifecycle B shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevstate){
        console.log(" Lifecycle B getsnapshotbeforeupdate")
        return null
    }

    componentDidUpdate(){
        console.log("Lifecycle B componentDidUpdate")
    }

    render() {
    console.log("Lifecycle B rendered")
    return (
      <div>
      <h1>LifecycleB</h1>
      </div>
    )
  }
}

export default LifecycleB