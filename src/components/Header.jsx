import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import {HashLink} from 'react-router-hash-link';


const Header = () => {
  return (
    <nav>
      <div>
      <img src={logo} alt="logo" />
      </div>
        
        <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <HashLink to={"/services"}>Services</HashLink>
        </main>
    </nav>
  )
}

export default Header