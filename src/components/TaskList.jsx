import TaskCard from "./TaskCard.jsx";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx"; 

function TaskList(){

	const { tasks } = useContext(TaskContext);	// se importa las tasks de TaskContext

    if (tasks.length == 0) {
		return <h2>No hay tareas aún</h2>
	}
    return (
		<div>
			{tasks.map((tarea) => {
				return <TaskCard key={tarea.id} tarea= {tarea} />
			})}
		</div>
	)
}

export default TaskList;