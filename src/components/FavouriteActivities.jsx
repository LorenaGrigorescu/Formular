import React, { useState } from 'react';
import './FavouriteActivities.css'; // Importați fișierul CSS

function FavouriteActivities({ activities }) {
  const handleMouseEnter = (event) => {
    event.target.classList.add('hovered');
  };

  const handleMouseLeave = (event) => {
    event.target.classList.remove('hovered');
  };

  return (
    <div className="fragment">
      <p className="heading">Favourite activities</p>
      <ul>
        {activities.map((item, index) => (
          <li
            className="listItem"
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="circle"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteActivities;
