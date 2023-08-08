import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from "react-router-dom";

// import SearchIcon from '@mui/icons-material/Search';
// import {Link} from 'react-router-dom';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };
  



  return (
    <div>
      <div className="topbarContainer">
      <div className="topbarLeft">
       <img src="/re2.png" alt="" />
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        <form class="search-box">
      <input type="text" placeholder=" "/>
       <button type="reset"></button>
       </form>
        </div>
      </div>
      {!localStorage.getItem("authToken") ? (
        <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink mx-3">About</span>
          <span className="topbarLink mx-3">Report</span>
          <span className="topbarLink mx-3">Register</span>
          <span className="topbarLink mx-3 "><Link  to="/login" >
          Login
          </Link></span>
        </div>
        <div className="topbarIcons mx-3">
        </div>
      </div>
              ) : (
                <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink mx-3">About</span>
          <span className="topbarLink mx-3">Report</span>
          <span className="topbarLink mx-3">Register</span>
          <span className="topbarLink mx-3 " onClick={handleLogout}>
          Logout
          </span>
        </div>
        <div className="topbarIcons mx-3">
          <div className="topbarIconItem1 mx-3">
            <ShoppingCartIcon></ShoppingCartIcon>
          </div>
          <div class="topbarIconItem mx-3">
  <div class="userIcon">
    <span class="userInitial">{localStorage.getItem("name").charAt(0)}</span>
  </div>
</div>

        </div>
      </div>
              )}
      
    </div>
    </div>
  )
}

export default Navbar
