import React, { useState } from "react";
import './mood.css';

const emotions = [
  { label: "Happy", icon: "😊", className: "happy" },
  { label: "Excited", icon: "😄", className: "excited" },
  { label: "Anxious", icon: "😕", className: "anxious" },
  { label: "Angry", icon: "😠", className: "angry" },
  { label: "Sad", icon: "😢", className: "sad" },
];

function MoodPage() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodEntries, setMoodEntries] = useState([]);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    const newEntry = {
      date: new Date().toLocaleDateString(),
      mood: mood.label,
    };
    setMoodEntries([...moodEntries, newEntry]);
  };

  return (
    <div className={`mood-page ${selectedMood ? selectedMood.className : ''}`}>
      <h2>Mood Tracker</h2>
      <p>How are you feeling today?</p>
      <div className="emotions-list">
        {emotions.map((emotion) => (
          <button
            key={emotion.label}
            className={`emotion-button ${emotion.className}`}
            onClick={() => handleMoodSelect(emotion)}
          >
            <span className="emotion-icon">{emotion.icon}</span>
            <span>{emotion.label}</span>
          </button>
        ))}
      </div>
      {selectedMood && (
        <div className="selected-mood">
          <h3>You selected: {selectedMood.label}</h3>
        </div>
      )}
      <div className="mood-entries">
        <h3>Mood History</h3>
        <ul>
          {moodEntries.map((entry, index) => (
            <li key={index}>
              {entry.date}: {entry.mood}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MoodPage;