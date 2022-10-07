import { Component } from "react";
import { Button } from 'react-bootstrap';
class Example3 extends Component {

    constructor() {
        super()
        this.state = {
            isToggle: true
        };
    }

    handleClick() {
        this.setState({
            isToggle: !this.state.isToggle,
        })
    }

   render() {
    return (
        <div style={{marginTop: 25, backgroundColor: 'yellow'}}>
            <h2>Le toggle de beau gosse !!!</h2>
            <Button variant="primary" onClick={() => this.handleClick()}> 
                {this.state.isToggle ? 'OUAIS BO GOSS' : 'NON BEAU GEAUSSE'}
            </Button>
        </div>
    )
   }
}

export default Example3;