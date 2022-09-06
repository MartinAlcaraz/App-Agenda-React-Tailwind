import { useState, useEffect } from 'react'
import { savedTasks as data } from "../savedTasks.js";
import { createContext } from 'react';

export const TaskContext = createContext();  // nombre del contexto  // TaskContext.Provider contiene las variables que se pasan como parametros


export function TaskContextProvider(props) {    // componente que contiene el contexto
    // variables que pueden ser accedidas desde cualquier otro componenete hijo
    //  para ser accedido desde otro componente hay que pasarlo como propiedad en el componente <TaskContext.Provider>

    const [tasks, setTasks] = useState([]);         // se crea la variable de estado global como tasks = []

    useEffect(() => {		        // se va setear la variable de estado (tasks) una sola vez. [] , con los datos importados de la variable data
        setTasks(data);
    }, []);

    function createTask(tarea) {		// recibe  el objeto tarea desde taskForm
        const newTask = {
            id: tasks.length,
            nombre: tarea.texto,
            descripcion: tarea.descripcion
        }
        setTasks([...tasks, newTask]);	// se copian las tareas de tasks y se agrega la nueva en un nuevo arreglo
    }

    function deleteTask(idTask) {		// idTask es el id del objeto a eliminar
        const newTasks = tasks.filter((tarea) => { return tarea.id !== idTask }); // filter devuelve todas las tareas excepto la que tiene el id == a idTask
        setTasks(newTasks);												// se asigna un nuevo arreglo a la variable de estado tasks
    }

    return (
        <TaskContext.Provider value={{tasks, createTask, deleteTask}}> 
            {props.children}
        </TaskContext.Provider>
    )
}