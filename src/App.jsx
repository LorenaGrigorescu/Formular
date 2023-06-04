import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FavouriteActivities from './components/FavouriteActivities';
import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import axios from './api/axios';
import History from './components/History';
function App() {

  /*return (
    <Router>
    <main className="App">
      <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed }
        </Routes>
    </main>
  </Router>
  );*/

  const [activities, setActivities] = useState([]);
  const username = "bogdan";

  const getAllActivities = () => {
    console.log("get all");
    axios
      .get(`http://localhost:8080/api/activities/${username}`)
      .then((response) => {
        setActivities(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error retrieving activities:", error);
      });
  };

  useEffect(() => {
    getAllActivities();
  }, []);

  const [children, setChildren] = useState([]);

  const getAllChildren = () => {
    const username = "Mihai";
    console.log("get all");
    axios
      .get(`http://localhost:8080/api/children/${username}`)
      .then((response) => {
        const { favoriteActivities } = response.data;
        setChildren(favoriteActivities);
        console.log(favoriteActivities);
      })
      .catch((error) => {
        console.error("Error retrieving children:", error);
      });
  };

  useEffect(() => {
    getAllChildren();
  }, []);

  console.log(children);
  //
  return (
    <Fragment>
      <History data = {activities}></History>
      /*<div>
          <FavouriteActivities activities={children} />
        </div>*/
    
    </Fragment>
  );

  
}

export default App;