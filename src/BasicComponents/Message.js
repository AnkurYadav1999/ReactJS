import React from 'react'


class Message extends React.Component{
    constructor(){
        super();
        this.state={
            msg:"Welcome Visitor"
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.setState({msg:"Welcome subscriber"})}>Subscribe</button>
                <button onClick={()=>this.setState({msg:" Unsubscribed"})}>Unsubscribe</button>
            </div>
        )
    }
}

export default Message;