import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Carousel2.css'

function Carousel2() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }
  return (
    <>
        <div className='header'>
            <h4>Our Clients</h4>
        </div>
        <div className='image'>
            <Carousel responsive={responsive}>
                <img className='img' src='./1.jpeg' alt='1' />
                <img className='img' src='./2.png' alt='2' />
                <img className='img' src='./3.jpeg' alt='3' />
                <img className='img' src='./4.jpeg' alt='4' />
                <img className='img' src='./5.jpeg' alt='5' />
                <img className='img' src='./6.jpeg' alt='6' />
                <img className='img' src='./7.jpg' alt='7' />
                <img className='img' src='./8.jpg' alt='8' />
                <img className='img' src='./9.jpg' alt='9' />
                <img className='img' src='./10.jpeg' alt='10' />
                <img className='img' src='./11.jpg' alt='11' />
                <img className='img' src='./12.jpg' alt='12' />
                <img className='img' src='./13.jpeg' alt='13' />
                <img className='img' src='./14.jpg' alt='14' />
                <img className='img' src='./15.png' alt='15' />
            </Carousel>
        </div>
    </>
  )
}

export default Carousel2