import { useState } from "react";
import NavBar from "./components/NavBar";
import TitleCard from "./components/TitleCard";
import StatCard from "./components/StatCard";
import ProjectCard from "./components/ProjectCard";
import headerImg from "./images/image-hero-desktop.jpg";
import logoImg from "./images/logo.svg";
import "./styles/App.css";

function App() {
  const [moneyRaised, setMoneyRaised] = useState(89914);
  const [backers, setBackers] = useState(5007);
  return (
    <div className="App">
      <header> 
        <img id="header-image" src={headerImg} />
        <img id="logo-image" src={logoImg} />
        <NavBar />
      </header>
      <main>
        <TitleCard setBackers={setBackers}/>
        <StatCard moneyRaised={moneyRaised} backers={backers}/>
        <ProjectCard setMoneyRaised={setMoneyRaised} setBackers={setBackers}/>
      </main>
    </div>
  );
}

export default App;
