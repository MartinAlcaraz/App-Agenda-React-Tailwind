import { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext.jsx'

function TaskForm() {

    const { createTask } = useContext(TaskContext);      // se importa la funcion createTask

    const [texto, setTexto] = useState('');         //   se crea la variable de estado 'texto' y la funcion 'setTexto' que permite modificar la variable 'texto'
    const [descripcion, setDescripcion] = useState('');

    const handlerSubmit = (e) => {
        e.preventDefault();
        createTask({ texto, descripcion });      // createTask = funcion declarada en TaskContext.jsx
        setTexto('');
        setDescripcion('');
    }

    return (
        <div className='p-4 mb-2 bg-gradient-to-r from-cyan-800 to-cyan-500 w-auto rounded-md border-solid border-2 border-gray-800'>
            <form onSubmit={handlerSubmit}>
                <input placeholder="Escriba una tarea" type="text"
                    onChange={(e) => setTexto(e.target.value)} value={texto} 
                    className="p-2 sm:p-4 sm:mx-auto my-2 w-full rounded-md border-solid" required>
                </input>
                <textarea placeholder='Escriba una descripcion' onChange={(e) => setDescripcion(e.target.value)}
                    value={descripcion} 
                    className="p-2 sm:p-4 sm:mx-auto my-2 w-full rounded-md border-solid resize-none" required >
                </textarea>
                <button className= "btn-primary">
                    Agregar tarea</button>
            </form>
        </div>
    )
}

export default TaskForm;