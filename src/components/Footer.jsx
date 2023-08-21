import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="footer">
      <div className="section social-media">
        <h3>Contact Me</h3>
        <div>
          <FacebookRoundedIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
          <TwitterIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
          <GitHubIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
          <LinkedInIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
          <InstagramIcon sx={{ cursor: "pointer", fontSize: "25px" }} />
        </div>
      </div>
      <div className="section service">
        <h3>Our Services</h3>
        <ul>
          <li>Service 1</li>
          <li>Service 2</li>
          <li>Service 3</li>
        </ul>
      </div>
      <div className="section location">
        <h3>Our Location</h3>
        <p>123 Street, City</p>
        <p>Country</p>
      </div>
    </div>
  );
};

export default Footer;
