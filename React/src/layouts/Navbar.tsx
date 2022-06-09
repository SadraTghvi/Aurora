import React, { FC, useEffect, useState } from 'react'

// icons
import { IoMdHome } from '@react-icons/all-files/io/IoMdHome'
import { RiShoppingCart2Fill } from '@react-icons/all-files/ri/RiShoppingCart2Fill'
import { MdGroup } from '@react-icons/all-files/md/MdGroup'
import { FiPhoneCall } from '@react-icons/all-files/fi/FiPhoneCall'

// style
import './style/navbar.scss'

interface NavbarProps {
    scrollTop: number
}

const Navbar: FC<NavbarProps> = ({ scrollTop }) => {
    const [Active, setActive] = useState(false)

    useEffect(() => {
        if (scrollTop >= 100) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [scrollTop])

    return (
        <div className={`navbar ${Active ? 'active' : ''}`}>
            <ul className='menu'>
                <li>
                    <a href='#' className='title_small'>
                        <div className='holder'>خانه</div>
                        <div className='icon'>
                            <div className='before'>
                                <IoMdHome size={24} />
                            </div>
                            <div className='after'>
                                <IoMdHome size={24} />
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='#videos' className='title_small'>
                        <div className='holder'> محصولات </div>
                        <div className='icon'>
                            <div className='before'>
                                <RiShoppingCart2Fill size={24} />
                            </div>
                            <div className='after'>
                                <RiShoppingCart2Fill size={24} />
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='#about' className='title_small'>
                        <div className='holder'>درباره ما</div>
                        <div className='icon'>
                            <div className='before'>
                                <MdGroup size={24} />
                            </div>
                            <div className='after'>
                                <MdGroup size={24} />
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='#contact' className='title_small'>
                        <div className='holder'> تماس با ما </div>
                        <div className='icon'>
                            <div className='before'>
                                <FiPhoneCall size={24} />
                            </div>
                            <div className='after'>
                                <FiPhoneCall size={24} />
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
