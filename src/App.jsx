import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Movies from "./pages/Movies";
import { createContext } from "react";

const Fname = createContext();
function App() {
  return (
    <>
      <Navbar />
      <Fname.Provider value={"Rahul"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Fname.Provider>
    </>
  );
}

export default App;
export { Fname };
