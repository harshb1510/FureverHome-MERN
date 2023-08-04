import "./login.css";

const Login = () => {
  return (
    <div className="loginWrapper">
      <div className="login-container">
        <div className="login-left">
          <img src="/login.jpg.webp" alt="" className="login-leftImg" />
        </div>
        <div className="login-right">
          <div className="loginTitle">
            <h2>Login</h2>
          </div>
          <form>
          
            <div className="loginEmail">
              <span>Email</span>
              <input placeholder="Email" />
            </div>
            <div className="loginPassword">
              <span>Password</span>
              <input placeholder="Password" />
            </div>
            <div className="loginButton">
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
