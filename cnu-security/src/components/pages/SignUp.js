import React,{ useEffect } from "react";
import PropTypes from 'prop-types';
import './SignIn.css';
import Button, { ButtonProps }  from '@mui/material/Button';
import Axios from 'axios';
import { useState }  from 'react';
import { Link, useNavigate } from "react-router-dom";


// async function SignUp(credentials) {
//  return fetch('http://localhost:3000/signin', {
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json'
//    },
//    body: JSON.stringify(credentials)
//  })
//    .then(data => data.json())
// }
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
  const [password, setPassword] = useState('');

  useEffect(()=>{
  Axios.get('http://localhost:3001/api/get/test').then((response)=>{
    setprintAll(response.data)
  })
},[])
  
  
    const [error,setError] = useState(false)
  
    const navigate = useNavigate();
  
  
    const handleClick = async (e) => {
      console.log("pOSTED BITCH: "+ firstName)
      e.preventDefault();
      try {
        e.preventDefault();
        await Axios.post("http://localhost:3001/api/insertt", firstName);
        
        navigate("/");
      } catch (err) {
        console.log(err);
        setError(true)
      }
    };
  


  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form >
        <label >
          <p className='firstName'>First Name</p>
          <input value={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} />
        </label>
        <label>
          <p className='lastName'>Last Name</p>
          <input value={lastName}   name="firstName" onChange={e => setLastName(e.target.value)} />
        </label>
        <label>
          <p className='cnuID'>CNU ID</p>
          <input value={cnuID}   name="firstName" onChange={e => setcnuID(e.target.value)} />
        </label>
        <label>
          <p className='phone'>Phone</p>
          <input value={phone}   name="firstName" onChange={e => setPhone(e.target.value)} />
        </label>
        <label>
          <p className='email'>CNU Email</p>
          <input value={email}   name="firstName" onChange={e => setEmail(e.target.value)} />

        </label>
        <label>
          <p className='email'>Password</p>
          <input value={password}   name="firstName" onChange={e => setPassword(e.target.value)} />

        </label>
        <label>
          <p className='address'>Address (While at school)</p>
          <input value={address}   name="firstName" onChange={e => setAddress(e.target.value)} />
        </label>
        <label>
          <p className='EmergencyContactName'>Emergency Contact Name</p>
          <input value={EmergencyContactName}   name="firstName" onChange={e => setEmergencyContactName(e.target.value)} />
        </label>
        <label>
          <p className='EmergencyContactRelationship'>Emergency Contact Relationship</p>
          <input value={EmergencyContactRelationship}   name="firstName" onChange={e => setEmergencyContactRelationship(e.target.value)} />

        </label>
        <label>
          <p className='EmergencyContactPhoneNumber'>Emergency Contact Phone Number</p>
          <input value={EmergencyContactPhoneNumber}   name="firstName" onChange={e => setEmergencyContactPhoneNumber(e.target.value)} />

        </label>

        <div  >
       
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
                // onClick={handleClick}
                >Create an Account</Button>
                  {/* {printAll.map((val)=>{
          return <h1>PEEPS: {val.firstName} </h1>
        })}
//  */}
          
        

      </form>
    </div>
  )
}

export default  SignUp;




// import React, useNavigate ,{ useEffect } from "react";
// import PropTypes from 'prop-types';
// import './SignIn.css';
// import Button, { ButtonProps }  from '@mui/material/Button';
// import Axios from 'axios';
// import { useState }  from 'react';






// export default function SignUp({ setToken }) {
//   const [printAll , setprintAll]=useState([]);
//   // const [firstName, setFirstName] = useState();
//   // const [lastName, setLastName] = useState();
//   // const [cnuID, setcnuID] = useState();
//   // const [phone, setPhone] = useState();
//   // const [email, setEmail] = useState();
//   // const [address, setAddress] = useState();
//   // const [EmergencyContactName, setEmergencyContactName] = useState();
//   // const [EmergencyContactRelationship, setEmergencyContactRelationship] = useState();
//   // const [EmergencyContactPhoneNumber, setEmergencyContactPhoneNumber] = useState();
//   // const [password, setPassword]=useState("");

// useEffect(()=>{
//   Axios.get('http://localhost:3001/api/get').then((response)=>{
//     setprintAll(response.data)
//   })
// },[])
// // ///////////////////////////
// const Add = () => {
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     cnuID: "",
//     email: "",
//     phone: "",
//     email: "",
//     address: "",
//     EmergencyContactName: "",
//     EmergencyContactRelationship: "",
//     EmergencyContactPhoneNumber: "",
//     password: ""
//   });
//   const [error,setError] = useState(false)

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       await Axios.post("http://localhost:3001/api/insert", user);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//       setError(true)
//     }
//   };



// // ///////////////////////////

// // // const register=()=>{
  
// // //   Axios.post('http://localhost:3001/api/insert',{
// // //           cnuID:cnuID,
// // //           firstName:firstName,
// // //           lastName:"lastName",
// // //           phone:phone,
// // //           address:address,
// // //           email:email,
// // //           EmConName:EmergencyContactName,
// // //           EmConPhone:EmergencyContactPhoneNumber,
// // //           EmConRelation:EmergencyContactRelationship,
// // //           password:password
// // //       }).then((response)=>{
// // //         alert("SUCCESSFUL INSERT SO SMART "+firstName)
// // //       });
// // //   };
// // const register =()=>{
// //   console.log("REGISTER WAS CALLED");
// //   Axios.post('http://localhost:3001/api/insert',{
// //     cnuID:cnuID,
// //     firstName:firstName,
// //     lastName:"lastName",
// //     phone:phone,
// //     address:address,
// //     email:email,
// //     EmConName:EmergencyContactName,
// //     EmConPhone:EmergencyContactPhoneNumber,
// //     EmConRelation:EmergencyContactRelationship,
// //     password:password
// // }).then((response)=>{
// //   alert("SUCCESSFUL INSERT SO SMART")
// // });
  
// // };

//   return(
//     <div className="login-wrapper">
//       <h1>Please Log In</h1>
//       <form >
//         <label >
//           <p className='firstName'>First Name</p>
//           {/* <input type="text" onChange={(e) => setFirstName(e.target.value)} /> */}
//           <input type="text" onChange={handleChange} />

//         </label>
//         <label>
//           <p className='lastName'>Last Name</p>
//           <input type="lastName" onChange={handleChange} />
//         </label>
//         <label>
//           <p className='cnuID'>CNU ID</p>
//           <input type="cnuID" onChange={handleChange}/>
//         </label>
//         <label>
//           <p className='phone'>Phone</p>
//           <input type="phone" onChange={handleChange} />
//         </label>
//         <label>
//           <p className='email'>CNU Email</p>
//           <input type="email" onChange={handleChange} />
//         </label>
//         <label>
//           <p className='lastName'>Password</p>
//           <input type="password" onChange={handleChange} />
//         </label>
//         <label>
//           <p className='address'>Address (While at school)</p>
//           <input type="address" onChange={handleChange} />
//         </label>
//         <label>
//           <p className='EmergencyContactName'>Emergency Contact Name</p>
//           <input type="EmergencyContactName" onChange={handleChange} />
//         </label>
//         <label>
//           <p className='EmergencyContactRelationship'>Emergency Contact Relationship</p>
//           <input type="EmergencyContactRelationship" onChange={handleChange} />
//         </label>
//         <label>
//           <p className='EmergencyContactPhoneNumber'>Emergency Contact Phone Number</p>
//           <input type="EmergencyContactPhoneNumber" onChange={handleChange} />
//         </label>

//         <div  >
//             </div>
//                   <Button 
//                   onClick={handleClick}                                                                         
            
//                   style={{
//                     color:"#fff",
//                     width:"250px",
//                     borderColor: 'white',
//                     backgroundColor: "#5286db",
//                     // padding: "8px 26px",
//                     fontSize: "18px",
//                     marginTop: "20px"
                  
//                 }}
//                   >Create an Account</Button>
//           {printAll.map((val)=>{
//           return <h1>PEEPS: {val.firstName} | {val.lastName}</h1>
//         })}

          
        

//       </form>
//     </div>
//   )
// }
// }
// SignUp.propTypes = {
//   setToken: PropTypes.func.isRequired
// };