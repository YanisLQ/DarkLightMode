import { Component } from "react";
import { Button } from 'react-bootstrap';

class Example1 extends Component {
    constructor() {
        super()
        this.state = {
            compteur: 0,
        }
    }

    increment() {
        this.setState({
            compteur: Math.round(Math.random() * 100),
        })
    }
    reset() {
        this.setState({
            compteur: 0,
        })
    }

    render() {
        return(
            <div>
                <h2>Espèce de beau gosse va ! Voici ton compteur :</h2>
                <p>{this.state.compteur} % de beau gosse</p>
                <Button variant='primary' onClick={() => this.increment()}>Tchatcheur va !</Button>
                <Button variant='danger' style={{marginLeft: 16}} onClick={() => this.reset()}>Reset !</Button>
            </div>
        ) 
    }
}

export default Example1;