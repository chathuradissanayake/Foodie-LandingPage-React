import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import React, { useState } from 'react';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from 'react-icons/hi2';
import Logo from "../Assets/Logo.svg";


const NavBar = () => {
  const  [openManu, setOpenManu] =useState(false)
  const manuOptions = [
    {
      text: "Home",
      icon:<HomeIcon/>
    },
    {
      text: "About",
      icon:<InfoIcon/>
    },
    {
      text: "Testimonials",
      icon:<CommentRoundedIcon/>
    },
    {
      text: "Contact",
      icon:<PhoneRoundedIcon/>
    },
    {
      text: "Cart",
      icon:<ShoppingCartRoundedIcon/>
    }
  ]

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt=''/>
      </div>

      <div className='navbar-links-container'>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Testimonials</a>
        <a href=''>Contact</a>
        <a href=''>
          <BsCart2 className='navbar-cart-icon'/>
        </a>
        <button className='primary-button'>Booking Now</button>
      </div>
      <div className='navbar-manu-contain'>
        <HiOutlineBars3 onClick={() => setOpenManu(true)}/>
      </div>
    </nav>
  )
}

export default NavBar