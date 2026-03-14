import "./profile.scss";

import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../conponents/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg"
          alt=""
          className="cover"
        />
        <img
          src="https://i.pravatar.cc/300?img=12"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.instagram.com/vaibhav_dhone_8288?igsh=MWFma3o5b204djd5bQ==">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/vaibhav_dhone_8288?igsh=MWFma3o5b204djd5bQ==">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-dhone-5a3933317/">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="">
              <PinterestIcon fontSize="large" />
            </a>
          </div>

          <div className="center">
            <span>Vaibhav Dhone</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>IND</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>English</span>
              </div>
            </div>
            <button>follow</button>
          </div>

          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
