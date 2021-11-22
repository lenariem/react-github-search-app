import react from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./layout/Home";
import About from "./layout/About";
import Profile from "./layout/Profile";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Alert alert={{text: "Test alert"}}/>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:name" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
