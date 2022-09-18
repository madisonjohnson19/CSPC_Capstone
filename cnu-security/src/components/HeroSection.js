import React from 'react'
import '../App.css'
import {Button} from './Button'
import './HeroSection.css'




function HeroSection() {
  return (
    <div className='hero-container'>

        {/* <div className ='hero-btns'> */}
            <Button className='btns-red' buttonStyle='btn--danger' buttonSize='btn--large'>
                Notify Now
            </Button>
            <Button className='btns-yellow' buttonStyle='btn--warning' buttonSize='btn--large'>
               CALL CNU PD <i className='far fa-play-cirle'/>
            </Button>
            <Button className='btns-green' buttonStyle='btn--success' buttonSize='btn--large'>
               More<i className='far fa-play-cirle'/> 
            </Button>
            <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Tutorial <i className='far fa-play-circle' />
        </Button>
            

        {/* </div> */}

    </div>
  )
}

export default HeroSection