import React from "react";
import Todolist from "./Tasks/Tasklist";
import Context from "./context";
import Addtodo from "./Tasks/Addtask";

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "Buy milk" },
    { id: 2, completed: false, title: "Buy meat" },
    { id: 3, completed: false, title: "Buy juice" },
    { id: 4, completed: false, title: "Send a parcel" },
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo: removeTodo }}>
      <div className=" wrapper">
        <h1> List of tasks on React</h1>
        <Addtodo onCreate={addTodo} />
        {todos.length ? (
          <Todolist todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No tasks!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
