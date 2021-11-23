import { useState } from "react";
import MrKrabs from "./components/MrKrabs";
import SpongeBob from "./components/SpongeBob";
import Squidward from "./components/Squidward";
import Welcome from "./components/Welcome";

const renderPage = (currentPage) => {
  switch (currentPage) {
    case "sponge-bob":
      return <SpongeBob />;
    case "squidward":
      return <Squidward />;
    case "mr-krabs":
      return <MrKrabs />;

    default:
      return <Welcome />;
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  const linkClassNames = (page) =>
    `btn btn-link ${currentPage === page ? "fw-bold text-info bg-dark" : ""}`;

  return (
    <div>
      <nav className="d-flex">
        <button
          className={linkClassNames("welcome")}
          onClick={() => setCurrentPage("welcome")}
        >
          Home
        </button>
        <button
          className={linkClassNames("sponge-bob")}
          onClick={() => setCurrentPage("sponge-bob")}
        >
          Sponge Bob
        </button>
        <button
          className={linkClassNames("squidward")}
          onClick={() => setCurrentPage("squidward")}
        >
          Squidward
        </button>
        <button
          className={linkClassNames("mr-krabs")}
          onClick={() => setCurrentPage("mr-krabs")}
        >
          Mr. Krabs
        </button>
      </nav>
      {renderPage(currentPage)}
    </div>
  );
}
