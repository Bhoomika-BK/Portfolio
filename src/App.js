import React, { useEffect, useState } from "react";
import "./App.css";
import { BeatLoader } from "react-spinners";
import Header from "./Header";
import Intro from "./Intro";
import Works from "./Works";
import About from "./About";
import Footer from "./Footer";
import logo from "./loader img.jpg";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="app">
      {loading ? (
        <div className="loader">
          <img
            src={logo}
            alt=""
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              padding: "50px",
            }}
          />

          <div
            className="loaders"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BeatLoader
              color={"whitesmoke"}
              loading={loading}
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
              alignItems="center"
            />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Intro />
          <About />
          <Works />
          <Footer />
        </>
      )}
          
    </div>
  );
}

export default App;
