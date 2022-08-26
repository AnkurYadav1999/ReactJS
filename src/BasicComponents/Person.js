import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>
            My name is {person.name} and my age is {person.age} and i am a {person.charachter}
        </h2>
    </div>
  )
}

export default Person