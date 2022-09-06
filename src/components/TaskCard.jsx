import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'

function TaskCard({ tarea }) {

    const { deleteTask } = useContext(TaskContext);  // se importa la funcion de TaskContext

    return (
    <div className="card">
        <div>
            <h2> {tarea.nombre}</h2>
            <p> {tarea.descripcion}</p>
        </div>
        <button onClick={()=> deleteTask(tarea.id)}>Eliminar tarea</button>
    </div>
    )
}

export default TaskCard;