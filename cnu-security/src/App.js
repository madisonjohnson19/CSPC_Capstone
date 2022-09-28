import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import More from './components/pages/More'
import SecurityResources from '../src/components/pages/SecurityResourcs';
import CampusMap from '../src/components/pages/CampusMap';
import SilentWitness from '../src/components/pages/SilentWitness';
import ReportCrime from './components/pages/ReportCrime';
import RequestEscort from './components/pages/RequestEscort';
import UserReports from './components/pages/UserReports';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import PdDashboard from './components/pages/pdDashboard';

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));

// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }
function App() {
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <SignIn setToken={setToken} />
  // }

 
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

      </Routes>
    </Router>  
    </>
  );
}

export default App;
