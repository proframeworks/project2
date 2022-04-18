import React from "react";


const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    
    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
        setInputText("");
    };
    
    const statusHandler = (e) => {
      e.preventDefault();
        setStatus(e.target.value);
    }

    return (
        <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text" 
        className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit"> submit
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
    </form>
    );
}

export default Form;