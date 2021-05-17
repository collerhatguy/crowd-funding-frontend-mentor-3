import NavBar from "./components/NavBar";
import TitleCard from "./components/TitleCard";
import StatCard from "./components/StatCard";
import ProjectCard from "./components/ProjectCard";
import "./styles/App.css";

function App() {
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
        <StatCard />
        <ProjectCard />
      </main>
    
    
      {/* <!-- Selection modal start --> */}
    
    
      {/* <!-- Selected pledge start --> */}
      Enter your pledge
      $25
      Continue
      {/* <!-- Selected pledge end --> */}
    
      Black Edition Stand
      Pledge $75 or more
      You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
      member list. Shipping is included.
      64 left
    
      {/* <!-- Selected pledge start --> */}
      Enter your pledge
      $75
      Continue
      {/* <!-- Selected pledge end --> */}
    
      Mahogany Special Edition
      Pledge $200 or more
      You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
      to our Backer member list. Shipping is included.
      0 left
    
      {/* <!-- Selected pledge  start --> */}
      Enter your pledge
      $200
      Continue
      {/* <!-- Selected pledge end --> */}
    
      {/* <!-- Selection modal end --> */}
    
      {/* <!-- Success modal start --> */}
    
      Thanks for your support!
      Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
      an email once our campaign is completed.
      Got it!
    
      {/* <!-- Success modal end --> */}
    </div>
  );
}

export default App;
