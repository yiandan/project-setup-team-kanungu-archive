import React, { useState } from "react";

const Item = ({ todoItem, completedTodo}) => {
  const [edit, setEdit] = useState(false);
  const [todo] = useState(todoItem.task);

  const handleEdit = () => {
    setEdit(!edit);
  };

 
  return (
    <div className="todo" key={todoItem.id}>
      {!edit ? (
        <>
          <input
            type="checkbox"
            checked={todoItem.completed}
            onChange={() => completedTodo(todoItem.id)}
            disabled={todoItem.completed ? true : false}
          />
          <span>{todoItem.task}</span>
          <button onClick={handleEdit} disabled={todoItem.completed}>
            Edit
          </button>
        </>
      ) : (
        <>
       <input
            type="text"
            value={todo}
            name="todo"
        />
          <button onClick={handleEdit}>Cancel</button>
          <button type="submit">
            Save
          </button>
        </>
      )}
    </div>
  );
};

export default Item;