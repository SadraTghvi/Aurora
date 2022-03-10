import React from 'react'

// style
import './style/newmovies.scss'

const NewMovies = () => {
    return (
        <div className='new-movies'>
            <div className='new-movies-header glow-animation'></div>
            <div className='new-movies-column-container'>
                <div className='new-movies-column glow-animation'></div>
                <div className='new-movies-column glow-animation'></div>
            </div>
            <div className='new-movies-slider'></div>
        </div>
    )
}

export default NewMovies
