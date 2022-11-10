import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Axios from 'axios';
import { width } from "@mui/system";
import "../pages/AssistanceReq.css";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Table from "../Table";
import { Button } from "@mui/material";


function AssistanceReq() {
  const [showOpen, setShowOpen] = useState(true)
  const [showResolve, setShowResolve] = useState(false)
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
      console.log("C: ",category)
    };
  
    
    getcategory();

  }, []);

    useEffect(() => {
      const getcategory1 = async () => {
    Axios('http://localhost:3001/api/get/report/resolve')
      .then(res => setResolve(res.data))
      .catch(err => console.log(err))
      };
      getcategory1();
  }, []);
  
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
 




  return (
    <React.Fragment>
      <Container>
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
                  <td> {getcate.CNUID}</td>
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
              {resolve.map((getcate) => (
                  
                <tr key={getcate}>
                  <td>{getcate.aRID}</td>
                  <td> {getcate.location}</td>
                  <td> {getcate.dateTime}</td>
                  <td><button onClick={() => deleteData(getcate)} className="btn btn-success"> View </button> </td>
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






