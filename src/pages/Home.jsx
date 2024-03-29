import React from 'react'
import Hero from '../components/hero'
import Navbar from '../shared/Navbar'
import Why from '../components/Why'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Why />
        </div>
    )
}

export default Home