import React, { FC } from 'react'

// style
import './style/productshow.scss'

interface ProductShowProps {
    MainImg: string
    setMainImg: (img: string) => void

    imgs: string[]
}

const ProductShow: FC<ProductShowProps> = ({ MainImg, imgs, setMainImg }) => {
    return (
        <div className='product-show'>
            <div className='main-img'>
                <img src={MainImg} alt='' />
            </div>
            <div className='imgs-container'>
                {imgs.map((item, index) => {
                    return (
                        <div
                            onClick={() => setMainImg(item)}
                            key={index}
                            className='img-wrapper'
                        >
                            <img src={item} alt='' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductShow
