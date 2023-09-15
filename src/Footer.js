import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__up">
        <h3>Contact Me through </h3>

        <p style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <PhoneIcon /> +91 9145905680
        </p>
        <p style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <EmailIcon />
          abcd@gmail.com
        </p>
      </div>
      <div className="Social__media">
        <InstagramIcon />
        <FacebookIcon />
        <TwitterIcon />
      </div>
    </div>
  );
}

export default Footer;
