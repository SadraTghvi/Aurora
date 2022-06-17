import React, { useState } from 'react'

// style
import './style/product.scss'

// sections
import ProductShow from './ProductShow'

const mainProduct = require('../../../../static/imgs/main-product.jpg')

var imgs: string[] = []

Array.from(Array(4).keys()).map((_, index) => {
    let img = require(`../../../../static/imgs/product-show${index}.jpg`)
    console.log(img)

    imgs.push(img)
})
const Product = () => {
    const [MainImg, setMainImg] = useState(mainProduct)
    return (
        <div className='product-container'>
            <div className='product-wrapper'>
                <div className='product-info'></div>
                <ProductShow
                    MainImg={MainImg}
                    setMainImg={setMainImg}
                    imgs={imgs}
                />
            </div>
        </div>
    )
}

export default Product
