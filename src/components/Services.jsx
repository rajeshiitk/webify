import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
const Services = () => {
  return (
    <div className='services'>

    <Carousel infiniteLoop autoPlay showArrows={false} showStatus={false} interval={1000}>
    <div>
    <img src={img1} alt='img1' />
    <p className='legend'> Thanda Rehne ka</p>
    </div>

    <div>
    <img src={img2} alt='img2' />
    <p className='legend'>Be Calm</p>
    </div>

    <div>
    <img src={img3} alt='img3' />
    <p className='legend'> Have Patience</p>
    </div>

    
    </Carousel>
    
    </div>
  )
}

export default Services