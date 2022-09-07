import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext.jsx'

function TaskCard({ tarea }) {

    const { deleteTask } = useContext(TaskContext);  // se importa la funcion de TaskContext

    return (
    <div className="card">
        <div>
            <h2 className='font-bold capitalize'> {tarea.nombre}</h2>
            <p className='first-letter:capitalize break-words'> {tarea.descripcion}</p>
        </div>
        <button className='btn-primary px-3 py-1' onClick={()=> deleteTask(tarea.id)}>Eliminar tarea</button>
    </div>
    )
}

export default TaskCard;