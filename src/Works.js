import React from "react";
import Project from "./Project";
import "./Works.css";
function Works() {
  return (
    <div className="works">
      <h2
        style={{
          marginTop: "30px",
        }}
      >
        Works
      </h2>
      <div className="works__card">
        <Project
          img="https://ewm.swiss/application/files/8216/1597/9679/E-commerce_web_design_EWM_SA_Digital_Agency_Geneva.jpg"
          title="E-Commerce Website"
          desc="In this website a wonderful experience of buying groceries has been showcased through an online e-commerce website platform.This makes the users work easier and less time consuming."
        />
        <Project
          img="https://global-uploads.webflow.com/5ef5480befd3922fbeacf53c/5f51e401c1ad366c50bc64c1_hero-image-Events.png"
          title="College Event Management website"
          desc="This website provides a platform for hosting the events of a college, it helps in keeping track of th details of the events which helps in better oraganisation and can be hosted in a much elevated by showcasing it here."
        />
        <Project
          img="https://i.pinimg.com/originals/be/f0/78/bef0785eb904c9da2e5e6ed413405363.jpg"
          title="AR Shopping website"
          desc="In this the user can get an experience of cloth shopping in an AR model and can get a better experience with clothes so that he can experience the product and shop in a more interactive manner."
        />

        <Project
          img="https://www.sciencenewsforstudents.org/wp-content/uploads/2019/11/860_AI_gaming.png"
          title="PyArcade"
          desc="This is a gaming platform which provides a menu of games to choose from and acn experience the playing of game which has been digitalised.It includes games such as Stock simulator,Snake and ladder,Flappy bird and space Shooter game."
        />
        <Project
          img="https://vakilsearch.com/blog/wp-content/uploads/2021/05/VS_Blog-Images_3-05.png"
          title="NGO"
          desc="I have participated in many ngo activities and contributed a lot in social service which also motivates me to contribute a lot more to the country."
        />
        <Project
          img="https://circuitdiagrams.in/wp-content/uploads/2021/06/TopElectronicsMiniProjects-1.jpg"
          title="Mini projects"
          desc="I ahve done some mini projects based on electronics,physics,chemistry and many other fields."
        />
      </div>
    </div>
  );
}

export default Works;
