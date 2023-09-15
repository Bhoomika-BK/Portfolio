import React from "react";
import "./Project.css";
function Project({ img, title, desc }) {
  return (
    <div className="proj">
      <div className="projects">
        <div className="proj__img">
          <img src={img} alt="" />
        </div>
        <div className="proj__content">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
