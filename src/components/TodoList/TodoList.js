import { Fragment } from 'react';
import TodoListItem from './TodoListItem';


function TodoList({ todoList, setTodoList }) {
    return (
        <div>
            {
                todoList.map((listItem) => (
                    <Fragment key={listItem.id}>
                        <TodoListItem
                            setTodoList={setTodoList}
                            listItem={listItem}
                            todoList={todoList}
                        />
                    </Fragment>
                ))
            }
        </div>
    );
}

export default TodoList;