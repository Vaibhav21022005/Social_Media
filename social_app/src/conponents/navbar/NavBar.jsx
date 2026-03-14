import "./navBar.scss";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContex";

const NavBar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navBar">
      <div className="left">
        <Link to="/" className="logo">
          SocialApp
        </Link>

        <HomeIcon className="icon" />
        {darkMode ? (
          <WbSunnyOutlinedIcon className="icon" onClick={toggle} />
        ) : (
        <DarkModeOutlinedIcon className="icon" onClick={toggle} />
        )}
        <GridViewOutlinedIcon className="icon" />

        <div className="search">
          <SearchOutlinedIcon className="searchIcon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      <div className="right">
        <PersonOutlineOutlinedIcon className="icon" />
        <MailOutlineOutlinedIcon className="icon" />
        <NotificationsOutlinedIcon className="icon" />

        <div className="user">
          <img src={currentUser.profilePic} alt="user" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
