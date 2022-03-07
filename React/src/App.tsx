import React, { useEffect } from 'react'

// router
import { Routes, Route } from 'react-router-dom'

// cookies
// import { get as GetCookies } from 'js-cookie'

// axios
import axios from 'axios'

// pages
import Home from './pages/Home'

const App = () => {
    useEffect(() => {
        axios
            .post('/api/test/', {
                name: 'test',
            })
            .then(res => console.log(res))
    }, [])

    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </main>
    )
}

export default App
