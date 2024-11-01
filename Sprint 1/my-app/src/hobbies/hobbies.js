import React, { useState } from "react";
import './hobbies.css';
const HobbiesListPage = () => {
    const hobbies = [
      "Walking",
      "Running",
      "Swimming",
      "Football",
      "Basketball",
      "Fishing",
      "Gardening",
      "Tennis",
      "Painting",
      "Writing",
      "Photography",
      "Sewing",
      "Knitting",
      "Reading",
      "Puzzles",
      "Gaming",
      "Music",
      "Scrapbooking",
      "Cooking",
      "Bird-Watching",
      "Journaling",
      "Model Building",
      "Singing",
      "Yoga",
      "Baking",
      "Meditating"
    ];
  
    return (
      <div className="hobbies-list-container">
        <h1>List of Hobbies to Try</h1>
        <ul className="hobbies-list">
          {hobbies.map((hobby, index) => (
            <li key={index} className="hobby-item">{hobby}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default HobbiesListPage;