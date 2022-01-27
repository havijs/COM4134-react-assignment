import {useState} from "react"

function Task({task, updateTaskStatus}) {
    function handleClick() {
        setNextValue(getStatusNextOptions(nextValue)[0])
        updateTaskStatus(task, nextValue)
    }
    function handleSelectClick(event) {
        setNextValue(event.target.value)
    }
    function getStatusNextOptions(status){
        if(status === 'ToDo'){
            return ['InProgress']
        }
        if(status === 'InProgress'){
            return ['Blocked', 'InQA']
        }
        if(status === 'Blocked'){
            return ['ToDo']
        }
        if(status === 'InQA'){
            return ['ToDo', 'Done']
        }
        if(status === 'Done'){
            return ['Deployed']
        }
        if(status === 'Deployed'){
            return []
        }
    }
    const [nextValue, setNextValue] = useState(getStatusNextOptions(task.status)[0])
    return (
        <div className="task-box">
            <h3 className="task-title">{task.title}</h3>
            <p className="task-desc">{task.description}</p>
            <div className="task-status">{task.status}</div>
            { task.status !== 'Deployed' ? <>
                <button onClick={handleClick} className="change-status-btn">Change status to</button>
                <select onChange={handleSelectClick} name="status" id="status-select">
                    {getStatusNextOptions(task.status).map((value) => { return <option key={value} value={value}>{value}</option>})}
                </select></> : null
            }
        </div>
    )
}

export default Task
