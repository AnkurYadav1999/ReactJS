import React from 'react'

function Funclick() {
    function clickHandler(){
        console.log("Button Clicked")
    }
  return (
    <div>
    <h1>Funclick</h1>
    <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

export default Funclick