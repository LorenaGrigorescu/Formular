import Register from "./components/Register";
import Login from "./components/Login";
import Children from "./components/Children";
import ChildPhoto from "./components/ChildPhoto";
import UserPhoto from "./components/UserPhoto";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/children" element={<Children />} />
          <Route path="/children/:name" element={<ChildPhoto />} />
          <Route path="/users/:name" element={<UserPhoto />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
