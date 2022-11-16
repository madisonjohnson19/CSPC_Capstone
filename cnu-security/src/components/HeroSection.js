import '../App.css'
import Button from '@mui/material/Button';
import './HeroSection.css'
import React, { useState, useEffect } from 'react';
import useGeolocation from '../hooks/useGeolocation';

// import { useHistory } from "react-router-dom";
import Axios from 'axios';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import NewWindow from 'react-new-window'
import Popout from 'react-popout'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import call from 'react-native-phone-call';
// import { useHistory ,useLocation } from 'react-router-dom';

// function googleMaps() {
//   window.location.replace('https://maps.google.com');
        
//           return "null";

// }


function HeroSection() {
  const [phone, setPhone] = useState('7575947777');
  const [open, setOpen] = React.useState(false);
  const [yes, setYes] = React.useState(false);
  const [time, setTime] = useState('');
  const [lastID, setLastID] = useState('');
  const [reportID, setReportId] = useState('');
  // const [location, setLocation] = useState('');
  let l ="";
  const location =useGeolocation();
  const current = new Date();
  const [currentDate, setCurrentDate] = useState('');
  const [cnuID, setcnuID] = useState('');
  const [playAnimation, setPlayAnimation] = useState(false);
 
  // const ref = React.useRef(null);
  // const [map, setMap] = React.useState();
  // useEffect(() => {
  //   if (ref.current && !map) {
  //     setMap(new window.google.maps.Map(ref.current, {}));
  //     console.log("YELO : "+map)
  //   }

  // }, [ref, map]);

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      month + '/' + date + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    window.location.reload();
    setOpen(false);
  };
  // const history = useHistory();
  
  
 

  const handleClick = async (e) => {
    
   
    {handleClickToOpen()}
   
    const instance = Axios.create();
    e.preventDefault();
    try {
      let latitute = location.coordinates.lat;
      let longitute = location.coordinates.lng;
      let gmap_link =`https://www.google.com/maps/@${latitute},${longitute},16z`;
      e.preventDefault();
      await instance.post("http://localhost:3001/api/insert/reportCrime", {dateTime:currentDate,location:gmap_link});
      // location:JSON.stringify(location)
      
      // console.log("pOSTED BITCH: "+ firstName)
      // navigate("/");
    } catch (err) {
      console.log("ERRO: " +err);
      // setError(true)
    }
    {GetMaxID()}
    
    
  };
  useEffect(() => {
    const Getcategory1 = async () => {
  Axios('http://localhost:3001/api/delete/cancelRequest/maxID')
    .then(res => setLastID(1+res.data))
    .catch(err => console.log(err))
    };
    Getcategory1();
}, []);
  const GetMaxID = () => {
    console.log("GETMAXID CALLED")
    // Axios('http://localhost:3001/api/delete/cancelRequest/maxID').then(res => setLastID(res.data))
    // .catch(err => console.log(err))
    //   console.log("MAXID: "+lastID);
    
      
      console.log("MAXID: "+lastID);
    console.log("GETMAXID ENDED")
    
  };
  const handleUpdate = async (e) => {
   
   
    const instance = Axios.create();
    
    e.preventDefault();
    try {
      e.preventDefault();
      console.log("CNU ID: "+cnuID+ " LAST ID: "+ lastID)
      await instance.put("http://localhost:3001/api/update/addCNUID/maxID", {cnuID: cnuID,lastID:lastID});
      

      
      // navigate("/");
    } catch (err) {
      console.log("ERRO: " +err);
      // setError(true)
    }
    
  };
  const deleteLast =async (e) =>{
    const instance = Axios.create();
    
    try{
      e.preventDefault();
      await instance.get('http://localhost:3001/api/delete/cancelRequest/maxID').then(res => setLastID(res.data))
      .catch(err => console.log(err))
      // results=JSON.parse(JSON.stringify(results))
 
      console.log("GET LAST ID: ",lastID)
     
    }catch (err) {
        console.log("ERRO: " +err);
        // setError(true)
      }
      {deleteRequest()}
      

  };
  const deleteRequest = async (e) => {
    
    const instance = Axios.create();

    try {
     
      console.log("LAST ID: ",lastID)
      await instance.post("http://localhost:3001/api/delete/moveOpenToResolve", {aRID: lastID});

      console.log("DELETE BITCH: "+ lastID+1)
      // navigate("/");
    } catch (err) {
      console.log("ERRO: " +err);
      // setError(true)
    }
  };
 
  // const onCall=()=>{
  //   const args ={
  //     number: phone,
  //     prompt: true,
  //   };
  //   call(args).catch(console.error)
  // }
// const h = ()=>{
//   <Route path='/gmaps' component={() => { 
//     window.location.href = 'https://google.com'; 
//     return null;
// }}/>
// }


  return (
    
          
    <div className='hero-container'>


      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Your Request Has Been Sent!"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your CNU ID so PD can better assist you.
          </DialogContentText>
          <input placeholder="    CNU ID" onChange={e => setcnuID(e.target.value)}></input>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} 
                  color="primary" autoFocus>
            Close
          </Button>
          <Button onClick={deleteLast}
                  color="primary" autoFocus>
            Cancel Request
          </Button>
        </DialogActions>
      </Dialog>
      
        {/* <div className ='hero-btns'> */}
            <Button 
           
            
            
           onClick={handleClick} //openInNewTab('https://maps.google.com')
     
             style={{
              top: "-150px",
              color:"#fff",
              width:"200px",
              borderColor: 'white',
              backgroundColor: "#700f0f",
              padding: "8px 26px",
              fontSize: "18px"
          }}
            >
                Notify Now
            </Button>


            {/* <div className="inline-block mr-auto pt-1">
                                {location.loaded
                                    ? JSON.stringify(location)
                                    : "Location data not available yet."}
                            </div> */}
            
            <Button className="call" 
             href="/gMaps"
            style={{
              top: "-130px",
              color:"#fff",
              width:"200px",
              backgroundColor: "#d1c158",
              padding: "8px 26px",
              fontSize: "18px"
          }}>
               Call CNU PD 
            </Button>
            <Button
            // onClick={onCall}
             style={{
              top: "-110px",
              color:"#fff",
              backgroundColor: "#116319",
              width:"200px",
              padding: "8px 26px",
              fontSize: "18px"
          }} href="/more">
               More:

            </Button>
          <Button
          style={{
            top: "-50px",
            color:"#fff",
            borderColor: "#fff",
            width:"200px",
            backgroundColor: "transparent",
            padding: "8px 26px",
            fontSize: "18px"}}
            variant='outlined'
        >
          Tutorial <i className='far fa-play-circle' />
        </Button>

    </div>
  )
}
export default HeroSection
// import '../App.css'
// import Button from '@mui/material/Button';
// import './HeroSection.css'
// import React, { useState } from 'react';
// // import { getCardHeaderUtilityClass } from '@mui/material';





// function HeroSection() {
 


//   return (
//     <div className='hero-container'>
      
//         {/* <div className ='hero-btns'> */}
//             <Button 
//             // onClick={() => getPosition()}
//              style={{
//               top: "-150px",
//               color:"#fff",
//               width:"200px",
//               borderColor: 'white',
//               backgroundColor: "#700f0f",
//               padding: "8px 26px",
//               fontSize: "18px"
//           }}
//             >
//                 Notify Now
//             </Button>
            
//             <Button className="call" 
//             style={{
//               top: "-130px",
//               color:"#fff",
//               width:"200px",
//               backgroundColor: "#d1c158",
//               padding: "8px 26px",
//               fontSize: "18px"
//           }}>
//                Call CNU PD 
//             </Button>
//             <Button
//              style={{
//               top: "-110px",
//               color:"#fff",
//               backgroundColor: "#116319",
//               width:"200px",
//               padding: "8px 26px",
//               fontSize: "18px"
//           }} href="/more">
//                More:
//             </Button>
//           <Button
//           style={{
//             top: "-50px",
//             color:"#fff",
//             borderColor: "#fff",
//             width:"200px",
//             backgroundColor: "transparent",
//             padding: "8px 26px",
//             fontSize: "18px"}}
//             variant='outlined'
//         >
//           Tutorial <i className='far fa-play-circle' />
//         </Button>

//     </div>
//   )
// }

// export default HeroSection