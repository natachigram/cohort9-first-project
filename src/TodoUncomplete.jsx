import React, { useContext } from 'react';
import { TodoContext } from './Contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoUncomplete = () => {
  const { todos } = useContext(TodoContext);
  const unCompleted = todos.filter((todo) => !todo.completed);

  return (
    <div>
      {unCompleted.length ? (
        <ul>
          {unCompleted.map((unComplete) => (
            <TodoItem todo={unComplete} key={unComplete.id} />
          ))}
        </ul>
      ) : (
        <div className='empty-info'>No items found</div>
      )}
    </div>
  );
};

export default TodoUncomplete;
