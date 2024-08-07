import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Proficiency from "./components/Proficiency";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Navbar from "./components/navbar";
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Proficiency/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
