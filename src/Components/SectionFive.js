import React from 'react'
import FundantCakes from './foundant Cake/FundantCakeApi'
import { useRef } from 'react';

const SectionFive = () => {

    const scrollElement = useRef(null) 
    
    const scrollLeft = () => {
        scrollElement.current.scrollLeft += -330

    }

    const scrollRight = () => {
        scrollElement.current.scrollLeft += 330

    }

  return (
    <div className='SectionFive'>
        <div className='SectionFiveWrap'> 
            <div className='FundantTop'>
                <div className='FundantTopOne'> 
                    <h4> Recommended for you </h4>
                    <h3> Royal Cake  </h3>
                    <p> Special Cakes </p>
                </div>

                <div className='ButterIceTopTwo'> 
                    <h2 onClick={scrollLeft}> - </h2>
                    <h2 onClick={scrollRight}> + </h2>
                </div>
            </div>

            <div className='FundantCardContain' ref={scrollElement}> 
                
            <> 
            {FundantCakes.map((FundCake) => ( 
            <div key={FundCake.id} className='FundantCardContainrow'> 
                  <div className='FundantCard'> 
                    <div className='FundantCardTop'>
                        <img src={FundCake.src} alt={FundCake.alt} />

                        <div className='CakeDet2'>
                            <h3> {FundCake.CakeName} </h3>
                            <p> {FundCake.CakeQuotes}  </p>
                        </div>
                    </div>

                    <div className='FundantCardButtom'> 
                        <h2> {FundCake.CakePrice}  </h2>
                        <button> Add to cart </button>
                    </div>
                </div>
            </div>
             

          ))} 

  
  </> 


            </div>


        </div>
    </div>
  )
}

export default SectionFive