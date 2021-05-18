import { useState } from "react";
import NavBar from "./components/NavBar";
import TitleCard from "./components/TitleCard";
import StatCard from "./components/StatCard";
import ProjectCard from "./components/ProjectCard";
import "./styles/App.css";

function App() {
  const [moneyRaised, setMoneyRaised] = useState(89914);
  return (
    <div className="App">
      <header
        style={
          {
            backgroundImage: "url(/images/image-hero-desktop.jpg)"
          }
        }> 
        <img src="/images/logo.svg"></img>
        <NavBar />
      </header>
      <main>
        <TitleCard />
        <StatCard moneyRaised={moneyRaised}/>
        <ProjectCard />
      </main>
    </div>
  );
}

export default App;
