import React, { useContext } from "react";
import { TodoContext } from "./Contexts/TodoContext";

const TodoInput = () => {
    const { inputValue, setInputValue, handleAddTodo } = useContext(TodoContext)
    return (<div className="todo-input">
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Create Todo" />
        <button className="input-submit" onClick={handleAddTodo} disabled={inputValue.length < 3} >
            Submit
        </button>
    </div>)
}

export default TodoInput;