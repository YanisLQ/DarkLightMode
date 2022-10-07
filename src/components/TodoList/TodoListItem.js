import React from 'react'
import { Button } from 'react-bootstrap'

function TodoListItem({listItem, todoList, setTodoList}) {
    const deleteTodoItem = () => {
        setTodoList(todoList.filter(
            item => item.id !== listItem.id
        ))
    }

  return (
    <div style={itemStyle}>
        <h5 style={itemStyleElement}>
            {listItem.name}
            <Button style={{marginLeft: 15}} variant="danger" onClick={deleteTodoItem}>Supprimer</Button>
        </h5>
    </div>
  )
}

const itemStyle = {
    backgroundColor: 'lemonchiffon',
    borderRadius: 12,
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 8,
    }

const itemStyleElement = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItem: 'center'
}

export default TodoListItem