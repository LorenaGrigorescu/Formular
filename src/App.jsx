import Register from "./components/Register";
import Login from "./components/Login";
import Children from "./components/Children";
import ChildPhoto from "./components/ChildPhoto";
import UserPhoto from "./components/UserPhoto";
import Profile from "./components/Profile";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/children" element={<Children />} />
          <Route path="/children/:name" element={<ChildPhoto />} />
          <Route path="/users/:name" element={<UserPhoto />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
