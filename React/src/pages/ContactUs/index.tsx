import React from 'react'

// style
import './style/contactus.scss'

// sections
import ContactHero from './ContactHero'

const ContactUs = () => {
    return (
        <div className='contact-container'>
            <ContactHero />
            <div className='contact-wrapper'></div>
        </div>
    )
}

export default ContactUs
