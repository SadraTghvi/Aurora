import React from 'react'

// style
import './style/herosection.scss'

// icons
import { MdKeyboardArrowRight } from '@react-icons/all-files/md/MdKeyboardArrowRight'

const HeroSection = () => {
    const totalDivs = Math.ceil(innerWidth / 10)

    const divArray = [...Array(totalDivs).keys()]

    return (
        <section className='hero-section'>
            <div className='background'>
                <div className='background-color'></div>
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
            <div className='titles-container'>
                <span className='animation-fade'>
                    <div
                        className='title_hero'
                        style={{ animationDelay: '2.5s' }}
                    >
                        بی نهایت فیلم و سریال در گوشی، لب تاب و کامپیتور شما
                    </div>
                </span>
                <div className='paragraph'>
                    <span className='animation-fade'>
                        <div
                            className='title_small'
                            style={{ animationDelay: '2.75s' }}
                        >
                            هرجا که هستید با هر دستگاهی که هستید
                        </div>
                    </span>
                    <span className='animation-fade'>
                        <div
                            className='title_smaller'
                            style={{ animationDelay: '3s' }}
                        >
                            آماده اید؟ ایمیل خود را وارید کنید تا عضویت خود را
                            شروع کنید
                        </div>
                    </span>
                </div>
                <span className='register-bar'>
                    <input
                        className='title_small'
                        type='text'
                        placeholder='example@gmail.com'
                        pattern='^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$'
                        style={{ animationDelay: '3.5s' }}
                    />
                    <div
                        className='go-btn description'
                        style={{ animationDelay: '3.5s' }}
                    >
                        <div className='holder '>ثبت نام</div>
                        <div className='icon'>
                            <MdKeyboardArrowRight size={24} />
                        </div>
                    </div>
                </span>
            </div>
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
