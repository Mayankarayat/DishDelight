import React from 'react'
import Hero from './Hero/Hero'
import Delivery from './Delivery/Delivery'
import Food from './Food/Food'

const Home = ({handle}) => {
  return (
    <div>
        <Hero/>
        <Delivery/>
        <Food handle={handle}/>
    </div>
  )
}

export default Home