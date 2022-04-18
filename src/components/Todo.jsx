import React from 'react';
import Form from './Form';


const Todo = ({text, todo, todos, setTodos}) => {
    

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
            
            </button>
        <button onClick={deleteHandler} className='trash-btn'> trash
            
            </button>
            <button onClick={editHandler} className='edit-btn'>Edit
           
            </button>
            
        
        </div>
    );
};

export default Todo;