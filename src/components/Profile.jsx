import BookAppointment from "./BookAppointment";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Map from "./map/Map";
import axios from "../api/axios";
import UserPhoto from "./UserPhoto";
import History from "./History";

import "./profile.css";

const Profile = ({ userData, setUserData }) => {
  const { username: userName } = useParams();
  const [user, setUser] = useState({});

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${userName}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching child data:", error);
      });
  }, []);

  const getAllActivities = () => {
    console.log("get all");
    axios
      .get(`http://localhost:8080/api/activities/${userName}`)
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

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <UserPhoto userData={user} />
        <Map center={{ lat: 46.77499425393059, lng: 23.6216376366903 }} />
      </div>
      <button type="button" class="btn btn-outline-info">
        Verify
      </button>
      <History data={activities} />
    </>
  );
};

export default Profile;
