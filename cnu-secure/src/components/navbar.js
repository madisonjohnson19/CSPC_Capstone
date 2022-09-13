import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// 38.20 minutes
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [button,setButton]= useState(true);
    const closeMobileMenu =()=>setClick(false);

    const showButton=()=>{
        if(window.innerwidth <=960){
            setButton(false);

        }else{
            setButton(true)
        }
    };
    window.addEventListener('resize',showButton);



  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRVL <i className="fab.fa-typo3 "></i>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/signin' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign In
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Sign In</Button>} 

        </div>
    </nav>
    
    </>
  )
}

export default Navbar