import React from 'react'
import cakeAds from '../Assets/cakeAds.mp4'

const SectionFour = () => {
  return (
    <div className='SectionFour'>
        <video src={cakeAds} autoPlay loop muted /> 
        <video src={cakeAds} autoPlay loop muted /> 
    </div>
  )
}

export default SectionFour