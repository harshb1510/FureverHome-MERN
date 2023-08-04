import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="topbarContainer">
      <div className="topbarLeft">
       <img src="/re2.png" alt="" />
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for our products,services and more"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">About</span>
          <span className="topbarLink">About</span>
          <span className="topbarLink">About</span>
          <span className="topbarLink">About</span>

        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <ShoppingCartIcon></ShoppingCartIcon>
          </div>
          <div className="topbarIconItem">
           <AccountCircleIcon></AccountCircleIcon>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
