import { useState } from "react"

const TodoList = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
        setTasks([...tasks, newTask])
        setNewTask('')
    }

    const listTasks = () => {
        return tasks.map((task, index) => <li key={index}>{task}</li>)
    }

    const handdleInputChange = e => setNewTask(e.target.value)

    const handleDeleteTask = index => {
        const updatedTasks = [...tasks]
        updatedTasks.splice(index, 1)
        setTasks(updatedTasks)
    }

    return (
        <section>
            <h2>Lista de tareas</h2>
            <input type="text" value={newTask} onChange={handdleInputChange} placeholder="Nueva Tarea" /><br /><br />
            <button onClick={addTask}>Añadir Tarea</button>
            <button onClick={handleDeleteTask}>Borrar Tarea</button>
            <ul>{listTasks()}</ul>
            <hr />
        </section>
    )

}

export default TodoList