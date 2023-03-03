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
        <HashLink smooth to={"/webify/#home"}>Home</HashLink>
        <HashLink smooth to={"/webify/#about"}>About</HashLink>
        <HashLink smooth to={"/webify/#brands"}>Brands</HashLink>
        <HashLink to={"/webify/services"}>Services</HashLink>
        <Link to={"webify/contact"}>Contact</Link>

        </main>
    </nav>
  )
}

export default Header