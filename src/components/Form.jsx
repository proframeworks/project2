import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

//setInputText, inputText,
export const Form = ({  todos, setTodos,  setStatus, edit }) => {
  const [inputText, setInputText] = useState(edit ? edit.value : '');
  const inputRef = useRef(null);

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
        setInputText("");
    };
    
    const statusHandler = (e) => {
      e.preventDefault();
        setStatus(e.target.value);
    }
    useEffect(() => {
      inputRef.current.focus();
    });

    return (
        <form onSubmit={submitHandler}>
          {edit ? ( 
      <>   
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text" 
        className="todo-input" 
        ref={inputRef}
        />
      <button onClick={submitHandler} className="todo-button" type="submit"> submit
        {/* <i className="fas fa-plus-square"></i> */}
      </button>
      </>
    ) : (    
      <>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text" 
        className="todo-input" 
        ref={inputRef}
        />
      <button onClick={submitHandler} className="todo-button" type="submit"> submit
        {/* <i className="fas fa-plus-square"></i> */}
      </button>


      <div className="select">
        {/* <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="uncompleted">Uncompleted</option>
          <option value="completed">Completed</option>
          
        </select> */}
        <button onClick={statusHandler} name="todos" className="filter-todo" value="completed">Completed</button>
        <button onClick={statusHandler} name="todos" className="filter-todo" value="uncompleted">Uncompleted</button>
      </div>
      </>
    


      )}
    </form>
    );
}

export default Form;