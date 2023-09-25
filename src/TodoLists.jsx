import TodoItem from './TodoItem';
import React, { useContext } from "react";
import { TodoContext } from "./Contexts/TodoContext";

const TodoLists = () => {
   const { todos } = useContext(TodoContext);

   return (
      <div>
         {todos.length ? (
            <ul>
               {todos.map(todo => (
                  <TodoItem todo={todo} key={todo.id} />
               ))}
            </ul>
         ) : (
            <div className='empty-info'>No items found</div>
         )}
      </div>
   );
}

export default TodoLists;
