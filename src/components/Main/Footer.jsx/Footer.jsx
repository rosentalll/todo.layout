import React from "react";
import Filter from "./Filters";

export default function Footer() {
    return (
        <footer className="footer">
           <span class="todo-count">1 items left</span> 
            <Filter />
           <button class="clear-completed">Clear completed</button>
        </footer>
    )
}