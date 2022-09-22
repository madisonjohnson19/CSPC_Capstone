import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

import './More.css'

function More() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `https://cnu.edu/police/`; 
    navigate(path);
  }

  return (
   
    <div className="page">
    <h1 className='header'>Could be anything</h1>
    <p>
      maybe instructions?
    </p>
    <section>
      <div className="buttons-wrapper">
        <div className="button-wrapper">
          <Button className='buttons-fun'> Report a Crime</Button>
        </div>
        <div className="button-wrapper">
          <Button className='buttons-fun'>Report a Crime-Anonymous</Button>
        </div>
        <div className="button-wrapper">
          <Button className='buttons-fun'>Contact PD anonymous</Button>
        </div>
        <div className="button-wrapper">
          <Button className='buttons-fun'>Citizen contribution</Button>
        </div>
        <div className="button-wrapper">
          <Button className='buttons-fun'> Request Escort</Button>
        </div>
        <div className="button-wrapper">
          <Button className='buttons-fun'>Campus Map</Button>
        </div>
        <div className="button-wrapper">
          <Button  className='buttons-fun'>View Your Reports</Button>
        </div>
        <div className="button-wrapper">
          <Button  className='btn-securityresource'
             href="/securityreources">Security Resources</Button>
        </div>
        <div className="button-wrapper">
          <Button className='buttons-fun'>Bordered Button</Button>
        </div>
      </div>
    </section>

 
  </div>
  )
}

export default More