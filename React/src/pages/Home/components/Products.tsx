import React from 'react'

// icons
import { RiShoppingCart2Fill } from '@react-icons/all-files/ri/RiShoppingCart2Fill'

// style
import './style/products.scss'

// utils
import UnderlineText from '../../../components/UnderlineText'

// comps
import ProductsSlider from '../../../components/ProductsSlider'

const Products = () => {
    return (
        <section className='products-container'>
            <div className='products-header section_title'>
                <UnderlineText threshold={1}>
                    <div className='icon'>
                        <RiShoppingCart2Fill />
                    </div>
                    <div className='holder title'> محصولات ما</div>
                    <div className='icon'>
                        <RiShoppingCart2Fill />
                    </div>
                </UnderlineText>
            </div>
            <div className='products-wrapper'>
                <ProductsSlider />
            </div>
        </section>
    )
}

export default Products
