import React from 'react'

// style
import './style/productinfo.scss'

// icons
import { GrUserExpert } from '@react-icons/all-files/gr/GrUserExpert'
import { RiBattery2ChargeFill } from '@react-icons/all-files/ri/RiBattery2ChargeFill'
import { MdSentimentVerySatisfied } from '@react-icons/all-files/md/MdSentimentVerySatisfied'
import { FaCalendarCheck } from '@react-icons/all-files/fa/FaCalendarCheck'
import { IoShieldCheckmarkSharp } from '@react-icons/all-files/io5/IoShieldCheckmarkSharp'

import { GiReceiveMoney } from '@react-icons/all-files/gi/GiReceiveMoney'
import { BiSupport } from '@react-icons/all-files/bi/BiSupport'
import { IoIosCash } from '@react-icons/all-files/io/IoIosCash'
import { FaClipboardCheck } from '@react-icons/all-files/fa/FaClipboardCheck'

const ProdcutInfo = () => {
    return (
        <div className='product-info-wrapper'>
            <div className='product-info column'>
                <div className='info-name title_small'>
                    ساعت مچی عقربه‌ای مردانه تگ هویر مدل CAL5111.FC6299
                </div>
                <div className='info-details title_smaller'>
                    <div className='detail'>
                        <div className='question'>
                            <div className='icon'>
                                <GrUserExpert size={20} />
                            </div>
                            <div className='holder'>قابل استفاده برای:</div>
                        </div>
                        <div className='answer'>آقایان، پسران</div>
                    </div>
                    <div className='detail'>
                        <div className='question'>
                            <div className='icon'>
                                <RiBattery2ChargeFill size={20} />
                            </div>
                            <div className='holder'>منبع انرژی:</div>
                        </div>
                        <div className='answer'>حرکتی</div>
                    </div>
                    <div className='detail'>
                        <div className='question'>
                            <div className='icon'>
                                <MdSentimentVerySatisfied size={20} />
                            </div>
                            <div className='holder'>نوع کاربری:</div>
                        </div>
                        <div className='answer'>
                            روزمره، لوکس، فشن، رسمی، کلاسیک
                        </div>
                    </div>
                    <div className='detail'>
                        <div className='question'>
                            <div className='icon'>
                                <FaCalendarCheck size={20} />
                            </div>
                            <div className='holder'>ویژگی‌های تخصصی ساعت:</div>
                        </div>
                        <div className='answer'>تاریخ شمار، کرنوگراف</div>
                    </div>
                    <div className='detail'>
                        <div className='question'>
                            <div className='icon'>
                                <IoShieldCheckmarkSharp size={20} />
                            </div>
                            <div className='holder'>جنس بند:</div>
                        </div>
                        <div className='answer'>چرم طبیعی</div>
                    </div>
                </div>
            </div>
            <div className='product-buy column title_small'>
                <div className='buy-column'>
                    <div className='icon'>
                        <GiReceiveMoney size={24} />
                    </div>
                    <div className='holder'>ضمــانــت بـازگــشــت وجــه</div>
                </div>
                <div className='buy-column'>
                    <div className='icon'>
                        <BiSupport size={24} />
                    </div>
                    <div className='holder'>پشتیبانی و ارتباط 24 ساعته</div>
                </div>
                <div className='buy-column'>
                    <div className='icon'>
                        <IoIosCash size={24} />
                    </div>
                    <div className='holder'>امکان بازگشت وجه تا یک هفته</div>
                </div>
                <div className='buy-column'>
                    <div className='icon'>
                        <FaClipboardCheck size={24} />
                    </div>
                    <div className='holder'>اطمینان از اصالت کالا </div>
                </div>
                <div className='buy-btn title_small'>
                    <button>اضافه به سبد خرید</button>
                </div>
            </div>
        </div>
    )
}

export default ProdcutInfo
