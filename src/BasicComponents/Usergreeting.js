import React, { Component } from 'react'

class Usergreeting extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true
        }
    }

    toggle=()=>{
        this.setState({
        isLoggedIn:!this.state.isLoggedIn
       })
}

render() {
    return (
        <div>
        {
            this.state.isLoggedIn?<h1>Ankur</h1>:null
        }

         <button onClick={this.toggle}>Toggle</button>
        </div>
    )
}
}

export default Usergreeting