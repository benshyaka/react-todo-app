import React, { useEffect, useRef, useState } from "react";


export default function Todo(props) {
 

  const viewTemplate = (
    <div className="stack-small">
      <div  className={"completed-" + props.completed}>
          <label className="todo-title" htmlFor={props.id}>
            {props.name}
          </label> 
          <label className="todo-label" htmlFor={props.id}>
            {props.description}
          </label>
        </div>
        <div className="btn-group">

          <button
          type="button"
          className="btn"
          onClick={() => props.toggleTaskCompleted(props.id)}
          >
            Complete <span className={"visual-" + props.completed}></span>
          </button>

          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete <span className="visually-hidden"></span>
          </button>
        </div>
    </div>
  );


  return <li className="todo">{viewTemplate}</li>;
}
