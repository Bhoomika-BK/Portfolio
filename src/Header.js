import React from "react";
import "./Header.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
function Header() {
  const handleAbout = () => {
    const ele = document.querySelector(".about");
    window.scrollTo({
      top: ele?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleWorks = () => {
    const ele = document.querySelector(".works");
    window.scrollTo({
      top: ele?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleContact = () => {
    const ele = document.querySelector(".footer");
    window.scrollTo({
      top: ele?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <p onClick={handleAbout}>About Me</p>
        <p onClick={handleWorks}>Works</p>
        <p onClick={handleContact}>Contact</p>
      </div>
      <div className="header__right">
        <LinkedInIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}

export default Header;
