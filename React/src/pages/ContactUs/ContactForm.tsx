import React from 'react'

// style
import './style/contactform.scss'

// icons
import { FaMobileAlt } from '@react-icons/all-files/fa/FaMobileAlt'
import { GoPerson } from '@react-icons/all-files/go/GoPerson'

const ContactForm = () => {
    return (
        <div className='contactform-container'>
            <div className='form-head'>
                <div className='group '>
                    <label htmlFor='name' className='label'>
                        <div className='label-icon'>
                            <GoPerson size={20} />
                        </div>

                        <div className='label-text'>
                            نام و نام&zwnj;خانوادگی{' '}
                        </div>
                    </label>

                    <input
                        autoFocus
                        id='name'
                        placeholder=''
                        type='tel'
                        className='input'
                    />
                </div>
                <div className='group '>
                    <label htmlFor='phone_number' className='label'>
                        <div className='label-icon'>
                            <FaMobileAlt size={20} />
                        </div>
                        <div className='label-text'>تلفن همراه</div>
                    </label>
                    <input
                        id='phone_number'
                        placeholder='0912 123 4567'
                        type='tel'
                        className='input'
                    />
                </div>
            </div>
            <div className='form-body '>
                <textarea
                    className='title_small'
                    placeholder='نظر خود را بنویسید...'
                    name=''
                    id=''
                    cols={30}
                    rows={10}
                ></textarea>
            </div>
            <div className='sub-btn title_small'>
                <a href='#'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    ارسال نظر
                </a>
            </div>
        </div>
    )
}

export default ContactForm
