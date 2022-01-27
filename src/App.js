import {useState} from "react"
import { AddTask } from "./AddTask"
import Tasks from './Tasks'

export function App() {
    const [tasks, setTasks] = useState({})
    function addTask(task) {
        setTasks({...tasks, [task.id]: task})
    }
    function updateTaskStatus(task, status) {
        const newTasks = {...tasks}
        newTasks[task.id] = {...task, status}
        setTasks(newTasks)
    }
    return (
        <div>
            <div id="navbar">
                <h1>Task Management {'>'} Home</h1>
            </div>
            <AddTask addTask={addTask}/>
            <Tasks updateTaskStatus={updateTaskStatus} tasks={tasks} />
        </div>
    )
}
