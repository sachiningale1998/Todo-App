
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
        {
            todo.map((item)=>{
                return <h1>{item}</h1>
            })
        }
        <input type={"text"} value={task} placeholder="Write Something" onChange={handleChange}/>
        <button onClick={handleTask}>+</button>
        
        </>
    )


}
export default Todo;