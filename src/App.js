import './App.css';
import Home from './Components/Home.js';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from './Components/AuthForm/Authform';
import AuthformLogin from './Components/AuthForm/AuthformLogin';
import Alert from './Components/AuthForm/Alert';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  return (
   <Router>
   <Alert alert={alert}/>
    <Routes>
    <Route exact path='/' element={<Home showAlert= {showAlert} />}/>
    <Route exact path="/login" element={<AuthformLogin showAlert= {showAlert} />} />
    <Route exact path="/createuser" element={<AuthForm showAlert= {showAlert} />} />
    </Routes>
   </Router>
  );
}

export default App;