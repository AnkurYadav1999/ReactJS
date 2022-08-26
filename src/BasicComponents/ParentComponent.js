import React, { Component } from 'react'
import Childcomponent from './Childcomponent';

class ParentComponent extends Component {

    constructor(){
        super();

        this.state={
            parentName:'parent'
        }

    }

    greetParent=(childData)=>{
        alert(`Hello ${this.state.parentName} from ${childData}`)
    }

  render() {
    return (
      <div>
      <Childcomponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent