import React, { useState, useEffect } from "react";
import "./UserReports.css";
import Button, { ButtonProps }  from '@mui/material/Button';
import Table from "../Table";
import { Outlet, Link } from "react-router-dom";
import Axios from 'axios';


function UserReports() {
  const [cnuID, setcnuID] = useState("");
  const [category, setCategory] = useState([]);
  const [crimeReport, setCrimeReport] = useState([]);
  const [campusReport, setCampusReport] = useState([]);
  const [showStudentInfo, setShowStudentInfo] = useState(false);
  const [showCrime, setShowCrime] = useState(false);
  const [temp, setTemp] = useState("");
  const [showCNUInput, setShowCNUInput] = useState(true);
  

  const  HandleOpenCampus= async(c)=>{
    // c = "12345";
    console.log("HandleOpenCampus ID: "+c)

    try{
      console.log("TRYING")
       await Axios.get(`http://localhost:3001/api/get/userReports/campusReports/${c}`)
      .then(res => setCampusReport(res.data))
        .catch(err => console.log("FDS " +err))
        {setSetShowCrime()}
        // console.log("CR: "+crimeReport.length)
    }catch(e){
      console.log("CATCCH")
    }};


  const  HandleOpenCrime= async(c)=>{
    // c = "12345";
    console.log("HandleOpenCrime ID: "+c)

    try{
      console.log("TRYING")
       await Axios.get(`http://localhost:3001/api/get/reportCrime/crimeReport/${c}`)
      .then(res => setCrimeReport(res.data))
        .catch(err => console.log("FDS " +err))
        {setSetShowCrime()}
        // console.log("CR: "+crimeReport.length)
    }catch(e){
      console.log("CATCCH")
    }};

    const HandleOpen= async(c) =>{
      {HandleOpenCrime(c)}
      {HandleOpenCampus(c)}
      setShowCNUInput(false)
      // c = "12345";
      console.log("HandleOpen ID: "+c)
  
      try{
        console.log("TRYING")
        await Axios.get(`http://localhost:3001/api/get/reportCrime/assistanceRequest/${c}`)
        .then(res => setCategory(res.data))
          .catch(err => console.log("FDS " +err))
          {setSetStudentInfo()}
          console.log("CAT: ", category)
      }catch(e){
        console.log("CAT CATCH: ", temp[0])
        // console.log("CATCH")
      }
    };

      const setSetStudentInfo =()=>{
        // if (studentInfo[.])
        setShowStudentInfo(true)
      }
      const setSetShowCrime =()=>{
        // if (studentInfo[.])
        setShowCrime(true)
      }

  return (
    <div className='container'>
<br></br><br></br>
    <h1>
      View all your Reports
    </h1>
    
    {showCNUInput && <div> 
    
    <h2>
      <label> Please enter your CNU ID<br></br><br></br>
    

      <input
      style={{
        height:"30px",
       }}
        type="text"
        name="cnuID"
        value={cnuID}
        placeholder="CNU ID"
        
        onChange={(event) => {
          setcnuID(event.target.value);
          
        }}
      />
      </label>
      </h2>
      

      <br />
      <br />

      <Button type="submit" onClick={()=>HandleOpen(cnuID)}
      style={{
        backgroundColor:"#3E4043",
        color:"white" }}>Submit</Button>

    
</div>}

     {showStudentInfo &&<div><h3>Assistance Requests</h3>
    
    <table className="table table-bordered text-white">
       
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Location</th>
                <th>CNU ID</th>
                <th>DateTime</th>
       
              </tr>
            </thead>
            <tbody>
   
              {category.map((getcate) => (
                  
                <tr key={getcate}>
                  <td>
                    {getcate.aRID}
                    </td>
                  <td> <Link 
                  // onClick={()=>openInNewTab(getcate.location)}
                  >Google Map Location</Link></td>
                  {/* onClick={handleClickToOpen()} */}
                  <td> <button 
                  // onClick={() => handleClickToOpen(getcate)}  
                  className="btn btn-success"> 
                  {getcate.CNUID}
                  </button></td>
                  <td> 
                    {getcate.dateTime}
                    </td>
                 
                </tr>
              ))}
          
            </tbody>
          </table>
          </div>}
           


          {showCrime && <div><h3>Crime Reports</h3> 
          <table className="crimeTable">
       
            <thead>
              <tr>
              <th>Report ID</th>
                <th>Type of Crime</th>
                <th>Location</th>
                <th>Date(s)</th>
                <th>Description</th>
                <th>Suspect Information</th>
                <th>Vehicle Description</th>
              </tr>
            </thead>
            <tbody>
              {crimeReport.map((getcate) => (
                  
                <tr key={getcate}>
                  <td>
                    {getcate.crimeID}
                    </td>
          
                  {/* onClick={handleClickToOpen()} */}
                  <td> 
          
           
                  {getcate.typeOfCrime}
                  </td>
                  <td> 
                    {getcate.location}
                    </td>
                  <td> 
                    {getcate.dates}
                    </td>
                    <td> 
                    {getcate.description}
                    </td>
                    <td> 
                    {getcate.suspectName}
                    </td>
                    <td> 
                    {getcate.vehicleDescription}
                    </td>
           
                </tr>
              ))}
            </tbody>
          </table>
          </div>}
          {showCrime && <div><h3>Campus Reports</h3> 
          <table className="campusTable">
       
            <thead>
              <tr>
              <th>Report ID</th>
                <th>CNU ID</th>
                <th>Location</th>
                <th>Reported Problem</th>
           
              </tr>
            </thead>
            <tbody>
              {campusReport.map((getcate) => (
                  
                <tr key={getcate}>
                  <td>
                    {getcate.campusReportID}
                    </td>
          
                  {/* onClick={handleClickToOpen()} */}
                  <td> 
          
           
                  {getcate.cnuID}
                  </td>
                  <td> 
                    {getcate.location}
                    </td>
                  <td> 
                    {getcate.problem}
                    </td>
                   
           
                </tr>
              ))}
            </tbody>
          </table>
          </div>}

   
      
      
      
      



    </div>
  )
}

export default UserReports