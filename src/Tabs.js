import React, { useContext } from 'react';
import { TodoContext } from './Contexts/TodoContext';

const Tabs = () => {
  const { handleCompleted, handleAll, handleUncomplete } =
    useContext(TodoContext);
  return (
    <nav className='tab'>
      <button onClick={handleAll}>All</button>
      <button onClick={handleCompleted}>Completed</button>
      <button onClick={handleUncomplete}>Uncompleted</button>
    </nav>
  );
};

export default Tabs;
