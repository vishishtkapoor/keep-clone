import React, { useState, useEffect } from 'react';
import './App.css';
import { CreateTodo } from './component/CreateTodo';
import { Todos } from './component/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []); // Empty dependency array to run only once

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos} ></Todos>
    </div>
  );
}

export default App;
