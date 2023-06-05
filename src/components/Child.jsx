import BookAppointment from "./BookAppointment";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Map from "./map/Map";
import axios from "../api/axios";
import ChildPhoto from "./ChildPhoto";
import FavouriteActivities from "./FavouriteActivities";

import "./child.css";

const Child = ({ userData, setUserData }) => {
  const [child, setChild] = useState({});
  const { name: childName } = useParams();

  useEffect(() => {
    const fetchChild = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/children/${childName}`
        );
        console.log(response.data);
        setChild(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChild();
  }, []);

  return (
    <>
      <Navbar userData={userData} setUserData={setUserData} />
      <div className="up-container">
        <ChildPhoto childName={childName} />
        <FavouriteActivities activities={child.favoriteActivities} />
        <div className="map-child">
          <Map lat={child.lat} lng={child.lng} />
        </div>
        {/* descriere */}
      </div>
      <div className="description">{child.description}</div>
      <BookAppointment child={child} />
    </>
  );
};

export default Child;
