import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";  
import Publications from "./pages/Publications";
import Software from "./pages/Software";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/software" element={<Software />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
