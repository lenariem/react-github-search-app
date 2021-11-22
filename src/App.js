import react from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./layout/Home";
import About from "./layout/About";
import Profile from "./layout/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:name" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
