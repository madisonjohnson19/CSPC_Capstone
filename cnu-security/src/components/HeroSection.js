import React from 'react'
import '../App.css'
// import {Button} from './Button'
import Button from '@mui/material/Button';
import './HeroSection.css'




function HeroSection() {
  return (
    <div className='hero-container'>

        {/* <div className ='hero-btns'> */}
            <Button 
             style={{
              top: "30px",
              color:"#fff",
              borderColor: 'white',
              backgroundColor: "#700f0f",
              padding: "8px 26px",
              fontSize: "18px"
          }}
            >
                Notify Now
            </Button>
            <Button className="call" 
            style={{
              top: "30px",
              color:"#fff",
              backgroundColor: "#d1c158",
              padding: "8px 26px",
              fontSize: "18px"
          }}>
               Call CNU PD 
            </Button>
            <Button
             style={{
              top: "30px",
              color:"#fff",
              backgroundColor: "#116319",
              padding: "8px 26px",
              fontSize: "18px"
          }} >
               More:
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