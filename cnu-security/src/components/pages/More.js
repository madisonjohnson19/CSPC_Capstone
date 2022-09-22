import React from 'react'
import Button from '@mui/material/Button';
import './More.css'
import GridLayout from "react-grid-layout";

function More() {
  const layout = [
    { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
    { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
    { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
    { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
    { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
  ];

  return (
   
    <div className="page">
    <h1 className='header'>Could be anything</h1>
    <p>
      maybe instructions?
    </p>
    <GridLayout layout={layout} cols={5} rowHeight={300} width={1000}>
      <div className="buttons-wrapper">
        <div className="button-wrapper">
          <Button className='buttons-fun'>Default Butto1n</Button>
        </div>
        <div className="button-wrapper">
          <Button text className='buttons-fun'>Text Button</Button>
        </div>
        <div className="button-wrapper">
          <Button bordered className='buttons-fun'>Bordered Button</Button>
        </div>
        <div className="button-wrapper">
          <Button className='buttons-fun'>Default Button</Button>
        </div>
        <div className="button-wrapper">
          <Button text className='buttons-fun'>Text Button</Button>
        </div>
        <div className="button-wrapper">
          <Button bordered className='buttons-fun'>Bordered Button</Button>
        </div>
        <div className="button-wrapper">
          <Button  className='buttons-fun'>Default Button</Button>
        </div>
        <div className="button-wrapper">
          <Button text  className='buttons-fun'>Text Button</Button>
        </div>
        <div className="button-wrapper">
          <Button bordered className='buttons-fun'>Bordered Button</Button>
        </div>
      </div>
      </GridLayout>
  </div>
  )
}

export default More