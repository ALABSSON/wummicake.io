import React from 'react'
import ButerCakes from './foundant Cake/CakeApi'
import { useRef } from 'react';


const SectionThree = () => {

    const scrollElement = useRef(null) 
    
    const scrollLeft = () => {
        scrollElement.current.scrollLeft += -330

    }

    const scrollRight = () => {
        scrollElement.current.scrollLeft += 330

    }


  return (
    <div className='SectionThree'>
        <div className='SectionThreeWrap'> 
            <div className='ButterIceTop'>
                <div className='ButterIceTopOne'> 
                    <h4> Recommended for you </h4>
                    <h3> Popular Cake  </h3>
                    <p> Budget Cake </p>
                </div>

                <div className='ButterIceTopTwo'> 
                    <h2 onClick={scrollLeft}> - </h2>
                    <h2 onClick={scrollRight}> + </h2>
                </div>
            </div>

            <div className='ButterIceCardContain' ref={scrollElement}> 
                
            <> 
            {ButerCakes.map((ButCake) => ( 
            <div key={ButCake.id} className='ButterIceCardContainrow'> 
                  <div className='ButerIceCard'> 
                    <div className='ButerIceCardTop'>
                        <img src={ButCake.src} alt={ButCake.alt} />

                        <div className='CakeDet'>
                            <h3> {ButCake.CakeName} </h3>
                            <p> {ButCake.CakeQuotes}  </p>
                        </div>
                    </div>

                    <div className='ButerIceCardButtom'> 
                        <h2> {ButCake.CakePrice}  </h2>
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

export default SectionThree