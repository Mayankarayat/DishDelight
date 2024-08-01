import React from 'react'
import Hero from './Hero/Hero'
import Delivery from './Delivery/Delivery'
import Food from './Food/Food'
import Review from './Reviews/Review'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Delivery/>
        <Food/>
        <Review/>
    </div>
  )
}

export default Home