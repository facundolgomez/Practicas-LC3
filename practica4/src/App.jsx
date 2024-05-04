/*
Debemos crear una aplicación de manejo de tareas personales.

La app nos debe permitir:

    Agregar una nueva tarea a la lista. 

    Marcar una tarea como completada e indicarlo de alguna manera (tachando el texto o cambiando el color del mismo (gris claro, por ejemplo)).

    Borrar una tarea de la lista.

    Sugerencias:

    Crear el estado de las tareas en App.js para que se facilite el pasaje entre componentes. 

    Crear un componente tipo lista que nos muestre todas las tareas de una lista. 

    Crear un componente que nos permite agregar una nueva tarea. 

*/

import { useState } from "react";
import NewTask from "./newTask/NewTask";
import TasksOnList from "./tasksOnList/TasksOnList";

const App = () => {
  const [arrayTasks, setArrayTasks] = useState([]);

  const addTask = (task) => {
    setArrayTasks([...arrayTasks, task]);
  };

  const updateTasks = (updatedTasks) => {
    setArrayTasks(updatedTasks);
  };

  return(
    <div className="things-to-do">
      <h1>Things to do</h1>
      <ul>
        <NewTask addTask = {addTask}/> 
        <TasksOnList tasks = {arrayTasks} setTasks={updateTasks} />
      </ul>
    </div>
  );
}

export default App;





