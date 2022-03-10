import React from 'react'

// style
import './style/home.scss'

// sections
import HeroSection from './components/HeroSection'
import NewMovies from './components/NewMovies'

const Home = () => {
    return (
        <main className='home'>
            <HeroSection />
            <NewMovies />
        </main>
    )
}

export default Home
