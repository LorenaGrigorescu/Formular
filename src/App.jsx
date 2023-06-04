import Register from "./components/Register";
import Login from "./components/Login";
import Children from "./components/Children";
import ChildPhoto from "./components/ChildPhoto";
import UserPhoto from "./components/UserPhoto";
import Profile from "./components/Profile";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState({});
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route
            path="/register"
            element={<Register user={userData} setUserData={setUserData} />}
          />
          <Route
            path="/login"
            element={<Login user={userData} setUserData={setUserData} />}
          />
          <Route
            path="/children"
            element={<Children user={userData} setUserData={setUserData} />}
          />
          <Route path="/children/:name" element={<ChildPhoto />} />
          <Route path="/users/:name" element={<UserPhoto />} />
          <Route
            path="/profile/:username"
            element={<Profile user={userData} setUserData={setUserData} />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
