import React from 'react';
import Form from './Form';

const Todo = ({text, todo, todos, setTodos, inputText, setInputText}) => {
    // const inputTextHandler = (e) => {
    //     console.log(e.target.value);
    //     setInputText(e.target.value);
    // };
    // const submitTodoHandler = (e) => {
    //     e.preventDefault();
    //     setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
    //     setInputText("");
    // };
    //Events
    const deleteHandler = () => {
         setTodos(todos.filter((el) => el.id !== todo.id))
        
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    const editHandler = () => {
       <Form />
    }
    return (
        <div className="todo">
        <li className='todo-item'>{text}</li>
        <button onClick={completeHandler} className='complete-btn'>complete
            <i className="fas fa-check"></i>
            </button>
        <button onClick={deleteHandler} className='trash-btn'> trash
            <i className='fas fa-trash'></i>
            </button>
            <button onClick={editHandler} className='edit-btn'>Edit
            <i className='fas fa-trash'></i>
            </button>
        </div>
    );
};

export default Todo;