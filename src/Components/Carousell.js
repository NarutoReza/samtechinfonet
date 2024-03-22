import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Carousell.css'

function Carousell() {
  return (
    <>
        <div className='caro'>
            <Carousel indicators={true} interval="2000">
                <Carousel.Item className='slide'>
                    <img className='d-block w-100' src='./slider2.jpg' alt='slider2' />

                    <Carousel.Caption className='caption'>
                        <h3>CLIENT-CENTRIC</h3>
                        <p>WE SATISFY OUR CLIENTS BY EXCEEDING THEIR EXPECTATIONS OF QUALITY AND LEVEL OF SERVICE.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='slide'>
                    <img className='d-block w-100' src='./innovative.jpg' alt='innovative' />

                    <Carousel.Caption className='caption'>
                        <h3>INNOVATIVE</h3>
                        <p>WE PERFORM RESEARCH AND DEVELOPMENT EFFORTS IN SEARCH OF INNOVATIVE SOLUTIONS.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='slide'>
                    <img className='d-block w-100' src='./slider9.jpg' alt='slider9' />

                    <Carousel.Caption className='caption'>
                        <h3>RESULTS DRIVEN</h3>
                        <p>RESULTS DRIVEN SOLUTIONS ENABLING CUSTOMERS TO EXCEED POTENTIAL AND LOWER THEIR COSTS.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='slide'>
                    <img className='d-block w-100' src='./slider.jpg' alt='slider' />

                    <Carousel.Caption className='caption'>
                        <h3>EFFICIENT</h3>
                        <p>SOLVING PROBLEMS WHILE PROVIDING THE MOST EFFICIENT AND COST SAVING SOLUTIONS POSSIBLE</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </>
  )
}

export default Carousell