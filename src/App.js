import "./App.css";
import Header from "./components/Header.js";
import Samples from "./components/Samples.js";
import ContactInfo from "./components/ContactInfo.js";
import About from "./components/About.js";
import Resume from "./components/Resume.js";

function App() {
  return (
    <main>
      <Header />
      <About />
      <Samples />
      <Resume />
      <ContactInfo />
    </main>
  );
}

export default App;
