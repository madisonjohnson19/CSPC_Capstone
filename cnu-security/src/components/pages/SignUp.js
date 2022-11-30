import React,{ useEffect } from "react";
import PropTypes from 'prop-types';
import './SignIn.css';
import Button, { ButtonProps }  from '@mui/material/Button';
import BasicSnackbar from '../../hooks/useSnackbar';
import Axios from 'axios';
import { useState }  from 'react';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  backgroundColor:"#0c1c38",
  fontWeight:"bold",
  padding: theme.spacing(1),
  textAlign: 'center',
  color: "White",
}));
const SignUp = () =>{

// export default function SignUp({ setToken }) {
  const [printAll , setprintAll]=useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cnuID, setcnuID] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [EmergencyContactName, setEmergencyContactName] = useState('');
  const [EmergencyContactRelationship, setEmergencyContactRelationship] = useState('');
  const [EmergencyContactPhoneNumber, setEmergencyContactPhoneNumber] = useState('');
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



  
  
    const [error,setError] = useState(false)
  
    const navigate = useNavigate();
  
  
    const handleClick = async (e) => {
      const instance = Axios.create();
      console.log("handleClick: "+cnuID)
      
      // await Axios.post("http://localhost:3001/api/insert/test", "firstName");
      e.preventDefault();
      try {
        e.preventDefault();
        await instance.post("http://localhost:3001/api/insert/test", {firstname:firstName,
        lastName: lastName, 
        cnuID: cnuID,
        email: email,
        phone: phone,
        EmConName: EmergencyContactName,
        EmConPhone: EmergencyContactPhoneNumber,
        EmConRelation: EmergencyContactRelationship});
        {handleSnackbarClick("success", "Account Created")}
        // navigate("/");
      } catch (err) {
        {handleSnackbarClick("error", "Account Failed to be Created")}
        setError(true)
      }
    };
  


  return(
    <div className="login-wrapper">
      <h1>Register your Account:</h1>

      <div className="boxs"
      style={{width:'50%',height:"40%"}}>
      <Box sx={{ flexGrow: 4 }}>
      <Grid container  rowSpacing={2} columnSpacing={{ xs: 5, sm: 2, md: 3 }}>
        <Grid item xs={5}>
        <label style={{fontWeight:"bold"}}>  <Item>
      
          <p className='firstName'>First Name</p>
          <input style={{width:"80%",height:"30px"}} value={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} />
        
        </Item></label>
        </Grid>
        <Grid item xs={5}>
        <Item><label style={{fontWeight:"bold"}}> 
          <p className='lastName'>Last Name</p>
          <input style={{width:"80%",height:"30px"}} value={lastName}   name="firstName" onChange={e => setLastName(e.target.value)} />
          </label> </Item>
        </Grid>
        <Grid item xs={5}>
          <Item><label style={{fontWeight:"bold"}}> 
          <p className='cnuID'>CNU ID</p>
          <input  style={{width:"80%",height:"30px"}} value={cnuID}   name="firstName" onChange={e => setcnuID(e.target.value)} />
        </label></Item>
        </Grid>
        <Grid item xs={5}>
          <Item> <label style={{fontWeight:"bold"}}> 
          <p className='email'>CNU Email</p>
          <input  style={{width:"80%",height:"30px"}} value={email}   name="firstName" onChange={e => setEmail(e.target.value)} />

        </label></Item>
        </Grid>
        <Grid item xs={5}>
          <Item><label style={{fontWeight:"bold"}}> 
          <p className='phone'>Phone</p>
          <input style={{width:"80%",height:"30px"}} value={phone}   name="firstName" onChange={e => setPhone(e.target.value)} />
        </label></Item>
        </Grid>
        
        <Grid item xs={5}>
          <Item><label style={{fontWeight:"bold"}}> 
          <p className='address'>Address (While at school)</p>
          <input  style={{width:"80%",height:"30px"}} value={address}   name="firstName" onChange={e => setAddress(e.target.value)} />
        </label></Item>
        </Grid>
        <Grid item xs={10}>
          <Item> <label style={{cfontWeight:"bold"}}> 
          <p className='EmergencyContactName'>Emergency Contact Name</p>
          <input style={{width:"90%",height:"30px"}} value={EmergencyContactName}   name="firstName" onChange={e => setEmergencyContactName(e.target.value)} />
        </label></Item>
        </Grid>
        <Grid item xs={10}>
          <Item><label style={{fontWeight:"bold"}}> 
          <p className='EmergencyContactRelationship'>Emergency Contact Relationship</p>
          <input  style={{width:"90%",height:"30px"}} value={EmergencyContactRelationship}   name="firstName" onChange={e => setEmergencyContactRelationship(e.target.value)} />

        </label></Item>
        </Grid>
        <Grid item xs={10}>
          <Item><label style={{fontWeight:"bold"}}> 
          <p className='EmergencyContactPhoneNumber'>Emergency Contact Phone Number</p>
          <input 
          style={{width:"90%",height:"30px"}}
          value={EmergencyContactPhoneNumber}   name="firstName" onChange={e => setEmergencyContactPhoneNumber(e.target.value)} />

        </label></Item>
        </Grid>
      </Grid>
      <Button type="submit"
                  style={{
                    color:"#fff",
                    width:"250px",
                
                    backgroundColor: "#3E4043",
                    // padding: "8px 26px",
                    fontSize: "18px",
                    marginTop: "20px"
                  
                }}
                onClick={handleClick}
                >register</Button>
    </Box>
    <BasicSnackbar 
            open={snackbarOpen}
            onClose={handleSnackbarClose}
            severity= {severity}
            message={message}
            
        />
    
    </div>
    </div>
  )
}

export default  SignUp;


