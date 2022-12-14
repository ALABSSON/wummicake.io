import React, { useState } from 'react'
import Logo from '../Assets/logo3.png'
// import Typography from "@mui/material/Typography";
// import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import MenuIcon from "@mui/icons-material/Menu";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [homeTab, setHomeTab] = useState (true)
  const [aboutTab, setAboutTab] = useState (false)
  const [productTab, setProductTab] = useState (false)
  const [contactTab, setContactTab] = useState (false)
  
  const [signInTab, setSignInTab] = useState (false)
  const [signUpTab, setSignUpTab] = useState (false)

  return (
    <div className='HeadersPart'>
        <div className='HeadersPartWrap'> 
            <div className='LogoDiv'> <img src={Logo} alt='Logo' />  </div>
            <ul> 
                <li
                    onClick={()=>{
                      setHomeTab(true)
                      setAboutTab(false)
                      setProductTab(false)
                      setContactTab(false)
                    }}
                  >  {
                    homeTab ? (
                        <div className='homeTabT'> Home </div>
                      ): <div className='homeTabF'> Home </div>
                  } </li>

                <li
                    onClick={()=>{
                      setAboutTab(true)
                      setHomeTab(false)
                      setProductTab(false)
                      setContactTab(false)
                    }}
                    > {
                      aboutTab ? (
                          <div className='homeTabT'> About </div>
                        ): <div className='homeTabF'> About </div>
                    } </li>

                <li
                    onClick={()=>{
                      setProductTab(true)
                      setHomeTab(false)
                      setAboutTab(false)
                      setContactTab(false)
                    }}
                    > {
                      productTab ? (
                          <div className='homeTabT'> Products </div>
                        ): <div className='homeTabF'> Products </div>
                    } </li>

                <li
                    onClick={()=>{
                      setContactTab(true)
                      setHomeTab(false)
                      setAboutTab(false)
                      setProductTab(false)
                    }}
                    > {
                      contactTab ? (
                          <div className='homeTabT'> Contact Us </div>
                        ): <div className='homeTabF'> Contact Us </div>
                    } </li>
            </ul>

            

            <div className='AccountD'> 
                <li
                    onClick={()=>{
                      setSignInTab(true)
                      setSignUpTab(false)
                    }}
                  >  {
                    signInTab ? (
                        <div className='SignInT'> Sign in </div>
                      ): <div className='SignInF'> Sign in </div>
                  } </li>
                
                <li 
                    onClick={()=>{
                      setSignInTab(false)
                      setSignUpTab(true)
                    }}
                  >  {
                    signUpTab ? (
                        <div className='SignInT'> Register </div>
                      ): <div className='SignInF'> Register </div>
                  } </li>
            </div>

        <div className="IconTesting"> 
            <button className="MobMenuDiv"> 
                <MenuIcon />
            </button>

            {/* <div className="MenuList"> 
                <Typography>More</Typography>
                <ExpandMoreOutlinedIcon />
                <Typography>Menu</Typography>
                <MenuIcon />
                <Typography>Cart</Typography>
                <ShoppingCartIcon />
            </div> */}
        </div>

      </div>

    </div>
  )
}

export default Header