import React from 'react'
import { useState } from 'react';
import './ReportCrime.css'
import Axios from 'axios';
import { Button } from "@mui/material";
import { gridVisibleSortedTopLevelRowEntriesSelector } from '@mui/x-data-grid';
import BasicSnackbar from '../../hooks/useSnackbar';


function ReportCrime() {
  const [inputs, setInputs] = useState({});
  const [cnuID, setcnuID] = useState("");
  const [typeOfCrime, settypeOfCrime] = useState("");
  const [location, setlocation] = useState("");
  const [dates, setdates] = useState("");
  const [description, setdescription] = useState("");
  const [suspectName, setsuspectName] = useState("");
  const [vehicleDescription, setvehicleDescription] = useState("");
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

 
  const handleClick = async (e) => {
    const instance = Axios.create();
    
    // e.preventDefault();
    try {
      // e.preventDefault();
      await instance.post("http://localhost:3001/api/insert/crimeReport", {
        cnuID:cnuID, 
        typeOfCrime: typeOfCrime, 
        location: location,
        dates: dates, 
        description: description, 
        suspectName: suspectName,
        vehicleDescription: vehicleDescription
      });
      {handleSnackbarClick("success", "Crime Report has been submitted")}
    } catch (err) {
      console.log("ERRO: " +err);
      {handleSnackbarClick("error", "Crime Report has failed to be submitted")}
      // setError(true)
    }
  }; 

  return (

    <div className='form-box'>
      <form 
    // onSubmit={handleSubmit} 
    className="form">
      <h1>Report a Crime</h1>
      <h3>
      <label >Please enter your CNU ID <br></br><br></br>
      <input className='form-box-input'
      onChange={e => setcnuID(e.target.value)}
      style={{width:"150px",height:"30px"}}
      placeholder='CNU ID'>
      </input><br></br>
      </label></h3><br></br>
    
    <div className = "field1">
      <h3>
      <label>Type of Crime <br></br><br></br>
      <select className="item" value={typeOfCrime} 
      onChange={e => settypeOfCrime(e.target.value)}
      >
        <option value="Assault">Assault</option>
        <option value="Rape / Sexual Assault">Rape / Sexual Assault</option>
        
        <option value="Weapons">Weapons</option>
        <option value="Drugs">Drugs</option>
        <option value="Alcohol">Alcohol</option>
        <option value="Larceny / Theft">Larceny / Theft</option>
        <option value="Vandelism">Vandelism </option>
1        <option value="Others">Others (Please Specify Below)</option>
      </select>
      </label><br></br><br></br></h3>
    <label className="item"
    styles={{
      color:"red"
    }}>Specific location or address:
    <textarea
      type="text" 
      name="username" 
      onChange={e => setlocation(e.target.value)}

      // onChange={handleChange}
      
    />
    </label>
    <h3>
    <label>Relevant Dates / Times:
    <textarea
    onChange={e => setdates(e.target.value)}
        type="number" 
        name="age" 
        
        // onChange={handleChange}
      />
      </label></h3>
      <h3>
      <label>Description of Incident:
    <textarea
    onChange={e => setdescription(e.target.value)}
        type="number" 
        name="age" 
        
        // onChange={handleChange}
      />
      </label></h3>
      <h3>
      <label>Suspect's Name and Description:
    <textarea
    onChange={e => setsuspectName(e.target.value)}
        type="number" 
        name="age" 
        
        // onChange={handleChange}
      />
      </label></h3>
      <h3>
      <label>Vehicle Description (if applicable):
    <textarea
    onChange={e => setvehicleDescription(e.target.value)}
        type="number" 
        name="age" 

        // onChange={handleChange}
      />
      </label></h3>
      <Button 
      onClick={handleClick}
      // type="submit" 
      style={{
        color: "white",
        width:"200px",
        backgroundColor:"#3E4043" }}>Submit</Button> 
        
      </div>
      <br></br><br></br>
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

export default ReportCrime