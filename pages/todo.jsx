import { useState } from "react";
import classes from './todo.module.css'

export default function Todo({todo}){
    const [isCompleted,setIsCompleted]=useState(false)
    const [isNotCompleted,setIsNotCompleted]=useState("")

    function completedHandle() {
        console.log(todo);
        setIsCompleted(true)
    }

    function incompleteHandle() {
        setIsNotCompleted(true)
    }
    
    return(
        <div className={isCompleted && !isNotCompleted ? classes.completed : classes.incomplete}>
           <li>{todo}</li>
           <button onClick={completedHandle}>Completed</button>
           <button onClick={incompleteHandle}>Reset</button>
        </div>
    )

    
    // return(
    //     <div className={isNotCompleted && classes.incomplete}>
            
    //     </div>
    // )
}