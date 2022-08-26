import React, { Component } from 'react'
// import RegularComponent from './RegularComponent'
// import Purecomponents from './PureComponents'
import MemoComponent from './MemoComponent'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ankur"
      }
    }

    componentDidMount(){
        setInterval(()=>{
           this.setState({
            name:`Ankur`
           })
        },2000)
    }
  render() {
    console.log("**************Parent Comp rendered**************")
    return (
      <div>
      <h1>ParentComponent </h1>
      {/* <RegularComponent name={this.state.name}/>
      <Purecomponents name={this.state.name}/> */}
      <MemoComponent name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComponent