// import React, { useEffect } from "react";
// import './App.css';
// import { useState }  from 'react';
// import Axios from 'axios';


// function App(){
// const [usernameReg, setUsernameReg]=useState("");
// const [passwordReg, setPasswordReg]=useState("");
// const [printAll , setprintAll]=useState([]);

// useEffect(()=>{
//   Axios.get('http://localhost:3001/api/get').then((response)=>{
//     setprintAll(response.data)
//   })
// },[])

// const register =()=>{
//   console.log("REGISTER WAS CALLED");
//   Axios.post('http://localhost:3001/api/insert',{
//     username:usernameReg,
//     password:passwordReg,
// }).then((response)=>{
//   alert("SUCCESSFUL INSERT SO SMART")
// });
  
// };

//   return(
//     <div className="App">
//       <div className="registration">
//         <h1>registration</h1>
//         <label>Username</label>
//         <input type="text"
//         onChange={(e) =>{
//           setUsernameReg(e.target.value);
//         }}/>

//         <label>password</label>
//         <input type="text" onChange={(e)=>{
          
//           setPasswordReg(e.target.value);
//         }}/>
//         <button
//         onClick={register }>Register</button>
//       </div>
//       <div className="login">
//         <h1>Log In</h1>
//         <input type="text" placeholder="Username...."/>
//         <input type="password" placeholder="Password...."/>
//         <button>Register</button>

//         {printAll.map((val)=>{
//           return <h1>PEEPS: {val.name} | {val.designation}</h1>
//         })}

//       </div>


//     </div>
//   );
// }
// export default App;

import './App.css';
import React, { useState }  from 'react';

import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import More from './components/pages/More'
import SecurityResources from './components/pages/SecurityResourcs';
import CampusMap from './components/pages/CampusMap';
import SilentWitness from './components/pages/SilentWitness';
import ReportCrime from './components/pages/ReportCrime';
import RequestEscort from './components/pages/RequestEscort';
import UserReports from './components/pages/UserReports';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import PdDashboard from './components/pages/pdDashboard';
import AssistanceReq from './components/pages/AssistanceReq';
import useToken from './components/useToken';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
function App() {
  const { token, setToken } = useToken();
  const { e, d } = useToken();
  if(!token) {
    return <SignIn setToken={setToken} />
  }
 
  return (

    
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/more' exact element={<More/>}/>
        <Route path="/securityreources" exact element={<SecurityResources />} />
        <Route path="/campusmap" exact element={<CampusMap />} />
        <Route path="/silentwitness" exact element={<SilentWitness />} />
        <Route path="/reportCrime" exact element={<ReportCrime />} />
        <Route path="/requestEscort" exact element={<RequestEscort />} />
        <Route path="/userReports" exact element={<UserReports />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signUp" exact element={<SignUp />} />
        <Route path="/pdDashboard" exact element={<PdDashboard />} />
        <Route path="/viewAssistance" exact element={<AssistanceReq />} />

      </Routes>
    </Router>  
    </>
  );
}

export default App;