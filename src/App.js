import { useState } from "react";
import NavBar from "./components/NavBar";
import TitleCard from "./components/TitleCard";
import StatCard from "./components/StatCard";
import ProjectCard from "./components/ProjectCard";
import headerImgDesktop from "./images/image-hero-desktop.jpg";
import headerImgMobile from "./images/image-hero-mobile.jpg";
import logoImg from "./images/logo.svg";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <header> 
        <img id="header-image-desktop" src={headerImgDesktop} />
        <img id="header-image-mobile" src={headerImgMobile} />
        <img id="logo-image" src={logoImg} />
        <NavBar />
      </header>
      <main>
        <TitleCard/>
        <StatCard/>
        <ProjectCard/>
      </main>
    </div>
  );
}

export default App;
