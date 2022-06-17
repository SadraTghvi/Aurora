import React, { useEffect, useState } from 'react'

// router
import { Routes, Route } from 'react-router-dom'

// cookies
// import { get as GetCookies } from 'js-cookie'

// pages
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'

// layouts
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'

// alert
import { useAlert } from 'react-alert'
import Product from './pages/Product'

const App = () => {
    const [ScrollTop, setScrollTop] = useState(0)
    const alert = useAlert()

    global.ReactAlert = alert

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
                    <Route path='/contact-us' element={<ContactUs />} />
                    <Route path='/product' element={<Product />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default App
