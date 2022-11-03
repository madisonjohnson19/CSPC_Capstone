import '../App.css'
import Button from '@mui/material/Button';
import './HeroSection.css'
import React, { useState, useEffect } from 'react';
import useGeolocation from '../hooks/useGeolocation';
import Axios from 'axios';
// import { getCardHeaderUtilityClass } from '@mui/material';




function HeroSection() {
  const [time, setTime] = useState('');
  const [reportID, setReportId] = useState('');
  const location =useGeolocation();
  const current = new Date();
  const [currentDate, setCurrentDate] = useState('');
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
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

  const handleClick = async (e) => {
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
 



  return (
    
          
    <div className='hero-container'>
      
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
            <div className="inline-block mr-auto pt-1">
                                {location.loaded
                                    ? JSON.stringify(location)
                                    : "Location data not available yet."}
                            </div>
            
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