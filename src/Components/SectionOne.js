import React from 'react'
import images from '../carousel/images'
import ImageSlider from '../carousel/ImageSlider'

const SectionOne = () => {
  return (
    <div className='SectionOne'>
        <ImageSlider images={images}/> 
    </div>
  )
}

export default SectionOne