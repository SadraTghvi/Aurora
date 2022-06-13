import React from 'react'

// style
import './style/contacthero.scss'

// icons
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp'
import { FaTelegramPlane } from '@react-icons/all-files/fa/FaTelegramPlane'
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram'
import { BiPhoneCall } from '@react-icons/all-files/bi/BiPhoneCall'

// img
const bgImg = require('../../../../static/imgs/contact.jpg')

const ContactHero = () => {
    return (
        <div className='hero-section'>
            <img src={bgImg} className='background-img'></img>
            <div className='titles_container'>
                <div className='title_hero'>ارتباط با پرواز</div>
                <div className='title_hero'> راه های ارتباطی ما </div>
                <div className='icons-container'>
                    <ul className='social__list'>
                        <li
                            className='social__item'
                            style={{ animationDelay: '1s' }}
                        >
                            <button className='social-btn whatsapp'>
                                <div className='tooltip'>09120974956</div>
                                <FaWhatsapp className='fab' />
                            </button>
                        </li>
                        <li
                            className='social__item'
                            style={{ animationDelay: '2s' }}
                        >
                            <button className='social-btn telegram'>
                                <div className='tooltip'>@sadrataghavi3</div>
                                <FaTelegramPlane className='fab' />
                            </button>
                        </li>

                        <li
                            className='social__item'
                            style={{ animationDelay: '1.5s' }}
                        >
                            <button className='social-btn phone'>
                                <div className='tooltip'>09120974956</div>
                                <BiPhoneCall className='fab' />
                            </button>
                        </li>

                        <li
                            className='social__item'
                            style={{ animationDelay: '2.5s' }}
                        >
                            <button className='social-btn instagram'>
                                <div className='tooltip'>@sadra_tqvi</div>
                                <a
                                    href='https://www.instagram.com//'
                                    target='_blank'
                                >
                                    <AiOutlineInstagram className='fab' />
                                </a>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <a className='scroll-down' href='#'>
                <div className='wrapper' style={{ animationDelay: '0s' }}>
                    <span></span>
                </div>
                <div className='wrapper' style={{ animationDelay: '0.15s' }}>
                    <span></span>
                </div>
                <div className='wrapper' style={{ animationDelay: '0.3s' }}>
                    <span></span>
                </div>
            </a>
        </div>
    )
}

export default ContactHero
