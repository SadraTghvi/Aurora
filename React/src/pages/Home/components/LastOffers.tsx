import React, { useEffect, useRef, useState } from 'react'

// style
import './style/LastOffers.scss'

// icons
import { RiShoppingCart2Fill } from '@react-icons/all-files/ri/RiShoppingCart2Fill'

// utils
import UnderlineText from '../../../components/UnderlineText'

const LastOffers = () => {
    const ProductHeader = useRef<HTMLDivElement>(null)
    const [isIntersectingProductHeader, setisIntersectingProductHeader] =
        useState(false)

    const ProductBody = useRef<HTMLDivElement>(null)
    const [isIntersectingProductBody, setisIntersectingProductBody] =
        useState(false)

    useEffect(() => {
        if (ProductHeader.current && !isIntersectingProductHeader) {
            var observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry && entry.isIntersecting) {
                        setisIntersectingProductHeader(true)
                        observer.disconnect()
                    }
                },
                {
                    rootMargin: '-75px',
                }
            )

            observer.observe(ProductHeader.current)
        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [ProductHeader])
    useEffect(() => {
        if (ProductBody.current && !isIntersectingProductHeader) {
            var observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry && entry.isIntersecting) {
                        setisIntersectingProductBody(true)
                        observer.disconnect()
                    }
                },
                {
                    rootMargin: '-75px',
                }
            )

            observer.observe(ProductBody.current)
        }
        return () => {
            if (observer) observer.disconnect()
        }
    }, [ProductBody])
    return (
        <div className='new-products' id='new-products'>
            <div className='products-header'>
                <div className='header-wrapper'>
                    <UnderlineText threshold={1}>
                        <div className='icon'>
                            <RiShoppingCart2Fill />
                        </div>
                        <div className='holder title'>
                            پیشنهاد های شگفت انگیز
                        </div>
                        <div className='icon'>
                            <RiShoppingCart2Fill />
                        </div>
                    </UnderlineText>
                </div>
            </div>
            <div
                className={`products-wrapper ${
                    isIntersectingProductHeader ? 'active' : ''
                }`}
                ref={ProductHeader}
            >
                <div className='product-head'>
                    <ProductHeadCart />
                </div>
                <div className='product-head'>
                    <ProductHeadCart />
                </div>
                <div
                    className={`products-body ${
                        isIntersectingProductBody ? 'active' : ''
                    }`}
                    ref={ProductBody}
                >
                    <div
                        className='product'
                        style={{ transitionDelay: '0.5s' }}
                    >
                        <ProductBodyCart />
                    </div>
                    <div
                        className='product'
                        style={{ transitionDelay: '0.9s' }}
                    >
                        <ProductBodyCart />
                    </div>
                    <div
                        className='product'
                        style={{ transitionDelay: '0.7s' }}
                    >
                        <ProductBodyCart />
                    </div>

                    <div
                        className='product'
                        style={{ transitionDelay: '1.1s' }}
                    >
                        <ProductBodyCart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastOffers

const ProductHeadCart = () => {
    return (
        <div className='product-head-wrapper'>
            <div className='head-image'></div>
            <div className='head-description'>
                <div className='description '>
                    <div className='title_smaller'>فلاکس چای صندوق دار</div>
                    <div className='price title_small'>
                        <div className='holder'>125,215,000</div>
                        <div className='icon'>تومان</div>
                    </div>
                </div>
                <div className='buy_btn' tabIndex={1}>
                    <RiShoppingCart2Fill size={30} color='white' />
                </div>
            </div>
        </div>
    )
}

const ProductBodyCart = () => {
    return (
        <div className='product-body-wrapper'>
            <div className='body-image'></div>
            <div className='body-description'>
                <div className='description'>
                    <div className='title_smaller'>فلاکس چای صندوق دار</div>
                    <div className='price'>
                        <div className='holder'>125,215,000</div>
                        <div className='icon'>تومان</div>
                    </div>
                </div>
                <div className='buy_btn' tabIndex={1}>
                    <RiShoppingCart2Fill size={30} color='white' />
                </div>
            </div>
        </div>
    )
}
