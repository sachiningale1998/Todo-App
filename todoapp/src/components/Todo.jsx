
import React from 'react';

function Todo(){
const [task,setTask] = React.useState("")
const [todo,setTodo] = React.useState([]);
const handleChange = (e)=>{

    setTask(e.target.value);
   // console.log("changing input", e.target.value) ;
}
    const handleTask = ()=>{
        setTodo([...todo,task])
       // setTask(task)
        console.log(task)
    }

    return (
        <>
        <h1>Todo</h1>
        <input type={"text"} value={task} placeholder="Enter task" onChange={handleChange}/>
        <button onClick={handleTask}>Add Task</button>
        {
            todo.map((item)=>{
                return <h1>{item}</h1>
            })
        }
        </>
    )


}
export default Todo;