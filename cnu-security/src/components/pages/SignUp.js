import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SignIn.css';
import Button, { ButtonProps }  from '@mui/material/Button';


async function SignIn(credentials) {
 return fetch('http://localhost:3000/signin', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}

export default function SignUp({ setToken }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [cnuID, setcnuID] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [EmergencyContactName, setEmergencyContactName] = useState();
  const [EmergencyContactRelationship, setEmergencyContactRelationship] = useState();
  const [EmergencyContactPhoneNumber, setEmergencyContactPhoneNumber] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await SignIn({
      firstName,
      lastName,
      cnuID,
      phone,
      email,
      address,
      EmergencyContactName,
      EmergencyContactRelationship,
      EmergencyContactPhoneNumber

    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label >
          <p className='firstName'>First Name</p>
          <input type="text" onChange={e => setFirstName(e.target.value)} />
        </label>
        <label>
          <p className='lastName'>Last Name</p>
          <input type="lastName" onChange={e => setLastName(e.target.value)} />
        </label>
        <label>
          <p className='cnuID'>CNU ID</p>
          <input type="cnuID" onChange={e => setcnuID(e.target.value)} />
        </label>
        <label>
          <p className='phone'>Phone</p>
          <input type="phone" onChange={e => setPhone(e.target.value)} />
        </label>
        <label>
          <p className='email'>CNU Email</p>
          <input type="email" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p className='address'>Address (While at school)</p>
          <input type="address" onChange={e => setAddress(e.target.value)} />
        </label>
        <label>
          <p className='EmergencyContactName'>Emergency Contact Name</p>
          <input type="EmergencyContactName" onChange={e => setEmergencyContactName(e.target.value)} />
        </label>
        <label>
          <p className='EmergencyContactRelationship'>Emergency Contact Relationship</p>
          <input type="EmergencyContactRelationship" onChange={e => setEmergencyContactRelationship(e.target.value)} />
        </label>
        <label>
          <p className='EmergencyContactPhoneNumber'>Emergency Contact Phone Number</p>
          <input type="EmergencyContactPhoneNumber" onChange={e => setEmergencyContactPhoneNumber(e.target.value)} />
        </label>

        <div  >
        <Button 
             style={{
              color:"#fff",
              width:"250px",
              borderColor: 'white',
              backgroundColor: "#3E3E42",
              padding: "8px 26px",
              fontSize: "18px",
              marginTop: "20px"
            
          }}
            >
                Sign In
            </Button>
            </div>
                  <Button 
                  style={{
                    color:"#fff",
                    width:"250px",
                    borderColor: 'white',
                    backgroundColor: "#5286db",
                    // padding: "8px 26px",
                    fontSize: "18px",
                    marginTop: "20px"
                  
                }}
                  href='/signUp'>Create an Account</Button>

          
        

      </form>
    </div>
  )
}

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired
};