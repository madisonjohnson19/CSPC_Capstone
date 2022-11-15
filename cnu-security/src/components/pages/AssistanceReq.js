import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Axios from 'axios';
import { width } from "@mui/system";
import "../pages/AssistanceReq.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Table from "../Table";
import { Button } from "@mui/material";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";


function AssistanceReq() {
  const [showOpen, setShowOpen] = useState(true)
  const [showResolve, setShowResolve] = useState(false)
  const [showStudent, setShowStudent] = useState(false)
  const [showStudentInfo, setShowStudentInfo] = useState(false)
  const [studentInfo, setStudentInfo] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  let cnuID="";
  let time ="";
  let reportId="";
  let location ="";
  const [category, setCategory] = useState([]);
  const [resolve, setResolve] = useState([]);
  
  

  useEffect(() => {
    const getcategory = async () => {
    Axios('http://localhost:3001/api/get/report')
      .then(res => setCategory(res.data))
      .catch(err => console.log(err))
      // console.log("C: ",category)
    };
  
    
    getcategory();

  }, []);
  // useEffect(() => {
  //   const getcategory1 = async () => {
  //   Axios(`http://localhost:3001/api/get/users/${cnuID}`)
  //     .then(res => setStudentInfo(res.data))
  //     .catch(err => console.log(err))
  //     console.log("C: ",studentInfo)
  //   };
  
    
  //   getcategory1();

  // }, []);
  // useEffect(()=>{
  //   HandleOpen("12345");
  // })

  const HandleOpen = (c) => {
    console.log("HandleOpen ID: "+c)
    {setSetStudentInfo()}
    Axios.get(`http://localhost:3001/api/get/users/${c}`)
    .then(res => setStudentInfo(res.data))
      .catch(err => console.log("FDS " +err))
      
    // setStudentInfo(response.data);
    console.log("SI "+studentInfo[0].lastName)
    
  };
  
 

  
  const handleClick = async (e) => {
    const instance = Axios.create();
    
    // e.preventDefault();
    try {
      // e.preventDefault();
      await instance.post("http://localhost:3001/api/get/report/moveOpenToResolve", {aRID: reportId, dateTime:time, location: location});
      
      await instance.post("http://localhost:3001/api/delete/moveOpenToResolve", {aRID: reportId});
      window.location.reload();
      console.log("pOSTED BITCH: "+ time)
      // navigate("/");
    } catch (err) {
      console.log("ERRO: " +err);
      // setError(true)
    }
  };
  const onClick = () =>{ setShowOpen(true); 
     setShowResolve(false);
    }
  const onClickResolve = () => {setShowResolve(true);setShowOpen(false);
    // window.location.reload();
  }
  const deleteData = (dataId) => {
    reportId=(dataId.aRID)
    time=(dataId.dateTime)
    location=(dataId.location)
    
    handleClick();
  };
  const setSetCNUID=(cnuID)=>{
    
    cnuID =(cnuID.CNUID)
    console.log("CNUID IN AR:"+cnuID)
    HandleOpen(cnuID);
  }
  const setSetStudentInfo =()=>{
    setShowStudentInfo(true)
  }

  const handleClickToOpen = (d) => {
    console.log("handleClickToOpen")
    setSetCNUID(d);
    
    // handleToOpenStudent();
    setOpen(true);
    setShowStudent(true);
    
    
  };
  
  const handleToClose = () => {
    // window.location.reload();
    setOpen(false);
  };
  const handleToCloseStudent = () => {
    // window.location.reload();
    setShowStudent(false);
  };
  



  return (
    <React.Fragment>
      <Container>
        {showStudent && 
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Student Info"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
            {showStudentInfo}
            {showStudentInfo &&
            <div>
            Student First Name: {studentInfo[0].firstName} <br/>
            Student Last Name: {studentInfo[0].lastName}
        </div>
            }
      
            
            {/* {studentInfoLoader()} */}
          </DialogContentText>
          
          {/* <Button onClick={handleUpdate}>Update</Button> */}
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={handleToCloseStudent} 
                  color="primary" autoFocus>
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
      }

      <div className="container">
            <div className="buttons">  
              <Button  className="b" onClick={onClick}
              style={{
                backgroundColor:"grey",
                marginRight:"20px"
                }} >Open</Button>
              <Button className="b" onClick={onClickResolve}
              style={{
                backgroundColor:"grey",
          
              }} 
              >Resolved</Button>

              
            </div>
          


        <div className="t1">
     
        {showOpen && <h1 className="title">Open Request</h1>}
          {showOpen   && <table className="table table-bordered text-white">
       
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Location</th>
                <th>Student ID</th>
                <th>DateTime</th>
                <th>Resolve</th>
              </tr>
            </thead>
            <tbody>
              {category.map((getcate) => (
                  
                <tr key={getcate}>
                  <td>{getcate.aRID}</td>
                  <td> {getcate.location}</td>
                  {/* onClick={handleClickToOpen()} */}
                  <td> <button onClick={() => handleClickToOpen(getcate)}  className="btn btn-success"> {getcate.CNUID}</button></td>
                  <td> {getcate.dateTime}</td>
                  <td><button onClick={() => deleteData(getcate)} className="btn btn-success"> Resolve </button> </td>
                </tr>
              ))}
            </tbody>
          </table>}
          

          </div>
          {showResolve==true && <h1 className="title">Resolved Requests</h1>}

          {showResolve==true &&<table className="table table-bordered text-white">
           
            <thead>
              <tr>
                <th>Report ID</th>
                <th>Location</th>
                <th>DateTime</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {resolve.map((getcate1) => (
                  
                <tr key={getcate1}>
                  <td>{getcate1.aRID}</td>
                  <td> {getcate1.location}</td>
                  <td> {getcate1.dateTime}</td>
                  <td><button onClick={() => deleteData(getcate1)} className="btn btn-success"> View </button> </td>
                </tr>
              ))}
            </tbody>
          </table>}
          
        
        </div>      
      </Container>
    </React.Fragment>
  );
}

export default AssistanceReq;






