import React from 'react'

function Hero({heroName}) {
    if(heroName === "joker"){
        throw new Error('Not a Hero');
    }
  return (
    <div>
    <h1> My name is {heroName}</h1>
    </div>
  )
}

export default Hero