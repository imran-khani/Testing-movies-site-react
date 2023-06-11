import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Movies from "./pages/Movies";
import Context from "./Context";
import Dashboard from "./Dashboard";

const Name = createContext();
function App() {
  return (
    <>
      <Navbar />
      <Name.Provider value={"imran khan"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/context" element={<Context />} />
          <Route path="*" element={<Error />} />
        </Routes>
          <Dashboard />
      </Name.Provider>
    </>
  );
}

export default App;

export { Name };
