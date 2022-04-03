import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "Task 1", description: "Task 1 description", completed: true },
  { id: "todo-1", name: "Task 2", description: "Task 2 description", completed: false },
  { id: "todo-2", name: "Task 3", description: "Task 3 description", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
