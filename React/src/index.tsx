import React, { FC, StrictMode } from 'react'
import { hydrate, render } from 'react-dom'

// router
import { BrowserRouter as Router } from 'react-router-dom'

// main app
import App from './App'

// style
import './style/base.scss'
import './style/fonts/imports.scss'

// alerts
import { Provider as AlertProvider, AlertProviderProps } from 'react-alert'
import AlertTemplate from './layouts/Alert'

const AlertProps: AlertProviderProps = {
    template: AlertTemplate,
    position: 'top right',
    timeout: 5_000,
    transition: 'fade',
    containerStyle: {
        top: innerWidth <= 768 ? '10px' : '70px',
        zIndex: '1000',

        width: '100%',
        // height: '100%',

        flexDirection: 'column-reverse',
        alignItems: innerWidth <= 768 ? 'center' : 'flex-end',
        justifyContent: 'flex-start',
        gap: '4vh',

        padding: '2rem',
    },
}
////

const Root: FC = () => {
    return (
        <Router>
            <AlertProvider {...AlertProps}>
                <App />
            </AlertProvider>
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
