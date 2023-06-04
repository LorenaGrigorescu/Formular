import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ChildPhoto = () => {
  const [childData, setChildData] = useState(null);
  const { name: childName } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/children/${childName}`)
      .then((response) => {
        setChildData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching child data:", error);
      });
  }, [childName]);

  if (!childData) {
    return <div>Loading...</div>;
  }

  const photoURL = `http://localhost:8080/api/photos/${childName}.png`;

  const { name, favoriteActivities, description, birthdate, photoURI } =
    childData;
  return (
    <div className="child-page-container">
      <div className="child-image-container">
        <img src={photoURL} alt={name} className="child-image" />
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default ChildPhoto;
