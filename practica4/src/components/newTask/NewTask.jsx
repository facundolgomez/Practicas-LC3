import { useState } from "react";
import PropTypes from "prop-types";

const NewTask = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddEnter = (event) => { //puse para agregar tareas con enter tambien
    if (event.key === "Enter" && newTask !== "") {
        addTask(newTask);
        setNewTask("");
      }
  }

  const handleAddTask = () => {
    if (newTask !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="container">
      <input type="text" placeholder="Write a task" value={newTask} onChange={handleChange} onKeyPress={handleAddEnter}/>
      <button onClick={handleAddTask}>Add task</button>
    </div>
  );
};


NewTask.propTypes = {
    addTask: PropTypes.func.isRequired 
  };



export default NewTask;

