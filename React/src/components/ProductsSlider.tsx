import React, { useEffect, useState } from 'react'

// style
import './style/slider.scss'

const ArrayInp = [...Array(10).keys()]

// comps
import ProductCard from './ProductCard'

// icons
import { GrFormNext } from '@react-icons/all-files/gr/GrFormNext'
import { GrFormPrevious } from '@react-icons/all-files/gr/GrFormPrevious'

const ProductsSlider = () => {
    const [ActiveProduc, setActiveProduc] = useState(2)

    const nextSlide = () => {
        if (ActiveProduc === ArrayInp.length - 2) {
            return
        } else {
            setActiveProduc(ActiveProduc + 1)
        }
    }

    const prevSlide = () => {
        if (ActiveProduc === 1) {
            return
        } else {
            setActiveProduc(ActiveProduc - 1)
        }
    }

    const ReturnClass = (index: number) => {
        if (index === ActiveProduc) return ' current'
        else if (
            index === ActiveProduc + 1 ||
            (ActiveProduc === ArrayInp.length - 1 && index === 0)
        )
            return ' next'
        else if (
            index === ActiveProduc - 1 ||
            (ActiveProduc === 0 && index === ArrayInp.length - 1)
        )
            return ' previous'
        else if (
            index === ActiveProduc + 2 ||
            (ActiveProduc === 0 && index === ArrayInp.length - 1)
        )
            return ' after-next'
        else if (
            index === ActiveProduc - 2 ||
            (ActiveProduc === 0 && index === ArrayInp.length - 1)
        )
            return ' before-previous'
        else return ''
    }

    useEffect(() => {
        console.log(ActiveProduc)
    }, [ActiveProduc])
    return (
        <div className='slider-container'>
            <div className='slider-wrapper'>
                {ArrayInp.map((_, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                'productcard-container' + ReturnClass(index)
                            }
                        >
                            <ProductCard />
                        </div>
                    )
                })}
            </div>
            <div className='buttons'>
                <div className='prev' onClick={() => nextSlide()}>
                    <GrFormPrevious size={40} />
                </div>
                <div className='next' onClick={() => prevSlide()}>
                    <GrFormNext size={40} />
                </div>
            </div>
        </div>
    )
}

export default ProductsSlider
