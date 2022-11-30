import React from 'react'
import Button, { ButtonProps }  from '@mui/material/Button';
import "./pdDashboard.css"


function pdDashboard() {
  return (
    <div className="page">
    <h1   className='header'>View Reports</h1>

    <section>
      <Button variant="contained" className='buttons-fun' 
      style={{
        background:"#3E4043",
        padding:"0px 0px",
        height:"110px",
        width:"110px",
        margin:"10px",
        textAlign:"center"
      }}href="/viewAssistance"> Assistance Requested </Button>
      <Button variant="contained" className='buttons-fun'
      style={{
        background:"#3E4043",
        padding:"0px 0px",
        height:"110px",
        width:"110px",
        margin:"10px",
        textAlign:"center"
      }}
      href="/ViewReports">Crime Reports</Button>
      <Button  variant="contained"className='buttons-fun'
      style={{
        background:"#3E4043",
        padding:"0px 0px",
        height:"110px",
        width:"110px",
        margin:"10px",
        textAlign:"center"
      }} href="/viewCampusReports">Campus Reports</Button>
      
      
     
    </section>

 
  </div>
  )
}

export default pdDashboard