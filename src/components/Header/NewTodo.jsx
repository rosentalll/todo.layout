import React from "react";

export default function NewTodo(props) {
    return ( 
        <input 
            className="new-todo" 
            placeholder={props.placeholder} 
            autoFocus
        />
    )
}