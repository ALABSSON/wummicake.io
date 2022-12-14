import React from 'react'
import SectTwo1 from '../Assets/sectwo1.png'


const SectionTwo = () => {
  return (
    <div className='SectionTwo'>
        <div className='SectionTwoWrap'>
            <div className='SecTwoCard'>
                <h1 className='SecTwoLogo'> 
                    <img src={SectTwo1} alt='Sectwo1' />
                </h1>
                <div className='SecTwoText'> 
                    <h3>Fast Delivery</h3>
                    <p>All Order of 500 or more of eligeble</p>
                </div>
            </div>

            <div className='SecTwoCard'>
                <h1 className='SecTwoLogo'> 
                    <img src={SectTwo1} alt='Sectwo1' />
                </h1>
                <div className='SecTwoText'> 
                    <h3>Order Tracking</h3>
                    <p>Using order number or booking number </p>
                </div>
            </div>

            <div className='SecTwoCard'>
                <h1 className='SecTwoLogo'> 
                    <img src={SectTwo1} alt='Sectwo1' />
                </h1>
                <div className='SecTwoText'> 
                    <h3>Secure Payment</h3>
                    <p>Secure And Manage Your Payment</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SectionTwo