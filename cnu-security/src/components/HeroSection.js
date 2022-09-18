import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'




function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='cnu-security\public\videos\video-2.mp4' autoPlay loop muted/>
        <h1>SAFE</h1>
        <p>CALL NOW</p>
        <div className ='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
               CALL CNU PD <i className='far fa-play-cirle'/> 
            </Button>
            

        </div>

    </div>
  )
}

export default HeroSection