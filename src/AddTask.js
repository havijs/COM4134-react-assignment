import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';

export function AddTask({addTask}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    function handleClick() {
        addTask({
            id: uuidv4(),
            title,
            description,
            status: 'ToDo'
        })
        setTitle('')
        setDescription('')
    }
    return (
        <div id="add-task">
            <h2>Add a new Task</h2>
            <input 
                onChange={(event) => {setTitle(event.target.value)}}
                value={title}
                type="text"
                placeholder="Title"
                id="title-input">
            </input>
            <textarea 
                onChange={(event) => {setDescription(event.target.value)}}
                value={description}
                placeholder="Description"
                id="description-input">
            </textarea>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
