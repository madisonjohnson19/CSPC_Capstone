
  import React, { useState, useEffect } from "react";
  import { Container } from "react-bootstrap";
  import Axios from 'axios';
  import { width } from "@mui/system";
  import "../pages/viewReports.css";
  import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
  import Table from "../Table";
  import { Button } from "@mui/material";
  import Dialog from "@material-ui/core/Dialog";
  import DialogContentText from "@material-ui/core/DialogContentText";
  import DialogTitle from "@material-ui/core/DialogTitle";
  import DialogActions from "@material-ui/core/DialogActions";
  import DialogContent from "@material-ui/core/DialogContent";
  import { Outlet, Link } from "react-router-dom";
  import useStudentExist from "../../hooks/useStudentExist";
  import Stack from '@mui/material/Stack';
  
  
  
  
  function ViewCampusReports() {
    const [cnuID, setcnuID] = useState('');
    const [showOpen, setShowOpen] = useState(true)
    const [showResolve, setShowResolve] = useState(false)
    const [showStudent, setShowStudent] = useState(false)
    const [showStudentInfo, setShowStudentInfo] = useState(false)
    const [studentInfo, setStudentInfo] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    // let cnuID="1";
    let cnuID1 ="";
    let problem="";
    let location ="";
    let reportId="";
    // let exists = useStudentExist(cnuID);
    const [category, setCategory] = useState([]);
    const [resolve, setResolve] = useState([]);
    
    
  
    useEffect(() => {
      const getcategory = async () => {
      Axios('http://localhost:3001/api/get/campusReport')
        .then(res => setCategory(res.data))
        .catch(err => console.log(err))
        // console.log("C: ",category)
      };
      getcategory();
  
    }, []);
    useEffect(() => {
      const getcategory = async () => {
      Axios('http://localhost:3001/api/get/resolved_campusreport')
        .then(res => setResolve(res.data))
        .catch(err => console.log(err))
        // console.log("C: ",category)
      };
  
    
    getcategory();
  }, []);
    
  
    const HandleOpen = async(c) => {
      console.log("HandleOpen ID: "+c)
  
      try{
        console.log("TRYING")
        await Axios.get(`http://localhost:3001/api/get/users/${c}`)
        .then(res => setStudentInfo(res.data))
          .catch(err => console.log("FDS " +err))
          // console.log("HandleOpen fName: "+studentInfo[0].firstName)
          {setSetStudentInfo()}
      }catch(e){
        console.log("CATCCH")
      }};
    
   
  
    
    const handleClick = async (e) => {
      console.log("handleClick: "+reportId)
      const instance = Axios.create();
      
      // e.preventDefault();
      try {
        // e.preventDefault();
        await instance.post("http://localhost:3001/api/get/campus/moveOpenToResolve", {
          cnuID: cnuID, location:location, problem: problem});
        
        await instance.post("http://localhost:3001/api/delete/campus/moveOpenToResolve", {campusReportID: reportId});
        window.location.reload();
        console.log("pOSTED BITCH: ")
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
      cnuID1 =(dataId.cnuID);
      problem=(dataId.problem);
      location =(dataId.location);
      reportId=(dataId.campusReportID);;
      // reportId=(dataId.aRID)
      // time=(dataId.dateTime)
      // location=(dataId.location)
      
      handleClick();
    };
    const setSetCNUID=(cnuID)=>{
      
      cnuID =(cnuID.cnuID)
      console.log("CNUID IN AR:"+cnuID)
      HandleOpen(cnuID);
    }
    const setSetStudentInfo =()=>{
      // if (studentInfo[.])
      setShowStudentInfo(true)
    }
  
  
    const handleClickToOpen = (d) => {
      console.log("handleClickToOpen: "+d.cnuID)
      setSetCNUID(d);
      setcnuID(d.cnuID);
      
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
              
  
              {showStudentInfo &&
              <div>
              Student First Name: {studentInfo[0].firstName} <br/>
              Student Last Name: {studentInfo[0].lastName} <br/>
              CNU ID: {studentInfo[0].cnuID} <br/>
              Phone:{studentInfo[0].phone} <br/>
              CNU Email:{studentInfo[0].email} <br/>
              {/* Address:{studentInfo[0].firstName} <br/> */}
              Emergency Contact Phone: {studentInfo[0].EmConPhone} <br/>
              Emergency Contact Name: {studentInfo[0].EmConName} <br/>
              Emergency Contact Relationship: {studentInfo[0].EmConRelation} 
  
          
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
          <div className="description">
            View Campus Reports
          </div>
              <div className="buttons">  
              <Stack justifyContent={"center"} spacing={2} direction="row">
                <Button  className="b" onClick={onClick}
                style={{
                  backgroundColor:"#3E4043",
                 
                 
                  }} >Open</Button>
                <Button className="b" onClick={onClickResolve}
                style={{
                  backgroundColor:"#3E4043",
                  }} 
                >Resolved</Button>
                </Stack>
  
                
              </div>
            
  
  
          <div className="dates">
       
          {showOpen && <h1 className="title">Open Campus Reports</h1>}
            {showOpen   && <table className="dates" style={{width: "600"}}>
         
              <thead>
                <tr>
                <th>Report Number:</th>
             <th>Student ID:</th>
             <th>Location:</th>
             <th>Problem Description:</th>
             <th>Resolve:</th>
                 
                </tr>
              </thead>
              <tbody >
                {category.map((getcate) => (
                    
                  <tr key={getcate}>
                    <td>{getcate.campusReportID}</td>
                    
                    
                    <td> <button onClick={() => handleClickToOpen(getcate)}  className="btn btn-success"> {getcate.cnuID}</button></td>
                    <td style={{"overflowWrap": "break-word",'whiteSpace': 'unset' }}>{getcate.location}</td>
                    <td style={{"overflowWrap": "break-word",'whiteSpace': 'unset' }}> {getcate.problem}</td>
                    
                 <td style={{"overflowWrap": "break-word",'whiteSpace': 'unset' }}> <button onClick={() => deleteData(getcate)}  className="btn btn-success"> Resolve</button></td>
                   
                  </tr>
                ))}
              </tbody>
            </table>}
            
  
            </div>
            {showResolve==true && <h1 className="title">Resolved Reports</h1>}
  
            {showResolve==true &&<table className="dates" style={{width: "600"}}>
         
         <thead>
           <tr>
           <th>Report Number:</th>
             <th>Student ID:</th>
             <th>Location:</th>
             <th>Problem Description:</th>
          
            
           </tr>
         </thead>
         <tbody >
           {resolve.map((getcate) => (
               
             <tr key={getcate}>
              <td>{getcate.resolved_campusReportID}</td>
                    
                    
                    <td> <button onClick={() => handleClickToOpen(getcate)}  className="btn btn-success"> {getcate.cnuID}</button></td>
                    <td style={{"overflowWrap": "break-word",'whiteSpace': 'unset' }}>{getcate.location}</td>
                    <td style={{"overflowWrap": "break-word",'whiteSpace': 'unset' }}> {getcate.problem}</td>
                    
             </tr>
           ))}
         </tbody>
       </table>}
            
          
          </div>      
        </Container>
      </React.Fragment>
    );
  }
  
  export default ViewCampusReports;
  
  
  
  
  
  
  