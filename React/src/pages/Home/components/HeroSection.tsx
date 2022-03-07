import React from 'react'

// style
import './style/herosection.scss'

const HeroSection = () => {
    const divArray = [...Array(400).keys()]
    return (
        <section className='hero-section'>
            <div className='background'>
                {divArray.map((_, key) => {
                    return (
                        <div
                            style={{ animationDelay: `${key * 3}ms` }}
                            key={key}
                            className='block'
                        ></div>
                    )
                })}
            </div>
            <div className='title'></div>
        </section>
    )
}

export default HeroSection
