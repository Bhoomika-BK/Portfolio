import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        Welcome to my Portfolio
      </h1>
      <div className="intro__content">
        <img
          src="https://wallpapercave.com/wp/wp7453551.jpg"
          alt=""
          style={{ width: "800px", height: "200px" }}
        />
        <h3 style={{ width: "400px", paddingLeft: "100px" }}>
          This portfolio gives a brief description of me,the projects I have
          done and some description about these.It gives a better experience of
          knowing me in detail in a more interactive manner using a website
          which is more efficient.
        </h3>
      </div>
    </div>
  );
}

export default Intro;
