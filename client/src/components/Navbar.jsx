import './NavbarStyle.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  {FaBars, FaTimes } from 'react-icons/fa'



const Navbar = () => {

  const [click, setClick] = useState(false)
  const [color, setColor] = useState(false)


  const handleClick = (e) => {
    setClick(!click);
  }

  const changeColor = () => {
    if(window.scrollY >=100) {
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Hackathon</h1>
        </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Prizes">Prizes</Link></li>
                <li><Link to="/Schedule">Schedule</Link></li>
                <li><Link to="/FAQ">FAQ</Link></li>
                <li><Link to="/Signup">Signup</Link></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
              {click ? (<FaTimes size={20} style={{color: "white"}}/>)
              : (<FaBars size={20} style={{color: "white"}}/>)}
            </div>
    </div>
  )
}

export default Navbar