import React from 'react'

// style
import './style/productcard.scss'

const img = require('../../../static/imgs/nike19.png')

// icons
import { FaShippingFast } from '@react-icons/all-files/fa/FaShippingFast'
import { BiBadgeCheck } from '@react-icons/all-files/bi/BiBadgeCheck'

const ProductCard = () => {
    return (
        <div className='productcard-wrapper'>
            <div className='card card--19'>
                <div className='card__header card__header--19'>
                    <div className='card_description'>
                        <h1 className='card__title card__will-animate title_smaller'>
                            کفش راحتی نایک
                        </h1>
                        <span className='card__subtitle description'>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
                            و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                        </span>
                    </div>
                </div>
                <img
                    src={img}
                    alt='Nike 19'
                    className='card__image card__will-animate'
                />
                <div className='card__body'>
                    <div className='add-to-cart-wrapper'>
                        <div className='column'>
                            <div className='icon'>
                                <FaShippingFast size={24} />
                            </div>
                            <div className='holder'>امکان ارسال سریع</div>
                        </div>
                        <div className='column'>
                            <div className='icon'>
                                <BiBadgeCheck size={24} />
                            </div>
                            <div className='holder'>ضمانت اصالت کالا </div>
                        </div>
                        <div className='buy-btn'>
                            <div className='default-text'>اضافه به سبد </div>
                            <div className='space'>|</div>
                            <div className='buy-price number'>180,000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
