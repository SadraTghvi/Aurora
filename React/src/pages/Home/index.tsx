import React from 'react'

// style
import './style/home.scss'

// sections
import HeroSection from './components/HeroSection'
import LastOffers from './components/LastOffers'
import Products from './components/Products'

const Home = () => {
    return (
        <main className='home'>
            <HeroSection />
            <LastOffers />
            <Products />
        </main>
    )
}

export default Home
