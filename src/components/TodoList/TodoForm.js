import { nanoid } from 'nanoid';
import { Form, Button } from 'react-bootstrap';


function TodoForm({todo, setTodo, setTodoList, todoList}) {
    
    const handleChange = (event) => {
        setTodo(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, {name: todo, id: nanoid()}]);
        setTodo("");
    }

   
    return (
        <div className="container">
            <h3>Ajouter Todo :</h3>
            <Form onSubmit={(event) => handleSubmit(event)} style={{marginBottom: 20}}>
                <Form.Group>
                    <Form.Control type='text' value={todo} placeholder="Entrer todo" onChange={(event) => handleChange(event)} />
                    <Button variant='primary' type="submit" style={{marginTop: 20}}>Ajouter</Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default TodoForm;