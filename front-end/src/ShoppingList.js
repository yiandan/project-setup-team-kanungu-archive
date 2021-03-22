import React, { useState } from "react";
import Item from "./Item";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    let todoObject = {
      id: todos.length + 1,
      task: todo,
      completed: false,
    };

setTodos([...todos, todoObject]);
    setTodo("");
  };

 
return (
    <div className="container">
     <div className="body">
        <h3>Shopping List</h3>
        <div className="todo-form">
          <form onSubmit={handleSubmit}>
            <label>
              Add item 
              <input
                type="text"
                value={todo}
                name="todo"
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          {todos.length > 0 ? (
            <div className="todo-box">
              <h3>Items</h3>
              {todos.map((todoItem) => {
                return (
                  <Item
                    todoItem={todoItem}
                   setTodos={setTodos}
                    todos={todos}
                    key={todoItem.id}
                  />
                );
              })}
            </div>
          ) : (
            <div>You have no items in your list.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;