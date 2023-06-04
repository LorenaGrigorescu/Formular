import Register from './components/Register';
import Login from './components/Login';
import BookAppointment from './components/BookAppointment';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';

function App() {

  return (
    <Router>
    <main className="text-primary-emphasis App">
      <Routes>
          {/* <Route path="/" element={<Register />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          {/* Add more routes as needed */}
        </Routes>
    </main>
  </Router>
  );
}

export default App;