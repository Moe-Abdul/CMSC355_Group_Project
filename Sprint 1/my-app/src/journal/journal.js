import React, { useState } from "react";
import './journal.css';

function JournalPage() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]); // State to store journal entries

  const handleChange = (event) => {
    setEntry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (entry.trim() !== "") {
      setEntries((prevEntries) => [...prevEntries, entry]); // Add the new entry to the list
      setEntry(""); // Clear the textarea
    }
  };

  return (
    <div className="journal-page">
      <h2>Journal</h2>
      <p>Welcome to your personal journal.</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={entry}
          onChange={handleChange}
          placeholder="Write your thoughts here..."
          rows="10"
          cols="50"
        />
        <br />
        <button type="submit">Save Entry</button>
      </form>
      
      <div className="entries-container">
        <h3>Your Journal Entries:</h3>
        {entries.length > 0 ? (
          <ul>
            {entries.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No entries yet. Start writing your thoughts!</p>
        )}
      </div>
    </div>
  );
}

export default JournalPage;
