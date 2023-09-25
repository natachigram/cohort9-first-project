import TodoInput from './TodoInput';
import TodoLists from './TodoLists';
import './App.css';
import Tabs from './Tabs';
import TodoCompleted from './TodoCompleted';
import { TodoContext } from './Contexts/TodoContext';
import { useContext } from 'react';
import TodoUncomplete from './TodoUncomplete';

const App = () => {
  const { showCompleted, showAll, showUncomplete } = useContext(TodoContext);
  return (
    <div className='App'>
      <Tabs />
      <TodoInput />
      <div className='todo-wrapper'>
        {!showAll ? <TodoLists/> : ''}
        {!showCompleted ? <TodoCompleted/> : ''}
        {!showUncomplete ? <TodoUncomplete/> : ''}
      </div>
    </div>
  );
};

export default App;
