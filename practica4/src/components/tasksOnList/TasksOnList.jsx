import PropTypes from "prop-types";

const TasksOnList = ({ tasks, setTasks }) => {
    
    const handleAddCheck = (index) => {
        
        const taskElements = document.querySelectorAll(".task");
        taskElements[index].classList.toggle("completed"); //toggle añade la clase si el elemento no la tiene, si ya la tiene la elimina
    };
    
    
    const handleDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
      };

    return (
        <div>
            <h2>Tasks:</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className="task">
                        
                        <span>{task}</span>
                        
                        <input type="button" className='checkButton' value={"Completed"} onClick={() => handleAddCheck(index)}/> 
                        <input type="button" className='deleteButton' value={"Elimintated"} onClick={() => handleDeleteTask(index)}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

TasksOnList.propTypes = {
    tasks: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired
};

export default TasksOnList;

