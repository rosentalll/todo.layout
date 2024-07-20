import React from "react";
import Heading1 from "./Heading1";
import NewTodo from "./NewTodo";

export default function Header() {
    return ( 
        <header className="header">
            <Heading1 title="todos" />
            <NewTodo placeholder="What needs to be done?" />
        </header>
    )
}