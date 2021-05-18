import { useState } from "react";
import NavBar from "./components/NavBar";
import TitleCard from "./components/TitleCard";
import StatCard from "./components/StatCard";
import ProjectCard from "./components/ProjectCard";
import "./styles/App.css";

function App() {
  const [moneyRaised, setMoneyRaised] = useState(89914);
  const [backers, setBackers] = useState(5007);
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
        <TitleCard setBackers={setBackers}/>
        <StatCard moneyRaised={moneyRaised} backers={backers}/>
        <ProjectCard setMoneyRaised={setMoneyRaised} setBackers={setBackers}/>
      </main>
    </div>
  );
}

export default App;
