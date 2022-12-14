import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import React from 'react'

  
const ImageSlider = ({images}) => { 

  

  const settings = { 

    infinite: true, 

    dots: true, 

    slidesToShow: 1, 

    slidesToScroll: 1, 

    lazyLoad: true, 

    autoplay: true, 

  autoplaySpeed: 3000, 

   

  }; 

  return ( 

    <> 
      <div className="imgslider"> 

        <Slider {...settings}> 

          {images.map((item) => ( 
            <div key={item.id} className='ImageContain'> 
                <div className='SectionOneWrap'>     
                    <div className='SecntionOneLeft'> 
                        <span> Up to 15% Off @ </span>
                        <h3> Wummi's <span>Cake</span> </h3>
                        <h4> {item.BigQuote} </h4>
                        <p> {item.SmallQuote} </p>
                        <button> Shop Now </button>
                    </div>

                    <div className='SecntionOneRight'>
                        <div className='CircleOne'> 
                        <div className='CircleTwo'> 
                            <div className='CircleThree'>  
                                <img src={item.src}  alt={item.alt} /> 
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
             

          ))} 

        </Slider> 

      </div> 
  
  </> 

  ) 
} 

export default ImageSlider;
