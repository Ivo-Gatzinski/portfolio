import { useState } from "react";
import Header from "./components/Header.js";
import Samples from "./components/Samples.js";
import ContactInfo from "./components/ContactInfo.js";
import About from "./components/About.js";
import Resume from "./components/Resume.js";
import Form from "./components/Form.js";

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "samples":
        return <Samples />;
      case "contact":
      return <Form />
      case "resume":
        return <Resume />;

      default:
        return <About />;
    }
  };

  const linkClassNames = (page) =>
  `${currentPage === page ? "current" : ""}`;

  return (
    <main>
      <Header />
      <nav className="subheader nav">
          
          
              <button
                className={linkClassNames("about")}
                onClick={() => setCurrentPage("about")}
              >
                About <i className="far fa-address-card"></i>
              </button>
              <button
                className={linkClassNames("samples")}
                onClick={() => setCurrentPage("samples")}
              >
                Work <i className="fas fa-code-branch"></i>
              </button>
            
              <button
                className={linkClassNames("contact")}
                onClick={() => setCurrentPage("contact")}
              >
                Contact <i className="far fa-grin-beam"></i>
              </button>
              <button
                className={linkClassNames("resume")}
                onClick={() => setCurrentPage("resume")}
              >
                Resume <i className="fas fa-briefcase"></i>
              </button>
            
        </nav>
      {renderPage()}
      <ContactInfo />
    </main>
  );
}

export default App;
