
import React from 'react';

function Todo(){
const [task,setTask] = React.useState("")
    const handleTask = ()=>{
       // setTask(task)
        console.log(task)
    }

    return (
        <>
        
        <input placeholder="Enter task" />
        <button onClick={handleTask()}>Add Task</button>
        
        </>
    )


}
export default Todo;