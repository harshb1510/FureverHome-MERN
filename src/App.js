import './App.css';
import Home from './Components/Home.js';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup'; 

function App() {
  return (
   <Router>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/createuser" element={<Signup />} />
    </Routes>
   </Router>
  );
}

export default App;