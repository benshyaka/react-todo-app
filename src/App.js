import React, { useState, useRef, useEffect } from "react";
import Form from "./components/Form";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        // console.log(task.completed)
        return {...task, completed: "true"}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks
  .map(task => (
    <Todo
      id={task.id}
      name={task.name}
      description={task.description}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
    />
  ));



  function addTask(name, description) {
    const newTask = { id: "todo-" + nanoid(), name: name, description: description, completed: false };
    setTasks([...tasks, newTask]);
  }


  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
   
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
