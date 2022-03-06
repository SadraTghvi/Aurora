import React, { FC, StrictMode } from 'react'
import { hydrate, render } from 'react-dom'

const Root: FC = () => {
    return <div>index</div>
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
