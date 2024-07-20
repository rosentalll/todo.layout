import React from "react"; 

export default function NewTaskForm(props) {
    return (
        <input 
            type="text" 
            className="edit" 
            value={props.value}
        />
    )
}