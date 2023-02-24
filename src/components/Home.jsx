import React, { Fragment } from 'react';
import waiting from "../assets/waiting.png";
import { AiFillAmazonCircle, AiFillApple, AiFillTwitterCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai";


const Home = () => {
  return (
    <Fragment>
      <div className='home' id='home'>
        <main>
          <h1>6gi.com</h1>
          <p>Progress equals happiness</p>
        </main>
      </div>


      <div className='home2' id='home2'>
        <img src={waiting} alt="" />
        <div>
          <p>Just wanted to let you know that you're pretty
            much my most favorite of all time in the history of ever</p>
        </div>
      </div>


      <div className="home3" id='about'>
        <div className="card">
          <h2>about us</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quidem nisi accusamus exercitationem odit quas optio harum odio
            praesentium ipsam fugit. Debitis consequatur doloremque
            delectus sed aut enim nesciunt repellendus libero.
            sticky = fixed + absolute(will not tak space)
          </p>
        </div>
      </div>


      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: '0.3s' }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: '0.5s' }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: '0.7s' }}>
              <AiFillTwitterCircle />
              <p>Twitter</p>
            </div>
            <div style={{ animationDelay: '0.9s' }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: '1.1s' }}>
              <AiFillApple />
              <p>Apple</p>
            </div>
          </article>
        </div>
      </div>
    </Fragment>
  );
}

export default Home