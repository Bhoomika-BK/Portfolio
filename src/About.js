import React from "react";
import "./About.css";
import { Avatar } from "@mui/material";
import logo from "./loader img.jpg";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function About() {
  return (
    <div className="about">
      <h2 style={{ marginBottom: "30px" }}>About me</h2>
      <div className="about__info">
        <div className="about__img">
          <Avatar
            alt="Bhoomika B K"
            src="https://www.vhv.rs/dpng/d/426-4264903_user-avatar-png-picture-avatar-profile-dummy-transparent.png"
            sx={{ width: 300, height: 300 }}
          />
        </div>
        <div className="about_content">
          <h3
            style={{
              padding: "80px",
            }}
          >
            I am an enthusiastic web developer who is interested in building
            websites as this cheers me up in discovering and learning new ideas
            and designs to acheive higher.This field is so interesting where one
            can bring his ideas into a product and enhance itin the way needed.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
