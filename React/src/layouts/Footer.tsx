import React from 'react'

import { Link } from 'react-router-dom'

// styling
import './style/footer.scss'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>درباره ما</h2>
                        <Link className='links' to='/'>
                            درباره
                            <span className='brand'>پرواز</span>
                        </Link>
                        <Link className='links' to='/'>
                            سوالات متداول
                        </Link>
                        <Link className='links' to='/'>
                            دیدن مقالات
                        </Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>ارتباط با ما</h2>
                        <Link className='links' to='/#contact'>
                            لینک صفحات مجازی
                        </Link>
                        <Link className='links' to='/#contact'>
                            ارتباط حضوری
                        </Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>محصولات ما</h2>
                        <Link className='links' to='/courses'>
                            اخرین محصولات
                        </Link>
                        <Link className='links' to='/courses'>
                            همه&zwnj;ی محصولات
                        </Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <small className='website-rights'>
                        00 Team © {new Date().getFullYear()}
                    </small>
                </div>
            </section>
        </footer>
    )
}

export default Footer
