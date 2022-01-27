import Task from './Task'

function Tasks({tasks, updateTaskStatus}) {
    return (
        <>
            <h2>Tasks</h2>
            <div id="task-list">
                {Object.values(tasks).map((task) => { return <Task key={task.id} task={task} updateTaskStatus={updateTaskStatus}/>})}
            </div>
        </>
    )
}

export default Tasks
