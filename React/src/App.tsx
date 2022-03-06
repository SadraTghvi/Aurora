import React, { useEffect } from 'react'

// cookies
// import { get as GetCookies } from 'js-cookie'

// axios
import axios from 'axios'

const App = () => {
    useEffect(() => {
        axios
            .post('/api/test/', {
                name: 'test',
            })
            .then(res => console.log(res))
    }, [])

    return <div>App</div>
}

export default App
