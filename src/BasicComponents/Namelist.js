import React from 'react'
import Person from './Person'

function Namelist() {
    const names=['bruce','clark','diana','bruce']
    const persons = [
        {
            id:1,
            name:"Bruce Wayne",
            age:28,
            charachter:"Human"
        },
        {
            id:2,
            name:"Clark Kent",
            age:96,
            charachter:"ET"
        },
        {
            id:3,
            name:"Diana",
            age:105,
            charachter:"Demigod"
        }
    ]

    const nameList=names.map((name,index)=>{
        return <h1 key={index}>{name} {index }</h1>
    })
  
  return (
    <div>{nameList}</div>
  )
}

export default Namelist