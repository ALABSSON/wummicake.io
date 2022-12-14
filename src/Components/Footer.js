import React from 'react'
import logo from '../Assets/logo1.png'

const Footer = () => {
  return (
    <div className='Footer'>
      {/* <div className='FooterWrap'>
        <div className='FooterColumn'> 

        </div>
        <div className='FooterColumn'> </div>
        <div className='FooterColumn'> </div>
        <div className='FooterColumn'> </div>

      </div> */}

      <div className="bodydiv6">
        <div className="footerInnerOne">
          <img src={logo} alt='downlogo' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedconsectetur adipiscing elit,consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>  

        <div className="Telephone">
            <div className="in-Telephone"> 
                <p> Tel:  +1-543-123-4567</p>                
                <p> mail: example@fylo.com</p> 
            </div>

            <div className="social-div">
                <div className="circle"> F </div>
                <div className="circle">  W </div>
                <div className="circle"> I </div>
                <div className="circle"> T </div>
            </div>
        </div>
        
        <div className='FooterThre'> 
          <div className='FooterThreein'> 
              <ul className="info">
                    <li> Home </li>
                    <li> About </li>
                    <li> Product </li>
                    <li> Contact Us </li>
                </ul>
                <ul className="info">
                    <li>Press</li>
                    <li>Privacy</li>
                    <li>Blog</li>
                </ul>
          </div>

          
          <div className='FooterThreeL'> 
              <textarea placeholder='Send Feedback' />
              <button> Send </button>
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default Footer