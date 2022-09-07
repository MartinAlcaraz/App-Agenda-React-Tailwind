import TaskCard from "./TaskCard.jsx";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx"; 

function TaskList(){

	const { tasks } = useContext(TaskContext);	// se importa las tasks de TaskContext

    if (tasks.length == 0) {
		return (
			<div className="task-list">
				<h2 className="font-medium">No hay tareas aún</h2>
			</div>
		)
	}
    return (
		<div className="task-list">
			{tasks.map((tarea) => {
				return <TaskCard key={tarea.id} tarea= {tarea} />
			})}
		</div>
	)
}

export default TaskList;