import React from 'react';
import Form from './Form';
import { useState } from 'react';


const Todo = ({text, todo, todos, setTodos, inputText, setInputText}) => {
    
    // const [edit, setEdit] = useState([]);
  
    // const updateTodo = (todoId, newValue) => {
       
    //     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    //   };
    
    //   const submitUpdate = text => {
    //     updateTodo(todo.id, text);
    //     setEdit({
    //         text: text, completed: false, id: Math.random() * 1000
    //     });
    //   };
      
    //   if (edit.id) {
    //     return <Form edit={edit} onSubmit={submitUpdate} />;
    //   }
    const deleteHandler = () => {
         setTodos(todos.filter((currentTodo) => currentTodo.id !== todo.id))
        
    };
    const completeHandler = () => {
        setTodos(todos.map((currentTodo) => {
            if(currentTodo.id === todo.id){
                return {
                    ...currentTodo, completed: !currentTodo.completed
                }
            }
            return currentTodo;
        }))
    }
    
    return (
        <div className="todo">
        <li className='todo-item'>{text}</li>
        <button onClick={completeHandler} className='complete-btn'>complete</button>
            
        <button onClick={deleteHandler} className='delete-btn'> delete</button>

        <button  className='edit-btn'>Edit
        </button>
            
        
        </div>
    );
};

export default Todo;