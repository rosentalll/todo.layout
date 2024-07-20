import React from "react";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm ";

export default function TodoList() {
    return (
        <ul className="todo-list">
            <li className="completed">
                <Task 
                    description="Completed task"
                    created="created 17 seconds ago"
                />
            </li>
            <li className="editing">
                <Task 
                    description="Editing task"
                    created="created 17 seconds ago"
                />
                <NewTaskForm value="Editing task"/>
            </li>
            <li className="active">
                <Task 
                    description="Active task"
                    created="created 5 minutes ago"
                />
            </li>
        </ul>
    )
}