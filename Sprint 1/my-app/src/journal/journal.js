import React, { useState } from "react";
import './journal.css';


function JournalPage() {
 const [entry, setEntry] = useState("");
 const handleChange = (event) => {
   setEntry(event.target.value);
 };
 const handleSubmit = (event) => {
   event.preventDefault();
   console.log(entry);
   setEntry("");
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
       rows="25"
       cols="50"
     />
     <br />
     <button type="submit">Save Entry</button>
   </form>
 </div>
);
}


export default JournalPage;
