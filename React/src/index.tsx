import React, { FC, StrictMode } from 'react'
import { hydrate, render } from 'react-dom'

// router
import { BrowserRouter as Router } from 'react-router-dom'

// main app
import App from './App'

// style
import './style/base.scss'
import './style/fonts/imports.scss'

const Root: FC = () => {
    return (
        <Router>
            <App />
        </Router>
    )
}

const RootElement = document.getElementById('root')!

const StrictRoot = (
    <StrictMode>
        <Root />
    </StrictMode>
)

if (RootElement.hasChildNodes()) hydrate(StrictRoot, RootElement)
else render(StrictRoot, RootElement)

export default Root
