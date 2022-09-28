import '../App.css'
import Button from '@mui/material/Button';
import './HeroSection.css'
import React, { useState } from 'react';
// import { getCardHeaderUtilityClass } from '@mui/material';





function HeroSection() {
 



  return (
    
          
    <div className='hero-container'>
      
        {/* <div className ='hero-btns'> */}
            <Button 
            href="/pdHome"
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