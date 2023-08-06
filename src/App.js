import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup'; ;
function App() {
  return (
   <Router>
    <div>
    <Routes>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/createuser" element={<Signup />} />
</Routes>
    </div>
   </Router>
  );
}

export default App;
