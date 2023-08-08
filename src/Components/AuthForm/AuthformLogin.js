import React, { useState } from "react";
import "./Authformlogin.css";
import { Link , useNavigate } from "react-router-dom";


const AuthForm = (props) => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });


  const handleSigninSubmit = async (e) => {
    e.preventDefault();
  
    try {
        const response = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });
    
        const json = await response.json();
        console.log(json);
    
        if (!json.success) {
            props.showAlert("Enter Valid Credentials" , "danger")
        }
        if (json.success) {
          localStorage.setItem("userEmail",credentials.email);
          localStorage.setItem("authToken",json.authToken);
          localStorage.setItem("name", json.name);
          console.log(localStorage.getItem("name"));
          navigate("/");
          props.showAlert("Logged In Successfully" , "success")
    
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    };
    
    
    
    
    
      const onChange = (e) => {
        setcredentials({...credentials,[e.target.name]:e.target.value})
      }

  const handleSignUpClick = () => {
    navigate('/createuser');

  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);

  };

  return (
    <div
      className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <form  className="foram">
          <h1 className="hone">Create Account</h1>
          <button className="boxx">
            <div class="google-btn">
              <div class="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
              </div>
              <p class="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          </button>
          <span className="spa">or use your email for registration</span>
          <input className="inp" name="name" type="text" placeholder="Name" />
          <input className="inp" name="email"  type="email" placeholder="Email" />
          <input className="inp" name="password"  type="password" placeholder="Password" />
          <button className="button">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form className="foram" onSubmit={handleSigninSubmit} action="#">
          <h1>Sign in</h1>
          <button className="boxx">
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          </button>
          <span className="spa">or use your account</span>
          <input className="inp" name="email" value={credentials.email} onChange={onChange} type="email" placeholder="Email" />
          <input className="inp" name="password" value={credentials.password} onChange={onChange} type="password" placeholder="Password" />
          <Link to="#">Forgot your password?</Link>
          <button className="button" type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p className="para">
              To keep connected with us please login with your personal info
            </p>
            <button
              className="button ghost"
              id="signIn"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p className="para">
              Enter your personal details and start the journey with us
            </p>
            <button
              className="button ghost"
              id="signUp"
              onClick={handleSignUpClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
