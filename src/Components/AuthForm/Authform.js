import React, { useState } from "react";
import "./Authform.css";
import { Link , useNavigate } from "react-router-dom";


const AuthForm = (props) => {
  const [isSignUpActive, setIsSignUpActive] = useState(true);

  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleSignupSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8080/api/auth/createuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });
  
      const json = await response.json();
      console.log(json);
  
      if (json.success) {
        navigate("/login");
        props.showAlert("Account Created Successfully" , "success")
        } else {
          props.showAlert("Enter Valid Credentials" , "danger")
        }
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };
  const onChange = (event) => {
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  
  const onClickSignup = async () => {
    
  }

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    navigate('/login');
  };

  return (
    
    
    <div
      className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <form onSubmit={handleSignupSubmit} className="foram" >
          <h1 className="hone">Create Account</h1>
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
          <span className="spa">or use your email for registration</span>
          <input className="inp" name="name" value={credentials.name} onChange={onChange} type="text" placeholder="Name" />
          <input className="inp" name="email" value={credentials.email} onChange={onChange} type="email" placeholder="Email" />
          <input className="inp" name="password" value={credentials.password} onChange={onChange} type="password" placeholder="Password" />
          <button type="submit" onClick={onClickSignup} className="button">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form className="foram" action="#">
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
          <input className="inp" type="email" placeholder="Email" />
          <input className="inp" type="password" placeholder="Password" />
          <Link to="#">Forgot your password?</Link>
          <button className="button">Sign In</button>
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
