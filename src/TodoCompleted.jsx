import React, { useContext } from "react";
import { TodoContext } from "./Contexts/TodoContext";
import TodoItem from "./TodoItem";

const TodoCompleted = () => {
  const { todos } = useContext(TodoContext);
  const completed = todos.filter(todo => todo.completed === true);

  return (
    <div>
      {completed.length ? (
        <ul>
          {completed.map(complete => (
            <TodoItem todo={complete} key={complete.id} />
          ))}
        </ul>
      ) : (
        <div className='empty-info'>No items found</div>
      )}
    </div>
  );
};

export default TodoCompleted;
