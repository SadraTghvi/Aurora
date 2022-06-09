import React, { useEffect, useState } from 'react'

// router
import { Routes, Route } from 'react-router-dom'

// cookies
// import { get as GetCookies } from 'js-cookie'

// axios
import axios from 'axios'

// pages
import Home from './pages/Home'

// layouts
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

// alert
import { useAlert } from 'react-alert'

const App = () => {
    const [ScrollTop, setScrollTop] = useState(0)
    const alert = useAlert()

    global.ReactAlert = alert

    useEffect(() => {
        axios
            .post('/api/test/', {
                name: 'test',
            })
            .then(res => console.log(res))
    }, [])

    useEffect(() => {
        window.onscroll = () => {
            setScrollTop(window.pageYOffset)
        }
    }, [])

    return (
        <>
            <Navbar scrollTop={ScrollTop} />
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App
