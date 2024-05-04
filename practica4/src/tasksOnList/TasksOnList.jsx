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
                        
                        <i className='bx bx-check' onClick={() => handleAddCheck(index)}></i> 
                        <i className='bx bx-trash' onClick={() => handleDeleteTask(index)}></i>
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

