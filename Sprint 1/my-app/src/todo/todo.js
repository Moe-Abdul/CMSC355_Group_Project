import React, { useState } from "react";
import './todo.css';


function TodoPage() {
 const [tasks, setTasks] = useState([]);
 const [newTask, setNewTask] = useState("");


 const addTask = () => {
   if (newTask.trim()) {
     setTasks([...tasks, { description: newTask, completed: false }]);
     setNewTask("");
   }
 };


 const toggleCompletion = (index) => {
   const updatedTasks = [...tasks];
   updatedTasks[index].completed = !updatedTasks[index].completed;
   setTasks(updatedTasks);
 };


 const deleteTask = (index) => {
   const updatedTasks = tasks.filter((_, i) => i !== index);
   setTasks(updatedTasks);
 };


 return (
   <div className="todo-page">
     <h2>To Do</h2>
     <p>Write your to-do's here</p>
     <div className="todo-input">
       <input
         type="text"
         placeholder="Enter a new task..."
         value={newTask}
         onChange={(e) => setNewTask(e.target.value)}
       />
       <button onClick={addTask}>Add Task</button>
     </div>
     <ul className="todo-list">
       {tasks.map((task, index) => (
         <li key={index} className={`todo-item ${task.completed ? "completed" : ""}`}>
           <span onClick={() => toggleCompletion(index)}>{task.description}</span>
           <button onClick={() => deleteTask(index)}>Delete</button>
         </li>
       ))}
     </ul>
   </div>
 );
}


export default TodoPage;
