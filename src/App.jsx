import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <main className="App">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
