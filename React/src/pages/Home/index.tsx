import React from 'react'

// style
import './style/home.scss'

// sections
import HeroSection from './components/HeroSection'
import LastOffers from './components/LastOffers'

const Home = () => {
    return (
        <main className='home'>
            <HeroSection />
            <LastOffers />
        </main>
    )
}

export default Home
