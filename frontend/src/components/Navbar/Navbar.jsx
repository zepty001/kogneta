import React from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss'
import { Logo } from '../../assets';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'



const Navbar = () => {

    const [toggle, setToggle ] = useState(false)
  
  
    return (
      <nav className='navbar'>
        <div className='navbar-logo'>
         <Link to="/"> <img src={Logo} alt="logo" /> </Link>
        </div>
        <ul className='navbar-links'>
          {['About', 'How We Help', 'Careers', 'Blog'].map((items) =>
          <li className='app__center' key={`link-${items}`}>
            <div />
            <NavLink to={`/${items}`} > {items} </NavLink>
          </li>
          )}
          <Link to="/contact" className='nav-link-btn' style={{textDecoration:"none", margin:"0px", border:"none"}}>  <button style={{color:"white"}} className='nav-btn'> Book Your Strategy Session</button> </Link>
        </ul>
  
        <div className='navbar-menu'>
         <HiMenuAlt4 onClick={()=>setToggle(true)} />
         {toggle &&(
          <motion.div 
          whileInView={{x: [300,0]}}
          transition={{duration: 1, ease:'easeOut'}}
          >
            <HiX onClick={()=>setToggle(false)} />
            <ul>
            {['About', 'How We Help', 'Career', 'Blog'].map((items) =>
          <li key={items}>
            <NavLink to={`/${items}`} onClick={()=>setToggle(false)}  > {items} </NavLink>
          </li>
          )}
           <Link to="/contact"> <button style={{color:"white"}} className='nav-btn'> Book Your Strategy Session</button></Link>

          </ul>
          </motion.div>
          )}
        </div>
      </nav>
    )
  }
  
  export default Navbar
