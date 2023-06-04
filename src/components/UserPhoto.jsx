import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserPhoto = () => {
  const [userData, setuserData] = useState(null);
  const { name: userName } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${userName}`)
      .then((response) => {
        setuserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userName]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const photoURL = `http://localhost:8080/api/photos/${userName}.png`;

  const { username, password, description, birthdate } = userData;
  return (
    <div className="child-page-container">
      <div className="child-image-container">
        <img src={photoURL} alt={username} className="child-image" />
        <h2>{username}</h2>
      </div>
    </div>
  );
};

export default UserPhoto;
