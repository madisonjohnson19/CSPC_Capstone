import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import More from './components/pages/More'
import SecurityResources from '../src/components/pages/SecurityResourcs';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/more' exact element={<More/>}/>
        <Route path="/securityreources" exact element={<SecurityResources />} />
      </Routes>
    </Router>  
    </>
  );
}

export default App;
