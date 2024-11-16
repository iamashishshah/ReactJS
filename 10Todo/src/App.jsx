import { useState } from "react";
import { TodoContextProvider } from "./contexts/index.js";
import { useEffect } from "react";
import { TodoItem } from './components/index.js'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, comleted: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    (localStorage.setItem("todos", JSON.stringify(todos)))
  }, [todos])


  return (
    <TodoContextProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      {
        todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo = {todo} />
          </div>
        ))
      }

    </TodoContextProvider>
  );
}

export default App;

