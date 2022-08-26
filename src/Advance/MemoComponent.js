import React from 'react'

function MemoComponent(props) {
    console.log("rendering parent component")
  return (
    <div>
    <h1>MemoComponent {props.name} </h1>
    </div>
  )
}

export default React.memo(MemoComponent)