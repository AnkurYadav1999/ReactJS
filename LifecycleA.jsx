import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(){
        super()
        this.state={
          name:"Ankur"
        }
        console.log("Lifecycle A constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("Lifecycle A getDerivedStatefromProps")
        return null
    }

    componentDidMount(){
        console.log("Lifecycle A ComponentDidMount")
    }

    shouldComponentUpdate(){
        console.log("Lifecycle A shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevstate){
        console.log(" Lifecycle A getsnapshotbeforeupdate")
        return null
    }

    componentDidUpdate(){
        console.log("Lifecycle A componentDidUpdate")
    }

    changeState=()=>{
        this.setState({
            name:"Ankur Yadav"
        }) 
    }


    render() {
    console.log("Lifecycle A rendered")
    return (
      <div>
      <h1>LifecycleA</h1>
      <button onClick={this.changeState}>Change</button>
      <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA



/*
This is related to render props (function)
 <Counter render={(count,incrementCount)=><Click2 count={count} incrementCount={incrementCount}/>}/>
    <Counter render={(count,incrementCount)=><Hover2 count={count} incrementCount={incrementCount}/>}/>
*/
