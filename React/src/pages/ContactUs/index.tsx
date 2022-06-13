import React from 'react'

// style
import './style/contactus.scss'

// sections
import ContactHero from './ContactHero'
import ContactForm from './ContactForm'

// utils
import UnderlineText from '../../components/UnderlineText'

// icons
import { MdEmail } from '@react-icons/all-files/md/MdEmail'

const ContactUs = () => {
    return (
        <div className='contact-container'>
            <ContactHero />
            <div className='contact-wrapper'>
                <UnderlineText threshold={1}>
                    <div className='icon'>
                        <MdEmail />
                    </div>
                    <div className='holder title'>ارتباط الکترونیکی</div>
                    <div className='icon'>
                        <MdEmail />
                    </div>
                </UnderlineText>

                <ContactForm />
            </div>
        </div>
    )
}

export default ContactUs
