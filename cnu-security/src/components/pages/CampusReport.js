import React,{ useEffect } from "react";
import PropTypes from 'prop-types';
import './CampusReport.css';
import Button, { ButtonProps }  from '@mui/material/Button';
import Axios from 'axios';
import { useState }  from 'react';
import { Link, useNavigate } from "react-router-dom";
import BasicSnackbar from '../../hooks/useSnackbar';

function CampusReport() {
    const [cnuID, setcnuID] = useState('');
    const [location, setLocation] = useState('');
    const [problem, setProblem] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [severity, setSeverity] = useState('');
  const [message, setMessage] = useState('');
  const handleSnackbarClick = (severity1,message1) => {

    console.log("snackbar called "+severity)
    setSeverity(severity1)
    setMessage(message1)
    console.log("snackbar called "+severity+ " "+message)
    setSnackbarOpen(true);
  } ;

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

    const handleClick=async (e)=>{
      const instance = Axios.create();
     
      try {
        // e.preventDefault();
        await instance.post("http://localhost:3001/api/insert/campusreport", 
        {cnuID: cnuID, location:location, problem: problem});
        {handleSnackbarClick("success", "Campus Report has been submitted")}
        
      
          // window.location.reload();
        // navigate("/");
      } catch (err) {
        console.log("ERRO: " +err);
      {handleSnackbarClick("error", "Campus Report has failed to be submitted")}

        // setError(true)
      }
    };

  return (
    <div className="container">
        <h1>Campus Report</h1>
        <h3 >Please use this form to report any issues with campus infrastructure.</h3>
        <h3>Such as potholes, broken aminities, lack of lighting.</h3>
        <form >
        <label >
          <p className='cnuid'>CNU ID</p>
          <input   name="cnuID" onChange={e => setcnuID(e.target.value)}
          style={{"overflowWrap": "break-word",'whiteSpace': 'unset' }} />
        </label>
        <div className="mj">
        <label >
          <p className='cnuid'>Where is the issue located:</p>
          <textarea  className='inputt' name="cnuID" onChange={e => setLocation(e.target.value)} 
          style={{"overflowWrap": "break-word",'whiteSpace': 'unset' }}/>
        </label>
        <label >
          <p className='cnuid'>Please explain the issue:</p>
          <textarea  className='inputt' name="cnuID" onChange={e => setProblem(e.target.value)} 
          style={{"overflowWrap": "break-word",'whiteSpace': 'unset' }}/>
        </label>
        <Button 
        style={{color:"white",backgroundColor:"gray", width:"150px"}}
        onClick={handleClick}>Submit</Button>

        </div>
        





        </form>
        
        <BasicSnackbar 
            open={snackbarOpen}
            onClose={handleSnackbarClose}
            severity= {severity}
            message={message}
            
        />
    
    
    
    
    </div>
  )
}

export default CampusReport