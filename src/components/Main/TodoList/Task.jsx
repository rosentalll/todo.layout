import React from "react";

export default function Task(props) {
    return (
        <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>
                <span className="description">{props.description}</span>
                <span className="created">{props.created}</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    )
}