import React from 'react'

// style
import './style/herosection.scss'

const HeroSection = () => {
    const totalDivs = Math.ceil(innerWidth / 10)

    const divArray = [...Array(totalDivs).keys()]

    return (
        <section className='hero-section'>
            <div className='background'>
                {divArray.map((_, key) => {
                    return (
                        <div
                            style={{
                                animationDelay: `${key * 3}ms`,
                                width: `${100 / totalDivs}%`,
                            }}
                            key={key}
                            className='block'
                        ></div>
                    )
                })}
            </div>
            <div className='title'></div>
            <div className='scroll-down'>
                <div className='wrapper' style={{ animationDelay: '0s' }}>
                    <span></span>
                </div>
                <div className='wrapper' style={{ animationDelay: '0.15s' }}>
                    <span></span>
                </div>
                <div className='wrapper' style={{ animationDelay: '0.3s' }}>
                    <span></span>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
