import { Component } from "react";
import { Button, Form } from 'react-bootstrap';
class Example4 extends Component {

    constructor() {
        super()
        this.state = {
            userName: '',
        }
    }

    handleChange(event){
        this.setState({
            userName: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        alert('Bonjour Benjamin (Alerte) :' + this.state.userName)
    }

   render() {
    return (
        <div style={{marginTop: 25, backgroundColor: 'purple'}}>
            <h2>Le formulaire de BO GEAUCEUX</h2>
            <Form onSubmit={(event) => this.handleSubmit(event)} style={{display: 'flex', alignItem: 'center', justifyContent: 'center'}}>
                <Form.Label>
                    <h3>Votre nom: </h3>
                </Form.Label>
                <Form.Control style={{width: '20%'}} type='text' value={this.state.userName} onChange={(event) => this.handleChange(event)} />
                    <Button variant='primary' type='submit'>Envoie du FORRRRRRRM</Button>
            </Form>
        </div>
    )
   }
}

export default Example4;