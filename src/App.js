import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/HomeScreen/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
