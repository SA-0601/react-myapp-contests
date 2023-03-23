import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AllContests from "./pages/AllContests";
import HackerEarth from "./pages/HackerEarth";
import HackerRank from "./pages/HackerRank";
import CodeForces from "./pages/CodeForces";


function App() {


  return (
    <div className="App">
      
      <NavBar />

      {/* Here We define all our routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allcontests" element={<AllContests />} />
        <Route path="/hackerearth" element={<HackerEarth />} />
        <Route path="/hackerrank" element={<HackerRank />} />
        <Route path="/codeforces" element={<CodeForces />} />
      </Routes>
    </div>
  );
}

export default App;
