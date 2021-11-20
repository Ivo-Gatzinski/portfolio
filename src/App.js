import './App.css';
import "./components/reset.css";
import "./components/style.css";
import Header from './components/Header.js';
import Sections from "./components/Sections.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <main><Header /><Sections /><Contact />
    </main>
    
  );
}

export default App;
