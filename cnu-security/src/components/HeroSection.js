import '../App.css'
import Button from '@mui/material/Button';
import './HeroSection.css'
import React, { useState, useEffect } from 'react';
import useGeolocation from '../hooks/useGeolocation';
import Axios from 'axios';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import call from 'react-native-phone-call';





function HeroSection() {
  const [phone, setPhone] = useState('7575947777');
  const [open, setOpen] = React.useState(false);
  const [time, setTime] = useState('');
  const [lastID, setLastID] = useState('');
  const [reportID, setReportId] = useState('');
  const location =useGeolocation();
  const current = new Date();
  const [currentDate, setCurrentDate] = useState('');
  const [cnuID, setcnuID] = useState('');
 


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
    setOpen(false);
  };

  const handleClick = async (e) => {
   
    {handleClickToOpen()}
    const instance = Axios.create();
    

    
    e.preventDefault();
    try {
      e.preventDefault();
      await instance.post("http://localhost:3001/api/insert/reportCrime", {dateTime:currentDate,location:JSON.stringify(location)});

      // console.log("pOSTED BITCH: "+ firstName)
      // navigate("/");
    } catch (err) {
      console.log("ERRO: " +err);
      // setError(true)
    }
    
  };
  const handleUpdate = async (e) => {
   
   
    const instance = Axios.create();
    
    e.preventDefault();
    try {
      e.preventDefault();
      await instance.post("http://localhost:3001/api/update/addCNUID/maxID", {CNUID: cnuID,aRID:lastID});

      console.log("CNU ID: "+cnuID)
      // navigate("/");
    } catch (err) {
      console.log("ERRO: " +err);
      // setError(true)
    }
    
  };
  const getMaxID =async (e) =>{
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
          <Button onClick={getMaxID}
                  color="primary" autoFocus>
            Cancel Request
          </Button>
        </DialogActions>
      </Dialog>
      
        {/* <div className ='hero-btns'> */}
            <Button 
            onClick={handleClick}
     
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