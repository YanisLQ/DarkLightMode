import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


function Todo() {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
   
    return (
        <div className="container">
            <TodoForm 
                todo={todo}
                setTodo={setTodo}
                setTodoList={setTodoList}
                todoList={todoList}
            />
            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
    );
}

export default Todo;