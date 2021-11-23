import { useState } from "react";
import Header from "./components/Header.js";
import Samples from "./components/Samples.js";
import ContactInfo from "./components/ContactInfo.js";
import About from "./components/About.js";
import Resume from "./components/Resume.js";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "samples":
        return <Samples />;
      // case "contact":
      //   return </Contact>
      case "resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  return (
    <main>
      <Header />
      <nav className="subheader nav">
          <ul>
            <li>
              <button
                className={`${currentPage === "about" ? "current" : ""}`}
                onClick={() => setCurrentPage("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`${currentPage === "samples" ? "current" : ""}`}
                onClick={() => setCurrentPage("samples")}
              >
                Work
              </button>
            </li>
            <li>
              <button
                className={`${currentPage === "contact" ? "current" : ""}`}
                onClick={() => setCurrentPage("contact")}
              >
                Contact
              </button>
            </li>
            <li>
              <button
                className={`${currentPage === "resume" ? "current" : ""}`}
                onClick={() => setCurrentPage("resume")}
              >
                Resume
              </button>
            </li>
          </ul>
        </nav>
      {renderPage()}
      <ContactInfo />
    </main>
  );
}

export default App;
