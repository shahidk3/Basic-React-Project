import React, { useState } from "react"

function ToDoList(){

    const [Task, setTask] = useState([""]);
    const [NewTask, setNewTask] = useState("");

    function handleInputChange(event) {

        setNewTask(event.target.value);
    }

    function addTask(){
        
        if(NewTask.trim() !== ""){
            setTask(t => [...t, NewTask]);
            setNewTask("");
        }
 
    }

    function deleteTask(index){
        const updatedTasks = Task.filter((Element, i) => i !== index);
        setTask(updatedTasks)
    }

    function toMoveTaskUp(index){

        if (index > 0){
            const updatedTasks = [...Task];
            [updatedTasks[index], updatedTasks[index - 1]] = [ updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks)
        }

    }


    function toMoveTaskDown(index){

        if (index < Task.length - 1){
            const updatedTasks = [...Task]; 
            [updatedTasks[index], updatedTasks[index + 1]] = [ updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks)
        }

    }

    return(<div className="to-do-list">

        <h1>Todo-List</h1>

        <div>
            <input
            type="text"
            placeholder="Enter a Task..."
            value={NewTask}
            onChange={handleInputChange}/>

            <button
            className="add-button"
            onClick={addTask}>
                Add
            </button>
            
        </div>

        <ol>
            {Task.map((Task, index) => 
            <li key={index}>
                <span className="text"> {Task} </span>
                <button
                className="delete-button"
                onClick={() => deleteTask(index)}>
                    Delete
                </button>
                <button
                className="move-up-button"
                onClick={() => toMoveTaskUp(index)}>
                    Up
                </button>
                <button
                className="move-down-button"
                onClick={() => toMoveTaskDown(index)}>
                    Down
                </button>

            </li>
            )}
        </ol>

    </div>);
}

export default ToDoList