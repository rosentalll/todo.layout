import React from "react";
import TodoList from "./TodoList/TodoList";
import Footer from "./Footer.jsx/Footer";

export default function Main() {
    return ( 
        <section className="main">
            <TodoList />
            <Footer />
        </section>
    )
}